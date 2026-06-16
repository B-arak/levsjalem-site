import type { Metadata } from "next";
import Image from "next/image";
import CheckoutForm from "@/app/checkout/CheckoutForm";
import StickyBuyBar from "@/components/StickyBuyBar";

export const metadata: Metadata = {
  title: "שלם מלב שבור — רכישת הספר | ברק יקותיאל",
  description:
    "המדריך הרגשי לגרושים ופרודים טריים. כלים מעשיים לריפוי הלב ובניית חיים חדשים. מאת ברק יקותיאל. 65 ₪ (איסוף) | 90 ₪ (משלוח עד הבית).",
  openGraph: {
    title: "שלם מלב שבור — מותר לך להמשיך",
    description:
      "ספר שנכתב מתוך ניסיון אישי. כלים מעשיים לריפוי הלב ובניית חיים חדשים אחרי גירושין.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "שלם מלב שבור — עטיפת הספר" }],
  },
};

const chapters = [
  {
    num: "01",
    title: "להבין את הרגשות שלך",
    desc: "למה אתה מרגיש מה שאתה מרגיש — ואיך לא להיות שבוי בתוכם. המפה הרגשית שתעזור לך לנווט בכאוס הפנימי.",
  },
  {
    num: "02",
    title: "כעס, נקמה — ולשחרר",
    desc: "הכעס הכי עמוק הוא לרוב על עצמך. כיצד לזהות אותו, להבין אותו, ולשחרר אותו — לא בשבילו/ה, בשבילך.",
  },
  {
    num: "03",
    title: "הבדידות שמגיעה בשקט",
    desc: "לא רק כשאתה לבד — גם בסביבת אנשים. איך מפסיקים להרגיש ריק, ואיך בונים חיים חברתיים מחדש.",
  },
  {
    num: "04",
    title: "ביטחון עצמי חדש",
    desc: "הגירושין מרסקים את הדימוי העצמי. כאן תמצא כלים מוכחים מ-NLP ופסיכולוגיה חיובית כדי לבנות אותו מחדש.",
  },
  {
    num: "05",
    title: "מותר לך להמשיך",
    desc: "הפרק שאנשים אומרים ששינה אותם. ללמוד לפתוח דף חדש — לא כי הכאב עבר, אלא כי אתה ראוי לחיים מלאים.",
  },
];

const faqs = [
  {
    q: "בשביל מה ספר? אני יכול לגשת לפסיכולוג",
    a: "ספר זה לא תחליף לטיפול — זה כלי שאתה יכול לפתוח בשעה 3 לפנות בוקר כשאין לך מי לדבר איתו. הרבה מהקוראים משתמשים בו בנוסף לטיפול, ומדווחים שזה עזר להם להגיע מוכנים יותר לשיחות. לא אחד או אחר.",
  },
  {
    q: "אני גרוש כבר שנה — האם הספר עדיין רלוונטי?",
    a: "בהחלט. הספר מתאים לכל מי שנמצא בין חודש לשנתיים מהפרידה. לפעמים הכי קשה זה לא מיד אחרי — אלא בדיוק כשהאדרנלין שוכך והכאב האמיתי צף ועולה.",
  },
  {
    q: "מה אם הספר לא יעזור לי?",
    a: "אם קראת את הספר ולא קיבלת ממנו שום ערך — כתוב לי ישירות ל-barakuty@gmail.com. אני אישית אדאג שתצא מרוצה. אני לא מוכר אוויר.",
  },
  {
    q: "כמה זמן לוקח המשלוח?",
    a: "משלוח בדואר ישראל לכל הארץ, זמן הגעה ממוצע 3–5 ימי עסקים. איסוף עצמי מהענבל 16/3 פתח תקווה — בתיאום טלפוני מראש בלבד.",
  },
];

export default function BuyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "שלם מלב שבור — מדריך רגשי לגרושים ופרודים טריים",
            description:
              "מדריך רגשי לגרושים ופרודים טריים. כלים מעשיים לריפוי הלב ובניית חיים חדשים אחרי גירושין.",
            image: "https://www.levshalem.net/cover.jpg",
            brand: { "@type": "Person", name: "ברק יקותיאל" },
            offers: [
              {
                "@type": "Offer",
                price: "65",
                priceCurrency: "ILS",
                availability: "https://schema.org/InStock",
                description: "איסוף עצמי — הענבל 16/3 פתח תקווה",
              },
              {
                "@type": "Offer",
                price: "90",
                priceCurrency: "ILS",
                availability: "https://schema.org/InStock",
                description: "משלוח עד הבית — כל הארץ",
              },
            ],
          }),
        }}
      />

      <div>

        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[92vh] flex items-center"
          style={{ background: "linear-gradient(135deg, #1a3028 0%, #2d5043 100%)" }}
        >
          {/* subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="container-narrow relative z-10 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

              {/* Text */}
              <div className="order-2 md:order-1">
                <p
                  className="text-sm font-semibold tracking-[0.2em] uppercase mb-6"
                  style={{ color: "#e8a878" }}
                >
                  מדריך רגשי לגרושים ופרודים טריים
                </p>

                <h1
                  className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
                  style={{ color: "white" }}
                >
                  הלילה לא ישנת.{" "}
                  <br />
                  <span style={{ color: "#e8a878" }}>שוב.</span>
                </h1>

                <p
                  className="text-lg md:text-xl leading-relaxed mb-10"
                  style={{ color: "#b8cbbe" }}
                >
                  כי כשפוקד השקט — כל מה שהיה עולה.
                  <br />
                  הכעס. הגעגוע. השאלות שאין להן תשובות.
                  <br />
                  התחושה שהחיים פשוט... עצרו.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#purchase"
                    className="btn-primary text-center text-lg px-8 py-4 rounded-xl"
                  >
                    לרכישת הספר ←
                  </a>
                  <a
                    href="#inside"
                    className="text-center text-lg px-8 py-4 rounded-xl border-2 transition-colors"
                    style={{ borderColor: "#6a9176", color: "#b8cbbe" }}
                  >
                    מה יש בספר?
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-6">
                  <div style={{ color: "#6a9176", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    כולל
                  </div>
                  {["כלים מ-NLP", "פסיכולוגיה חיובית", "מקורות יהדות"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.08)", color: "#b8cbbe" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book cover */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-3xl blur-3xl scale-110 opacity-30"
                    style={{ background: "#c4622d" }}
                  />
                  <Image
                    src="/cover.png"
                    alt="שלם מלב שבור — ספר מאת ברק יקותיאל"
                    width={300}
                    height={420}
                    className="relative rounded-2xl shadow-2xl"
                    priority
                  />
                  <div
                    className="absolute -bottom-3 right-4 text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg"
                    style={{ background: "#c4622d", color: "white" }}
                  >
                    ₪65 בלבד — איסוף
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── BIG PERMISSION ───────────────────────────────────────── */}
        <section
          className="py-28 md:py-40"
          style={{ background: "#2d5043" }}
        >
          <div className="container-narrow text-center">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-10"
              style={{ color: "#6a9176" }}
            >
              המסר המרכזי של הספר
            </p>

            <h2
              className="font-[family-name:var(--font-display)] text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-10"
              style={{ color: "white" }}
            >
              מותר לך
              <br />
              <span style={{ color: "#e8a878" }}>להמשיך.</span>
            </h2>

            <div
              className="max-w-lg mx-auto text-xl md:text-2xl leading-loose"
              style={{ color: "#b8cbbe" }}
            >
              <p>לא כי הכאב עבר.</p>
              <p>לא כי שכחת.</p>
              <p>
                אלא כי הכאב לא צריך{" "}
                <strong style={{ color: "white" }}>לנהל את חייך</strong> יותר.
              </p>
            </div>

            <div className="mt-14">
              <a
                href="#purchase"
                className="btn-primary inline-block text-lg px-10 py-4"
              >
                רוצה להמשיך ←
              </a>
            </div>
          </div>
        </section>

        {/* ─── AUTHOR STORY ─────────────────────────────────────────── */}
        <section className="py-24 md:py-32" style={{ background: "#fafaf8" }}>
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

              {/* Photo */}
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <Image
                    src="/barak.png"
                    alt="ברק יקותיאל — מחבר הספר שלם מלב שבור"
                    width={400}
                    height={460}
                    className="rounded-2xl shadow-xl"
                    style={{ objectFit: "cover", maxHeight: "460px" }}
                  />
                  <div
                    className="absolute -bottom-5 -left-4 rounded-xl px-5 py-3 shadow-xl"
                    style={{ background: "#1a3028", color: "white" }}
                  >
                    <div className="text-xs mb-0.5" style={{ color: "#6a9176" }}>מחבר הספר</div>
                    <div className="font-bold">ברק יקותיאל</div>
                    <div className="text-xs mt-0.5" style={{ color: "#8ab296" }}>מאמן אישי · אבא לשלושה</div>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div>
                <p
                  className="text-sm font-semibold tracking-[0.15em] uppercase mb-4"
                  style={{ color: "#c4622d" }}
                >
                  הסיפור שמאחורי הספר
                </p>

                <h2
                  className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-8"
                  style={{ color: "var(--color-text)" }}
                >
                  כתבתי את הספר
                  <br />
                  שרציתי למצוא.
                </h2>

                <div
                  className="space-y-5 text-base leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <p>
                    כשעברתי גירושין, חיפשתי ספר בעברית שידבר אליי. שיבין מה אני
                    עובר. שייתן לי כלים — לא רק עצות כלליות. לא מצאתי.
                  </p>
                  <p>
                    אז כתבתי אחד. מתוך ניסיון אישי, מתוך שנות עבודה כמאמן אישי,
                    ומתוך שילוב של כלים שעבדו עבורי: אימון אישי, פסיכולוגיה חיובית,
                    NLP ומקורות מעמיקים מהיהדות.
                  </p>
                  <p>
                    היום אני בן 44, אבא לשלושה, נשוי בשנית ובונה חיים שאני גאה
                    בהם. הדרך לא הייתה קלה. אבל היא אפשרית. ואני רוצה שגם
                    אתה תדע את זה.
                  </p>
                </div>

                <div
                  className="mt-8 p-5 rounded-xl border-r-4"
                  style={{
                    borderColor: "#c4622d",
                    background: "#f7f1eb",
                  }}
                >
                  <p
                    className="italic text-base leading-relaxed"
                    style={{ color: "var(--color-text)" }}
                  >
                    "אני לא פסיכולוג. אני מישהו שעבר את זה, ובנה חיים חדשים.
                    הספר הזה הוא מה שהייתי רוצה לקבל באותו הזמן."
                  </p>
                  <p
                    className="mt-3 text-sm font-semibold"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    — ברק יקותיאל
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── PERSONAL LETTER ──────────────────────────────────────── */}
        <section className="py-24 md:py-32" style={{ background: "#f7f1eb" }}>
          <div className="container-narrow">
            <div className="max-w-2xl mx-auto">
              <p
                className="text-sm font-semibold tracking-[0.15em] uppercase mb-8 text-center"
                style={{ color: "#c4622d" }}
              >
                מכתב אישי ממני אליך
              </p>

              <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--color-text)" }}>
                <p>
                  <strong>אם אתה גרוש טרי או פרוד — כנראה שגם אתה חווה בתקופה האחרונה רכבת הרים רגשית:</strong>{" "}
                  כעס, עצב, בדידות, חרדה, פחד מהעתיד, ביטחון עצמי נמוך, האשמה עצמית, ובמקרים הקשים אפילו מחשבות אובדניות.
                </p>

                <p className="font-[family-name:var(--font-display)] text-3xl" style={{ color: "#2d5043" }}>
                  נכון?
                </p>

                <p>
                  אם אתה מסכים, כנראה שבעומק ליבך היית רוצה להחזיר לעצמך את השליטה על החיים, להיות רגוע ושליו יותר, להפחית את הטלטלה הרגשית, להשאיר את העבר מאחוריך ולהתקדם הלאה — לחיים טובים ושלמים יותר, למענך ולמען הילדים שלך.
                </p>

                <p className="font-[family-name:var(--font-display)] text-3xl" style={{ color: "#c4622d" }}>
                  אבל...
                </p>

                <p>
                  הבעיה היא שאתה נמצא במתקפה רגשית שלא מסתיימת. שוב הגרושה מאיימת, שוב הגרוש מאשים או נעלם, שוב אתה נזכר בבגידה או בפגיעה — והרגשות מתעוררים מחדש, מנהלים לך את החיים ומקשים עליך לדאוג לעצמך.
                </p>

                <p
                  className="font-[family-name:var(--font-display)] text-2xl md:text-3xl leading-snug"
                  style={{ color: "var(--color-text)" }}
                >
                  מה היית נותן עבור פתרון שיעזור לך לנהל טוב יותר את הרגשות?
                </p>

                <p>
                  לנקות את משקעי העבר, לסלוח, לחזק את הביטחון והערך העצמי, להתכונן למערכות יחסים עתידיות — ובעיקר להשאיר את העבר בעבר ולהתחיל להסתכל קדימה באופטימיות.
                </p>

                <p>
                  אתה אולי לא מאמין שזה אפשרי. הכאב חזק מדי עכשיו. אבל{" "}
                  <strong>אני יודע שזה אפשרי</strong> — ואני רוצה לעזור גם לך להתחיל לחיות מחדש, לנהל את הרגשות שלך במקום שהם ינהלו אותך, ולרפא את הלב השבור.
                </p>

                <p>
                  במדריך תלמד איך הרגלים חדשים, פעולות קטנות ולקיחת אחריות על המחשבות, הדיבור והמעשים שלך יעזרו לך להתמודד עם הכעס, הקנאה, האשמה, הבדידות ואובדן הביטחון העצמי; איך לסליחה יש כוח ריפוי עצום; ומהי הדרך הטובה ביותר להתבונן ולתכנן את חייך מכאן והלאה.
                </p>

                <p style={{ color: "var(--color-text-muted)" }}>
                  הכלים שתמצא במדריך מגיעים מעולמות האימון האישי, הפסיכולוגיה החיובית, ה־NLP, מקורות היהדות ופנימיות התורה.
                </p>

                <p
                  className="font-[family-name:var(--font-display)] text-2xl md:text-3xl leading-snug"
                  style={{ color: "#2d5043" }}
                >
                  אני מזמין אותך להצטרף אליי למסע של ריפוי הלב והתחלה חדשה ושלמה יותר.
                </p>
              </div>

              <div className="mt-10 pt-8" style={{ borderTop: "1px solid #e2d9cf" }}>
                <p className="text-base" style={{ color: "var(--color-text-muted)" }}>
                  קריאה מהנה ומועילה,
                </p>
                <p
                  className="font-[family-name:var(--font-display)] text-2xl mt-1"
                  style={{ color: "var(--color-text)" }}
                >
                  ברק יקותיאל
                </p>
                <p className="text-sm mt-0.5" style={{ color: "#c4622d" }}>
                  מנטלמן להצלחה שלך
                </p>
              </div>

              <div className="mt-10 text-center">
                <a href="#purchase" className="btn-primary inline-block text-lg px-10 py-4">
                  אני רוצה להתחיל — לרכישת הספר ←
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INSIDE THE BOOK ──────────────────────────────────────── */}
        <section
          id="inside"
          className="py-24 md:py-32"
          style={{ background: "white" }}
        >
          <div className="container-narrow">
            <div className="text-center mb-16">
              <p
                className="text-sm font-semibold tracking-[0.15em] uppercase mb-3"
                style={{ color: "#c4622d" }}
              >
                מה יש בספר
              </p>
              <h2
                className="font-[family-name:var(--font-display)] text-3xl md:text-5xl"
                style={{ color: "var(--color-text)" }}
              >
                כלים שתוכל להשתמש בהם{" "}
                <span style={{ color: "#2d5043" }}>מחר בבוקר</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {chapters.map((ch) => (
                <div
                  key={ch.num}
                  className="group p-7 rounded-2xl border transition-shadow hover:shadow-md"
                  style={{
                    background: "#fafaf8",
                    borderColor: "#e2e8e4",
                  }}
                >
                  <div
                    className="text-xs font-bold tracking-widest mb-3"
                    style={{ color: "#2d5043" }}
                  >
                    פרק {ch.num}
                  </div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {ch.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {ch.desc}
                  </p>
                </div>
              ))}

              <div
                className="p-7 rounded-2xl"
                style={{ background: "#2d5043" }}
              >
                <div
                  className="text-xs font-bold tracking-widest mb-3"
                  style={{ color: "#6a9176" }}
                >
                  לאורך כל הספר
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "white" }}>
                  תרגילים מעשיים
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#b8cbbe" }}>
                  כל פרק מגיע עם תרגילים קצרים שאפשר לעשות מיד. לא עצות — כלים
                  שאתה יכול ליישם עוד הלילה.
                </p>
              </div>
            </div>

            {/* Book details strip */}
            <div
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: "שפה", val: "עברית" },
                { label: "פורמט", val: "ספר מודפס" },
                { label: "נושא", val: "גירושין ופרידה" },
                { label: "הוצאה", val: "ישראל 2021" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="text-center p-4 rounded-xl"
                  style={{ background: "#f0f4f1" }}
                >
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ color: "#6a9176" }}
                  >
                    {d.label}
                  </div>
                  <div className="font-semibold text-sm" style={{ color: "#1a3028" }}>
                    {d.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PURCHASE ─────────────────────────────────────────────── */}
        <section
          id="purchase"
          className="py-24 md:py-32"
          style={{ background: "#fafaf8" }}
        >
          <div className="container-narrow">
            <div className="text-center mb-14">
              <p
                className="text-sm font-semibold tracking-[0.15em] uppercase mb-3"
                style={{ color: "#c4622d" }}
              >
                מוכן להתחיל?
              </p>
              <h2
                className="font-[family-name:var(--font-display)] text-3xl md:text-5xl mb-4"
                style={{ color: "var(--color-text)" }}
              >
                רכישת הספר
              </h2>
              <p
                className="max-w-md mx-auto text-base"
                style={{ color: "var(--color-text-muted)" }}
              >
                ספר פיזי מודפס. נשלח ישירות אליך בדואר או ניתן לאיסוף מפתח תקווה.
                מחיר כולל הכל — אין הפתעות.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <CheckoutForm />
            </div>

            {/* Trust signals */}
            <div className="max-w-lg mx-auto mt-10">
              <div
                className="grid grid-cols-3 gap-4 p-5 rounded-2xl text-center"
                style={{ background: "#f0f4f1" }}
              >
                {[
                  { icon: "🔒", label: "תשלום מאובטח", sub: "דרך משולם" },
                  { icon: "📦", label: "משלוח לכל הארץ", sub: "3–5 ימי עסקים" },
                  { icon: "📞", label: "שירות אישי", sub: "052-8717980" },
                ].map((t) => (
                  <div key={t.label} className="flex flex-col items-center gap-1">
                    <span className="text-2xl">{t.icon}</span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "#2d5043" }}
                    >
                      {t.label}
                    </span>
                    <span className="text-xs" style={{ color: "#6a9176" }}>
                      {t.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────────── */}
        <section
          className="py-20 md:py-28"
          style={{ background: "white" }}
        >
          <div className="container-narrow max-w-2xl mx-auto">
            <h2
              className="font-[family-name:var(--font-display)] text-2xl md:text-3xl mb-10 text-center"
              style={{ color: "var(--color-text)" }}
            >
              שאלות שאני שומע הרבה
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#e2e8e4" }}
                >
                  <summary
                    className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none font-semibold text-base select-none"
                    style={{ color: "var(--color-text)", background: "#fafaf8" }}
                  >
                    <span>{faq.q}</span>
                    <span
                      className="shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-transform group-open:rotate-45"
                      style={{ borderColor: "#2d5043", color: "#2d5043" }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="px-5 pb-5 pt-2 text-sm leading-relaxed"
                    style={{
                      color: "var(--color-text-muted)",
                      background: "white",
                      borderTop: "1px solid #e2e8e4",
                    }}
                  >
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            {/* Final CTA */}
            <div
              className="mt-14 p-8 rounded-2xl text-center"
              style={{ background: "#1a3028" }}
            >
              <h3
                className="font-[family-name:var(--font-display)] text-2xl mb-2"
                style={{ color: "white" }}
              >
                יש שאלה? אני זמין.
              </h3>
              <p className="text-sm mb-6" style={{ color: "#8ab296" }}>
                מענה אישי — לא בוט, לא נציג. ברק עצמו.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <a
                  href="tel:0528717980"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors"
                  style={{ background: "#2d5043", color: "white" }}
                >
                  📞 052-8717980
                </a>
                <a
                  href="mailto:barakuty@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors"
                  style={{ background: "#2d5043", color: "white" }}
                >
                  ✉️ barakuty@gmail.com
                </a>
              </div>
              <a href="#purchase" className="btn-primary inline-block">
                לרכישת הספר ←
              </a>
            </div>
          </div>
        </section>

        <div className="h-20 md:hidden" aria-hidden />
        <StickyBuyBar href="#purchase" label="להזמנת הספר" />
      </div>
    </>
  );
}
