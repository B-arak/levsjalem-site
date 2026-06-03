import { NextResponse } from "next/server";
import { verifyGrowWebhook, type GrowWebhookPayload } from "@/lib/grow";
import { sendOrderEmail } from "@/lib/email";

export async function POST(req: Request) {
  let payload: GrowWebhookPayload;

  const contentType = req.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      payload = (await req.json()) as GrowWebhookPayload;
    } else {
      const form = await req.formData();
      const obj: Record<string, string> = {};
      form.forEach((v, k) => { obj[k] = String(v); });
      payload = obj as unknown as GrowWebhookPayload;
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  if (!verifyGrowWebhook(payload)) {
    return NextResponse.json({ ok: false, error: "Invalid signature" }, { status: 401 });
  }

  const isPaid =
    payload.status === "1" ||
    payload.status === "success" ||
    payload.status?.toLowerCase() === "approved";

  if (isPaid) {
    await sendOrderEmail({
      orderId: payload.cField1 || "UNKNOWN",
      fullName: payload.fullName || "—",
      email: payload.email || "—",
      phone: payload.phone || "—",
      delivery: "shipping",
      total: Number(payload.amount) || 0,
      status: "paid",
    }).catch((e) => console.error("Failed to send paid email:", e));
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ status: "Grow webhook endpoint active" });
}
