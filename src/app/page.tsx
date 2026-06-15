import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StickyBuyBar from "@/components/StickyBuyBar";

export const metadata: Metadata = {
  title: "שלם מלב שבור — מדריך רגשי לגרושים ופרודים טריים",
  description:
    "המדריך הרגשי הראשון בעברית לגרושים ופרודים טריים. כלים מעשיים מאימון אישי, פסיכולוגיה חיובית, NLP ומקורות היהדות — להתמודדות עם הכאב, ריפוי הלב ובניית חיים חדשים.",
  alternates: { canonical: "https://www.levshalem.net" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "מה זה ‘שלם מלב שבור’?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "מדריך רגשי כתוב בעברית עבור גרושים ופרודים טריים, המציע כלים מעשיים מעולמות האימון האישי, הפסיכולוגיה החיובית, NLP ומקורות היהדות להתמודדות עם הכאב, ריפוי הלב ובניית חיים חדשים אחרי גירושין.",
      },
    },
    {
      "@type": "Question",
      name: "למי המדריך מתאים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "לכל מי שעבר או עובר תהליך פרידה או גירושין ומתמודד עם רגשות של כעס, עצבות, בדידות, חרדה, ירידה בביטחון העצמי, או קושי להמשיך הלאה. מתאים לגברים ולנשים כאחד.",
      },
    },
    {
      "@type": "Question",
      name: "כמה עולה הספר?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "מחיר הספר הוא 65 ש\"ח באיסוף עצמי מהענבל 16/3 בפתח תקווה (בתיאום), או 90 ש\"ח עם משלוח עד הבית בכל הארץ.",
      },
    },
    {
      "@type": "Question",
      name: "מי כתב את הספר?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ברק יקותיאל, מאמן אישי ומחבר. כתב את הספר מתוך החוויה האישית שלו לאחר גירושין, ושילב בו את כל הכלים שעזרו לו לרפא את הלב ולצאת לחיים חדשים — כלים מאימון אישי, פסיכולוגיה חיובית, NLP ומקורות היהדות.",
      },
    },
    {
      "@type": "Question",
      name: "האם המדריך מתאים גם לנשים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן. המדריך נכתב לשני המינים. השימוש בלשון זכר הוא לצרכי נוחות בלבד, והכלים שבו רלוונטיים לכל אדם שעובר תהליך פרידה — גרושים וגרושות, פרודים ופרודות.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-surface-warm)] to-[var(--color-bg)] py-16 md:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="inline-block px-4 py-1.5 mb-6 bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)] rounded-full text-sm font-semibold">
                המדריך הראשון בעברית לגרושים ופרודים טריים
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-[var(--color-text)]">
                לרפא את הלב.<br />
                לבנות חיים חדשים.
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-xl">
                גירושין הם אחד מהרגעים הקשים בחיים. סערת רגשות, בדידות, פחד מהעתיד.
                <strong className="text-[var(--color-text)]"> המדריך הזה נכתב כדי ללוות אותך מהשבר חזרה לעצמך</strong> — עם כלים מעשיים, אמיתיים, ומתוך ניסיון אישי.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/checkout" className="btn-primary">
                  לרכישת הספר — מ-65 ₪
                </Link>
                <a
                  href="/first-chapter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  קראו את הפרק הראשון חינם
                </a>
              </div>
              <p className="mt-6 text-sm text-[var(--color-text-soft)]">
                ✓ משלוח עד הבית או איסוף עצמי בפתח תקווה &nbsp;·&nbsp; ✓ תשלום מאובטח &nbsp;·&nbsp;{" "}
                <Link href="/about" className="underline hover:text-[var(--color-primary)]">
                  הסיפור שמאחורי הספר
                </Link>
              </p>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-[280px] md:w-[340px] aspect-[3/4]">
                <Image
                  src="/cover.png"
                  alt="שלם מלב שבור — מדריך רגשי לגרושים ופרודים טריים, מאת ברק יקותיאל"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 340px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--color-surface)]">
        <div className="container-narrow text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-6">
            אם משהו מהדברים האלה מוכר לך — המדריך הזה כתוב בשבילך
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg mb-10">
            סימן מובהק שאת/ה לא לבד בתחושות האלה. אלה הרגשות שאלפי גרושים וגרושות חווים — וניתן לעבוד איתם.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-right text-[var(--color-text)]">
            {[
              "כעס שלא נותן מנוחה",
              "בדידות שמרגישה בלתי נסבלת",
              "חרדה מהעתיד הכלכלי או המשפחתי",
              "ירידה חדה בביטחון העצמי",
              "תחושת אשמה וכישלון",
              "מחשבות חוזרות על העבר",
              "קושי לישון או להתרכז",
              "פחד שלעולם לא תאהב/י שוב",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-[var(--color-surface-warm)] p-4 rounded-lg"
              >
                <span className="text-[var(--color-accent)] font-bold mt-0.5">•</span>
                <span className="text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-4">
              מה תקבלו במדריך
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg">
              המדריך הוא תמצית של שנים של למידה, תרגול וניסיון אישי — מאורגן בצורה פרקטית שתוכלו ליישם מהיום הראשון.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-[var(--color-surface)] p-7 rounded-xl border border-[var(--color-border-soft)] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-primary-soft)] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-2">
                להבין את הרגשות
              </h3>
              <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                מה קורה במוח שלכם אחרי גירושין, למה זה כל כך כואב, ולמה חשוב לא להדחיק אלא לעבוד עם זה.
              </p>
            </article>

            <article className="bg-[var(--color-surface)] p-7 rounded-xl border border-[var(--color-border-soft)] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-primary-soft)] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-2">
                כלים מעשיים ליישום מיידי
              </h3>
              <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                תרגילים, שיטות חשיבה, ופעולות קטנות מהיומיום שעוזרים לייצב את הרגש ולחזק את הביטחון העצמי.
              </p>
            </article>

            <article className="bg-[var(--color-surface)] p-7 rounded-xl border border-[var(--color-border-soft)] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-primary-soft)] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-2">
                דרך לחיים חדשים
              </h3>
              <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                איך לתכנן את הפרק הבא, איך לסלוח (גם לעצמכם), ואיך לבנות יחסים בריאים יותר — עם עצמכם ועם הסביבה.
              </p>
            </article>
          </div>

          <div className="mt-10 bg-[var(--color-primary-soft)] rounded-xl p-7 text-center">
            <p className="text-[var(--color-primary-dark)] font-semibold text-lg mb-1">
              המקורות שלו: אימון אישי · פסיכולוגיה חיובית · NLP · מקורות היהדות
            </p>
            <p className="text-[var(--color-text-muted)]">
              שילוב נדיר של ידע מערבי מודרני עם חכמה יהודית עתיקה, מותאם לקורא הישראלי.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--color-surface-warm)]">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="relative max-w-xs mx-auto md:mx-0 aspect-[3/4]">
                <Image
                  src="/cover.png"
                  alt="שלם מלב שבור"
                  fill
                  sizes="(max-width: 768px) 280px, 340px"
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-5">
                המדריך הזה לא נולד מתוך רעיון.<br />הוא נולד מתוך כאב.
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-4">
                לפני שהפכתי למאמן אישי שמלווה תהליכי ריפוי, הייתי אני — גבר שאיבד אמונה בעצמו, התגרש, ועמד מול הריק. ההלם, הבלבול, הכעס, הבדידות — אף אחד לא הכין אותי לזה.
              </p>
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-6">
                במקום להישאב פנימה, בחרתי להיכנס לתוך זה — ולצאת חזק יותר. שמעתי הרצאות, קראתי, התאמנתי, התפללתי. ושלב אחרי שלב — קמתי לחיים חדשים, שלמים יותר ממה שהיו לפני.
              </p>
              <p className="text-[var(--color-text)] font-semibold mb-6">
                המדריך הזה הוא יד מושטת. הוא כל מה שאני בעצמי חיפשתי בזמנו ולא מצאתי.
              </p>
              <Link href="/about" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] inline-flex items-center gap-2">
                להמשך הסיפור של ברק ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--color-primary-dark)] text-white">
        <div className="container-wide text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-4 text-white">
            לרכישת הספר
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
            ספר פיזי איכותי, מודפס במלואו. בחרו את אופן המסירה שמתאים לכם.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-8">
            <div className="bg-white text-[var(--color-text)] p-7 rounded-xl text-right">
              <div className="flex items-center gap-2 mb-1 text-[var(--color-primary)] font-semibold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                איסוף עצמי
              </div>
              <div className="text-3xl font-bold mb-1">65 ₪</div>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                מהענבל 16/3, פתח תקווה — בתיאום מראש בטלפון
              </p>
            </div>
            <div className="bg-white text-[var(--color-text)] p-7 rounded-xl text-right border-2 border-[var(--color-accent)] relative">
              <span className="absolute -top-3 right-4 bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-full">פופולרי</span>
              <div className="flex items-center gap-2 mb-1 text-[var(--color-accent)] font-semibold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                משלוח עד הבית
              </div>
              <div className="text-3xl font-bold mb-1">90 ₪</div>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                כולל משלוח לכל הארץ (65 ₪ ספר + 25 ₪ משלוח)
              </p>
            </div>
          </div>

          <Link href="/checkout" className="btn-primary text-lg px-10 py-4">
            המשך לרכישה ←
          </Link>
          <p className="mt-5 text-sm text-white/70">
            תשלום מאובטח · חשבונית מס · אפשר גם להזמין דרך הטלפון:{" "}
            <a href="tel:+972528717980" className="text-white underline hover:no-underline">052-8717980</a>
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-10 text-center">
            שאלות נפוצות
          </h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((item) => (
              <details
                key={item.name}
                className="group bg-[var(--color-surface)] border border-[var(--color-border-soft)] rounded-xl p-6 cursor-pointer"
              >
                <summary className="font-semibold text-lg text-[var(--color-text)] flex items-start justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                  <span>{item.name}</span>
                  <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180 shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20 md:hidden" aria-hidden />
      <StickyBuyBar href="/checkout" />
    </>
  );
}
