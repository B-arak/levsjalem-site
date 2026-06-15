import { NextResponse } from "next/server";
import { sendOrderEmail } from "@/lib/email";

const GROW_PAYMENT_URL =
  "https://pay.grow.link/NzY5MTU~c4c16917932f950f198686ccbf9c324b-MzU1Njk1OA";

type CheckoutPayload = {
  fullName: string;
  email: string;
  phone: string;
  delivery: "pickup" | "shipping";
  address?: string;
  city?: string;
  zip?: string;
  notes?: string;
  total: number;
};

const BOOK_PRICE = 65;
const SHIPPING_COST = 30;

function validate(payload: CheckoutPayload): string | null {
  if (!payload.fullName || payload.fullName.length < 2) return "יש להזין שם מלא";
  if (!payload.email || !payload.email.includes("@")) return "כתובת אימייל לא תקינה";
  if (!payload.phone || payload.phone.replace(/\D/g, "").length < 9) return "מספר טלפון לא תקין";
  if (payload.delivery !== "pickup" && payload.delivery !== "shipping") return "אופן מסירה לא תקין";
  if (payload.delivery === "shipping") {
    if (!payload.address) return "יש להזין כתובת למשלוח";
    if (!payload.city) return "יש להזין עיר";
  }
  const expectedTotal = payload.delivery === "shipping" ? BOOK_PRICE + SHIPPING_COST : BOOK_PRICE;
  if (payload.total !== expectedTotal) return "סכום לא תקין";
  return null;
}

function generateOrderId(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `LS-${ts}-${rand}`;
}

export async function POST(req: Request) {
  let payload: CheckoutPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  const validationError = validate(payload);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const orderId = generateOrderId();

  await sendOrderEmail({ ...payload, orderId, status: "pending" }).catch((e) => {
    console.error("Failed to send order email:", e);
  });

  return NextResponse.json({ orderId, paymentUrl: GROW_PAYMENT_URL });
}
