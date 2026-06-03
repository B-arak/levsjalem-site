/**
 * שליחת מיילים לאישור הזמנה.
 *
 * משתני סביבה (.env.local):
 *   ORDER_NOTIFY_EMAIL=barakuty@gmail.com
 *   RESEND_API_KEY=<אופציונלי - אם משתמשים ב-Resend>
 *   SENDGRID_API_KEY=<אופציונלי - אם משתמשים ב-SendGrid>
 *
 * אם לא הוגדר ספק מייל — המערכת רק כותבת ל-console.log (לפיתוח).
 * מומלץ להוסיף Resend (פשוט ביותר): https://resend.com
 */

export type OrderEmailPayload = {
  orderId: string;
  fullName: string;
  email: string;
  phone: string;
  delivery: "pickup" | "shipping";
  address?: string;
  city?: string;
  zip?: string;
  notes?: string;
  total: number;
  status: "pending" | "paid";
};

function formatOrderSummary(p: OrderEmailPayload): string {
  const lines = [
    `מספר הזמנה: ${p.orderId}`,
    `סטטוס: ${p.status === "paid" ? "שולם" : "ממתין לתשלום"}`,
    ``,
    `שם: ${p.fullName}`,
    `אימייל: ${p.email}`,
    `טלפון: ${p.phone}`,
    ``,
    `אופן מסירה: ${p.delivery === "shipping" ? "משלוח עד הבית" : "איסוף עצמי בפתח תקווה"}`,
  ];
  if (p.delivery === "shipping") {
    lines.push(`כתובת: ${p.address}, ${p.city}${p.zip ? `, ${p.zip}` : ""}`);
  }
  if (p.notes) lines.push(`הערות: ${p.notes}`);
  lines.push(``, `סה״כ: ${p.total} ₪`);
  return lines.join("\n");
}

export async function sendOrderEmail(payload: OrderEmailPayload): Promise<void> {
  const notifyTo = process.env.ORDER_NOTIFY_EMAIL || "barakuty@gmail.com";
  const summary = formatOrderSummary(payload);

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "שלם מלב שבור <noreply@levshalem.net>",
        to: [notifyTo],
        subject: `הזמנה חדשה ${payload.orderId} - ${payload.fullName}`,
        text: summary,
      }),
    });
    if (!res.ok) throw new Error(`Resend error: ${res.status}`);
    return;
  }

  console.log("\n=== ORDER NOTIFICATION ===\n" + summary + "\n==========================\n");
}
