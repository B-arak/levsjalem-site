/**
 * אינטגרציה עם Grow (משולם) — Meshulam Pay
 *
 * מסמכי API: https://grow-il.readme.io/ (יש לבדוק ולאמת את הפרטים מול לוח הבקרה של Grow)
 *
 * משתני סביבה נדרשים ב-.env.local (לא נכלל ב-git):
 *   GROW_PAGE_CODE=<הקוד מ-Grow Dashboard → API>
 *   GROW_API_KEY=<מפתח API מ-Grow>
 *   GROW_USER_ID=<מזהה המשתמש מ-Grow>
 *   GROW_API_URL=https://sandbox.meshulam.co.il/api/light/server/1.0/createPaymentProcess  (sandbox / production)
 *   GROW_SUCCESS_URL=https://www.levshalem.net/thank-you
 *   GROW_CANCEL_URL=https://www.levshalem.net/checkout?canceled=1
 *   GROW_WEBHOOK_URL=https://www.levshalem.net/api/grow-webhook
 *
 * אם משתני הסביבה לא הוגדרו — המערכת חוזרת ל-"mode: mock" שמפנה לדף תודה (לפיתוח/דמו).
 */

export type GrowPaymentRequest = {
  orderId: string;
  amount: number;
  description: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
  };
};

export type GrowPaymentResult = {
  paymentUrl: string;
  mode: "live" | "mock";
};

export async function createGrowPayment(
  req: GrowPaymentRequest
): Promise<GrowPaymentResult> {
  const pageCode = process.env.GROW_PAGE_CODE;
  const apiKey = process.env.GROW_API_KEY;
  const userId = process.env.GROW_USER_ID;
  const apiUrl = process.env.GROW_API_URL;
  const successUrl = process.env.GROW_SUCCESS_URL || "https://www.levshalem.net/thank-you";
  const cancelUrl = process.env.GROW_CANCEL_URL || "https://www.levshalem.net/checkout?canceled=1";
  const webhookUrl = process.env.GROW_WEBHOOK_URL || "https://www.levshalem.net/api/grow-webhook";

  if (!pageCode || !apiKey || !userId || !apiUrl) {
    return {
      paymentUrl: `${successUrl}?orderId=${req.orderId}&mock=1`,
      mode: "mock",
    };
  }

  const params = new URLSearchParams({
    pageCode,
    userId,
    apiKey,
    sum: String(req.amount),
    paymentType: "regular",
    currency: "1",
    description: req.description,
    pageField_fullName: req.customer.fullName,
    pageField_phone: req.customer.phone,
    pageField_email: req.customer.email,
    cField1: req.orderId,
    successUrl,
    cancelUrl,
    cgUrl: webhookUrl,
  });

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) {
    throw new Error(`Grow API error: ${res.status} ${res.statusText}`);
  }

  const body = (await res.json()) as {
    status: number;
    data?: { url?: string; processId?: string };
    err?: string;
  };

  if (body.status !== 1 || !body.data?.url) {
    throw new Error(`Grow returned error: ${body.err || "Unknown"}`);
  }

  return { paymentUrl: body.data.url, mode: "live" };
}

export type GrowWebhookPayload = {
  status: string;
  amount?: string;
  asmachta?: string;
  cField1?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  paymentType?: string;
};

export function verifyGrowWebhook(_payload: GrowWebhookPayload): boolean {
  return true;
}
