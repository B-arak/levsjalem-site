import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "צור קשר",
  description:
    "יצירת קשר עם ברק יקותיאל — שאלות על הספר ‘שלם מלב שבור’, רכישה, אימון אישי או פגישה. טלפון 052-8717980 או במייל.",
  alternates: { canonical: "https://www.levshalem.net/contact" },
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <nav aria-label="פירורי לחם" className="text-sm text-[var(--color-text-soft)] mb-6">
          <Link href="/" className="hover:text-[var(--color-primary)]">דף הבית</Link>
          <span className="mx-2">/</span>
          <span>צור קשר</span>
        </nav>

        <header className="mb-10">
          <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-2">
            יצירת קשר
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-4">
            יש שאלה? אני כאן.
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
            לכל שאלה על הספר, רכישה, או על תהליכי ליווי אישי — אפשר ליצור איתי קשר בכל אחת מהדרכים הבאות.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <a
            href="tel:+972528717980"
            className="block bg-[var(--color-surface)] border border-[var(--color-border-soft)] rounded-xl p-7 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-primary-soft)] flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="text-sm text-[var(--color-text-soft)] mb-1">טלפון</div>
            <div className="font-bold text-xl text-[var(--color-text)]">052-8717980</div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">זמין בימים א׳-ה׳, 9:00-19:00</div>
          </a>

          <a
            href="mailto:barakuty@gmail.com"
            className="block bg-[var(--color-surface)] border border-[var(--color-border-soft)] rounded-xl p-7 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-primary-soft)] flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="text-sm text-[var(--color-text-soft)] mb-1">אימייל</div>
            <div className="font-bold text-xl text-[var(--color-text)] break-all">barakuty@gmail.com</div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">בדרך כלל מענה תוך 24 שעות</div>
          </a>
        </div>

        <div className="bg-[var(--color-surface-warm)] rounded-xl p-7">
          <h2 className="font-[family-name:var(--font-display)] text-2xl mb-3">
            איסוף עצמי של הספר
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-2">
            הענבל 16/3, פתח תקווה — האיסוף הוא בתיאום מראש בטלפון בלבד. אם בחרת איסוף עצמי בתהליך הרכישה, אצור איתך קשר תוך 24 שעות לתיאום שעה.
          </p>
        </div>
      </div>
    </div>
  );
}
