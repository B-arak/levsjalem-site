import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "תודה על הרכישה",
  description: "תודה על הרכישה של ‘שלם מלב שבור’. הזמנתך התקבלה ואנחנו בדרך אליך.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="py-16 md:py-24 min-h-[60vh] flex items-center">
      <div className="container-narrow text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-primary-soft)] flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-4">
          תודה על הרכישה
        </h1>
        <p className="text-xl text-[var(--color-text-muted)] mb-8 leading-relaxed">
          קיבלנו את ההזמנה שלך — ואתה בדרך הנכונה לריפוי הלב.
        </p>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border-soft)] rounded-xl p-7 mb-8 text-right">
          <h2 className="font-bold text-lg mb-4">מה קורה עכשיו?</h2>
          <ul className="space-y-3 text-[var(--color-text-muted)]">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold mt-1">1.</span>
              <span>תקבל מייל אישור עם פרטי ההזמנה וחשבונית מס.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold mt-1">2.</span>
              <span>אצור איתך קשר תוך 24 שעות לתיאום משלוח או איסוף.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold mt-1">3.</span>
              <span>הספר יגיע אליך תוך 3–5 ימי עסקים.</span>
            </li>
          </ul>
        </div>

        <p className="text-[var(--color-text-muted)] mb-6">
          לכל שאלה ניתן ליצור איתי קשר:{" "}
          <a href="tel:+972528717980" className="text-[var(--color-primary)] font-semibold">
            052-8717980
          </a>{" "}
          ·{" "}
          <a href="mailto:barakuty@gmail.com" className="text-[var(--color-primary)] font-semibold">
            barakuty@gmail.com
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/blog" className="btn-outline">
            לקריאה במאמרים שלי
          </Link>
          <Link href="/" className="btn-secondary">
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}
