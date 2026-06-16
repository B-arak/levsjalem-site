import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "על הספר והסופר — ברק יקותיאל",
  description:
    "ברק יקותיאל, מאמן אישי ומחבר הספר 'שלם מלב שבור'. הסיפור האישי שמאחורי המדריך הרגשי הראשון בעברית לגרושים ופרודים טריים — והדרך שעברתי מהשבר לחיים חדשים.",
  alternates: { canonical: "https://www.levshalem.net/about" },
  openGraph: {
    title: "על הספר והסופר — ברק יקותיאל",
    description:
      "הסיפור האישי שמאחורי הספר 'שלם מלב שבור' — מאת ברק יקותיאל, מאמן אישי שעבר בעצמו את התהליך.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <article className="py-12 md:py-16">
      <div className="container-narrow">
        <nav aria-label="פירורי לחם" className="text-sm text-[var(--color-text-soft)] mb-8">
          <Link href="/" className="hover:text-[var(--color-primary)]">דף הבית</Link>
          <span className="mx-2">/</span>
          <span>על הספר והסופר</span>
        </nav>

        <header className="mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden shrink-0 mx-auto md:mx-0 shadow-md">
              <Image
                src="/barak.png"
                alt="ברק יקותיאל - מחבר הספר שלם מלב שבור"
                fill
                sizes="208px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-2">
                על הסופר
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-4">
                על המסע שלי — ולמה בעצם כתבתי את הספר
              </h1>
              <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
                ברק יקותיאל, בן 44, אבא לשלושה, נשוי בפעם השנייה באושר. משתדל לראות טוב בחיים, לבחור להתקדם בכל יום קצת — ובעיקר לא לתת לאחרים לנהל לי את הרגשות ואת החיים.
              </p>
            </div>
          </div>
        </header>

        <div className="prose-he">
          <h2>מי כותב ספר לגרושים — ולמה?</h2>
          <p>
            <strong>״שלם מלב שבור״ לא נולד מתוך רעיון — הוא נולד מתוך כאב.</strong>
            <br />
            אבל עוד יותר מזה — הוא נולד מתוך בחירה עמוקה לא להישאר שם, עם כל סערת הרגשות והכאב.
          </p>
          <p>
            היום אני מאמן אישי ומלווה תהליכים רגשיים. אבל הרבה לפני שהפכתי למי שמלווה אחרים — הייתי אני עם הסיפור האישי שלי.
          </p>
          <p>
            גבר שאיבד כל אמונה בעצמו ובכוחותיו. גבר שריצה וריצה וניסה להחזיק קשר זוגי ומשפחתי בכל מחיר. ונפרד. והתגרש — עם כל מה שכלול בחורבן הבית הפרטי.
          </p>
          <p>
            ההלם, הבלבול, הכעס, הקנאה, הפחד, תחושת הכישלון — ובדידות שקטה שאף אחד לא מכין אותך אליה.
          </p>

          <h2>הבחירה</h2>
          <p>
            אבל במקום להישאב אל תוך השבר — בחרתי להיכנס לתוכו ולצאת עם כוח להמשיך הלאה.
          </p>
          <p>
            לא היה שם אף אחד שיעזור לי להתמודד. אז שמעתי מאות הרצאות, קראתי המון ספרים, בכיתי לשמיים. ושלב אחרי שלב — קמתי ויצאתי לחיים חדשים. צמח בי משהו שלם יותר ממה שהיה קודם.
          </p>

          <h2>למה דווקא הספר הזה</h2>
          <p>
            המדריך הזה, ״שלם מלב שבור״, הוא תמצית הדרך הזו.
          </p>
          <p>
            הוא לא רק ספר — הוא יד מושטת. הוא קרקע. הוא אוויר לנשימה. הוא כל מה שאני עצמי חיפשתי בזמנו — ולא מצאתי.
          </p>
          <p>שילבתי בו את כל מה שלמדתי לאורך השנים:</p>
          <ul>
            <li>כלים מהאימון האישי</li>
            <li>שיטות מהפסיכולוגיה החיובית</li>
            <li>תובנות מ-NLP</li>
            <li>חכמה ממקורות היהדות ופנימיות התורה</li>
          </ul>
          <p>
            אבל מעל הכול — את האמת הפשוטה של הלב. את הניסיון האישי שלי, כמו שהוא.
          </p>

          <blockquote>
            שיהיה לך, על יד המיטה, מישהו שמבין בדיוק מה עובר עליך — ושייתן לך לא רק תקווה, אלא גם דרך ברורה קדימה.
          </blockquote>

          <p>
            <strong>כי בתוך משבר טמונים זרעים של ריפוי. ובתוך הלב שלך — יש חיים חדשים, שלמים יותר, שמחכים לצמוח מחדש.</strong>
          </p>
        </div>

        <div className="mt-12 p-8 bg-[var(--color-primary-soft)] rounded-xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl mb-3 text-[var(--color-primary-dark)]">
            מוכן להתחיל את המסע?
          </h2>
          <p className="text-[var(--color-text-muted)] mb-6">
            הספר מחכה לך — בגרסה פיזית, במשלוח עד הבית או באיסוף עצמי.
          </p>
          <Link href="/checkout" className="btn-primary">
            לרכישת הספר ←
          </Link>
        </div>
      </div>
    </article>
  );
}
