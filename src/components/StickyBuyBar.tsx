import Link from "next/link";

/**
 * סרגל קנייה צף לנייד בלבד — תמיד נגיש בזמן גלילה.
 * מוצג רק מתחת ל-md (md:hidden). מקבל יעד (href) ותווית.
 */
export default function StickyBuyBar({
  href = "/checkout",
  label = "לרכישת הספר",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md shadow-[0_-2px_12px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="leading-tight">
          <div className="text-xs text-[var(--color-text-soft)]">המדריך שלם מלב שבור</div>
          <div className="font-bold text-[var(--color-primary-dark)]">מ-65 ₪</div>
        </div>
        <Link href={href} className="btn-primary px-6 py-3 text-base whitespace-nowrap">
          {label} ←
        </Link>
      </div>
    </div>
  );
}
