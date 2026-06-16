import type { Metadata } from "next";
import Link from "next/link";
import CheckoutForm from "./CheckoutForm";

export const metadata: Metadata = {
  title: "רכישת הספר",
  description:
    "רכישת הספר ‘שלם מלב שבור’ — 65 ש\"ח באיסוף עצמי מפתח תקווה, או 90 ש\"ח עם משלוח עד הבית. תשלום מאובטח, חשבונית מס אוטומטית.",
  alternates: { canonical: "https://www.levshalem.net/checkout" },
  robots: { index: false, follow: true },
};

export default function CheckoutPage() {
  return (
    <div className="py-12 md:py-16 bg-[var(--color-surface-warm)] min-h-screen">
      <div className="container-narrow">
        <nav aria-label="פירורי לחם" className="text-sm text-[var(--color-text-soft)] mb-6">
          <Link href="/" className="hover:text-[var(--color-primary)]">דף הבית</Link>
          <span className="mx-2">/</span>
          <span>רכישת הספר</span>
        </nav>

        <header className="mb-8 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-2">
            רכישת הספר
          </h1>
          <p className="text-[var(--color-text-muted)] text-lg">
            כמה פרטים, וזהו. הספר בדרך אליך.
          </p>
        </header>

        <CheckoutForm />

        <div className="mt-8 text-center text-sm text-[var(--color-text-soft)]">
          <p>
            יש בעיה עם הטופס? אפשר גם להתקשר:{" "}
            <a href="tel:+972528717980" className="text-[var(--color-primary)] font-semibold">
              052-8717980
            </a>
          </p>
          <p className="mt-2">
            רוכשים מסכימים <Link href="/terms" className="underline">לתקנון האתר</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
