"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type DeliveryMethod = "pickup" | "shipping";

const BOOK_PRICE = 65;
const SHIPPING_COST = 30;

export default function CheckoutForm() {
  const router = useRouter();
  const [delivery, setDelivery] = useState<DeliveryMethod>("shipping");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = delivery === "shipping" ? BOOK_PRICE + SHIPPING_COST : BOOK_PRICE;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: String(data.get("fullName") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      delivery,
      address: delivery === "shipping" ? String(data.get("address") || "").trim() : "",
      city: delivery === "shipping" ? String(data.get("city") || "").trim() : "",
      zip: delivery === "shipping" ? String(data.get("zip") || "").trim() : "",
      notes: String(data.get("notes") || "").trim(),
      total,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "אירעה שגיאה בעת יצירת ההזמנה");
      }

      const body = await res.json();
      if (body.paymentUrl) {
        window.location.href = body.paymentUrl;
      } else {
        router.push("/thank-you");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "שגיאה לא ידועה");
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--color-surface)] rounded-2xl shadow-sm border border-[var(--color-border-soft)] p-6 md:p-8"
      noValidate
    >
      <fieldset className="mb-7">
        <legend className="font-bold text-lg mb-3 text-[var(--color-text)]">
          איך תרצו לקבל את הספר?
        </legend>

        <div className="grid sm:grid-cols-2 gap-3">
          <label
            className={`block p-5 rounded-xl border-2 cursor-pointer transition-colors ${
              delivery === "shipping"
                ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)]"
                : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary-light)]"
            }`}
          >
            <input
              type="radio"
              name="delivery"
              value="shipping"
              checked={delivery === "shipping"}
              onChange={() => setDelivery("shipping")}
              className="sr-only"
            />
            <div className="flex items-start gap-3">
              <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                delivery === "shipping" ? "border-[var(--color-primary)]" : "border-[var(--color-border)]"
              }`}>
                {delivery === "shipping" && <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]" />}
              </div>
              <div className="flex-1">
                <div className="font-bold mb-1">משלוח עד הבית</div>
                <div className="text-sm text-[var(--color-text-muted)]">לכל הארץ</div>
                <div className="mt-2 font-bold text-[var(--color-primary-dark)]">95 ₪</div>
              </div>
            </div>
          </label>

          <label
            className={`block p-5 rounded-xl border-2 cursor-pointer transition-colors ${
              delivery === "pickup"
                ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)]"
                : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary-light)]"
            }`}
          >
            <input
              type="radio"
              name="delivery"
              value="pickup"
              checked={delivery === "pickup"}
              onChange={() => setDelivery("pickup")}
              className="sr-only"
            />
            <div className="flex items-start gap-3">
              <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                delivery === "pickup" ? "border-[var(--color-primary)]" : "border-[var(--color-border)]"
              }`}>
                {delivery === "pickup" && <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]" />}
              </div>
              <div className="flex-1">
                <div className="font-bold mb-1">איסוף עצמי</div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  הענבל 16/3, פתח תקווה <br />(בתיאום טלפוני)
                </div>
                <div className="mt-2 font-bold text-[var(--color-primary-dark)]">65 ₪</div>
              </div>
            </div>
          </label>
        </div>
      </fieldset>

      <fieldset className="mb-7">
        <legend className="font-bold text-lg mb-3 text-[var(--color-text)]">פרטים אישיים</legend>

        <div className="field">
          <label htmlFor="fullName">שם מלא</label>
          <input id="fullName" name="fullName" type="text" required autoComplete="name" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="field">
            <label htmlFor="phone">טלפון</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              pattern="[0-9\-+\s]{9,}"
              placeholder="050-0000000"
            />
          </div>
          <div className="field">
            <label htmlFor="email">אימייל</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="your@email.com"
            />
          </div>
        </div>
      </fieldset>

      {delivery === "shipping" && (
        <fieldset className="mb-7">
          <legend className="font-bold text-lg mb-3 text-[var(--color-text)]">כתובת למשלוח</legend>

          <div className="field">
            <label htmlFor="address">רחוב ומספר בית</label>
            <input
              id="address"
              name="address"
              type="text"
              required
              autoComplete="street-address"
              placeholder="לדוגמה: הרצל 22, דירה 5"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="field">
              <label htmlFor="city">עיר</label>
              <input id="city" name="city" type="text" required autoComplete="address-level2" />
            </div>
            <div className="field">
              <label htmlFor="zip">מיקוד (לא חובה)</label>
              <input id="zip" name="zip" type="text" autoComplete="postal-code" inputMode="numeric" />
            </div>
          </div>
        </fieldset>
      )}

      <div className="field">
        <label htmlFor="notes">הערות (לא חובה)</label>
        <textarea id="notes" name="notes" rows={3} placeholder="הוראות משלוח מיוחדות, הקדשה, וכו'" />
      </div>

      <div className="mt-6 mb-6 p-5 bg-[var(--color-surface-warm)] rounded-xl flex items-center justify-between">
        <div>
          <div className="text-sm text-[var(--color-text-muted)]">סה״כ לתשלום</div>
          <div className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-primary-dark)] font-bold">
            {total} ₪
          </div>
        </div>
        <div className="text-right text-sm text-[var(--color-text-muted)] leading-relaxed">
          <div>ספר: 65 ₪</div>
          {delivery === "shipping" && <div>משלוח: 30 ₪</div>}
        </div>
      </div>

      {error && (
        <div role="alert" className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
          {error}
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn-primary w-full text-lg py-4">
        {submitting ? "מעביר לתשלום…" : `המשך לתשלום מאובטח · ${total} ₪`}
      </button>

      <p className="mt-4 text-center text-xs text-[var(--color-text-soft)]">
        תשלום מאובטח באמצעות משולם · אנחנו לא שומרים את פרטי האשראי
      </p>
    </form>
  );
}
