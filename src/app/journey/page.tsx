import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StickyBuyBar from "@/components/StickyBuyBar";

export const metadata: Metadata = {
  title: "מותר לך להתחיל מחדש — שלם מלב שבור",
  description:
    "אם אתה גרוש טרי או פרוד וסוער בפנים — יש דרך חזרה אל עצמך. המדריך הרגשי שילווה אותך צעד־צעד מהשבר לחיים חדשים ושלמים יותר.",
  alternates: { canonical: "https://www.levshalem.net/journey" },
  robots: { index: false, follow: true },
};

export default function JourneyPage() {
  return (
    <>
      {/* ─── HERO: pattern interrupt + big promise + yes-hook ─── */}
      <section
        className="relative"
        style={{ background: "linear-gradient(135deg, #1a3028 0%, #2d5043 100%)" }}
      >
        <div className="container-narrow py-20 md:py-28 text-center">
          <p
            className="text-sm font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: "#e8a878" }}
          >
            מדריך רגשי לגרושים ופרודים טריים
          </p>
          <h1
            className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold leading-[1.1] mb-6"
            style={{ color: "white" }}
          >
            בעוד כמה שבועות,
            <br />
            אתה יכול להרגיש שוב{" "}
            <span style={{ color: "#e8a878" }}>כמו עצמך.</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "#b8cbbe" }}
          >
            לא כי הכאב נעלם — אלא כי הוא כבר לא מנהל אותך.
            <br />
            וזה מתחיל בהחלטה אחת קטנה. עכשיו.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout" className="btn-primary text-lg px-10 py-4">
              אני רוצה להתחיל ←
            </Link>
            <a
              href="/first-chapter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-lg px-8 py-4 rounded-xl border-2 transition-colors"
              style={{ borderColor: "#6a9176", color: "#b8cbbe" }}
            >
              קרא פרק ראשון חינם
            </a>
          </div>
        </div>
      </section>

      {/* ─── YES-SET: identification ─── */}
      <section className="py-20 md:py-28" style={{ background: "#fafaf8" }}>
        <div className="container-narrow max-w-2xl mx-auto">
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--color-text)" }}>
            <p>
              <strong>אם אתה גרוש טרי או פרוד — אתה כבר מכיר את התחושה הזו מבפנים:</strong>{" "}
              רכבת הרים רגשית שלא נגמרת. כעס, עצב, בדידות, חרדה מהעתיד, ביטחון עצמי שנשחק, האשמה עצמית — ולפעמים, ברגעים הקשים, אפילו מחשבות שמפחידות אותך.
            </p>
            <p
              className="font-[family-name:var(--font-display)] text-3xl"
              style={{ color: "#2d5043" }}
            >
              נכון?
            </p>
            <p>
              ואם אתה מהנהן עכשיו, כנראה שבעומק ליבך אתה כבר יודע מה היית רוצה: להחזיר לעצמך את השליטה, להיות רגוע ושליו יותר, להשאיר את העבר מאחור — ולהתחיל סוף־סוף להסתכל קדימה. למענך, ולמען הילדים שלך.
            </p>
          </div>
        </div>
      </section>

      {/* ─── AGITATION: the obstacle ─── */}
      <section className="py-20 md:py-28" style={{ background: "white" }}>
        <div className="container-narrow max-w-2xl mx-auto">
          <p
            className="font-[family-name:var(--font-display)] text-4xl mb-8 text-center"
            style={{ color: "#c4622d" }}
          >
            אבל...
          </p>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--color-text)" }}>
            <p>
              הבעיה היא שאתה במתקפה רגשית שלא מסתיימת. שוב הגרושה מאיימת. שוב הגרוש מאשים או נעלם. שוב צף הזיכרון מהבגידה או מהפגיעה — והרגשות מתעוררים מחדש, משתלטים על היום שלך, ומקשים עליך אפילו לדאוג לעצמך.
            </p>
            <p>
              ואתה מנסה. באמת. אומר לעצמך &quot;כבר שחררתי&quot; — אבל זה חוזר. כי אף אחד מעולם לא לימד אותך{" "}
              <strong>איך</strong> בדיוק עושים את זה.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FUTURE PACING ─── */}
      <section className="py-20 md:py-28" style={{ background: "#2d5043" }}>
        <div className="container-narrow max-w-2xl mx-auto text-center">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-8"
            style={{ color: "#8ab296" }}
          >
            עצור רגע, ודמיין
          </p>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed" style={{ color: "#e8eee9" }}>
            <p>
              דמיין את עצמך בעוד שלושה חודשים. אתה קם בבוקר — והכובד שהיה תמיד שם פשוט קל יותר.
            </p>
            <p>
              אתה חושב על מה שהיה, ובמקום שהבטן תתהפך, אתה מרגיש שקט. אתה מסתכל קדימה, ובפעם הראשונה מזה זמן רב — יש שם משהו שמושך אותך.
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl" style={{ color: "white" }}>
              כשאתה מדמיין את זה עכשיו, אתה כבר מרגיש משהו קטן משתחרר בפנים.
            </p>
            <p style={{ color: "#b8cbbe" }}>
              זה לא חלום. זו פשוט הדרך — כשמישהו סוף־סוף מראה לך אותה.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE BRIDGE: what you'll learn ─── */}
      <section className="py-20 md:py-28" style={{ background: "#fafaf8" }}>
        <div className="container-narrow max-w-2xl mx-auto">
          <h2
            className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-8 text-center"
            style={{ color: "var(--color-text)" }}
          >
            במדריך אתה תלמד בדיוק איך
          </h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--color-text)" }}>
            <p>
              איך הרגלים חדשים ופעולות קטנות — כאלה שאפשר ליישם כבר הלילה — מתחילים{" "}
              <strong>להחזיר לך את השליטה על הרגשות</strong>, במקום שהם ינהלו אותך.
            </p>
            <p>
              איך לקיחת אחריות על המחשבות, הדיבור והמעשים שלך מרגיעה את הכעס, הקנאה, האשמה והבדידות —{" "}
              ומחזירה לך את הביטחון העצמי שאיבדת בדרך.
            </p>
            <p>
              איך לסליחה יש כוח ריפוי עצום — לא בשביל הצד השני, אלא{" "}
              <strong>בשבילך</strong>. ומהי הדרך הטובה ביותר להתבונן ולתכנן את החיים שלך מכאן והלאה.
            </p>
            <div
              className="mt-8 p-6 rounded-xl text-center"
              style={{ background: "#eaf1ec" }}
            >
              <p style={{ color: "#2d5043" }} className="font-semibold">
                הכלים שבמדריך מגיעים מעולמות האימון האישי, הפסיכולוגיה החיובית, ה־NLP, מקורות היהדות ופנימיות התורה — מותאמים לקורא הישראלי.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDIBILITY ─── */}
      <section className="py-20 md:py-28" style={{ background: "white" }}>
        <div className="container-narrow">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center max-w-3xl mx-auto">
            <div className="flex justify-center">
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-md shrink-0">
                <Image
                  src="/barak.png"
                  alt="ברק יקותיאל — מחבר הספר שלם מלב שבור"
                  fill
                  sizes="160px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--color-text)" }}>
                <strong>אני ברק יקותיאל.</strong> עברתי גירושין, נפלתי לתוך אותו בור בדיוק — וחיפשתי ספר בעברית שיבין מה אני עובר וייתן לי כלים. לא מצאתי. אז כתבתי אותו בעצמי.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                היום אני בן 44, מאמן אישי, אבא לשלושה, נשוי בשנית ובונה חיים שאני גאה בהם. הדרך לא הייתה קלה — אבל היא אפשרית. ואני רוצה שגם אתה תדע את זה.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RISK REVERSAL + OFFER + CTA ─── */}
      <section className="py-20 md:py-28" style={{ background: "#1a3028" }}>
        <div className="container-narrow max-w-2xl mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-display)] text-3xl md:text-5xl mb-6"
            style={{ color: "white" }}
          >
            ההחלטה הקטנה שמתחילה הכל
          </h2>
          <p className="text-lg mb-10" style={{ color: "#b8cbbe" }}>
            ספר פיזי ואיכותי — כל עותק נחתם אישית בהקדשה ממני. מחיר שכולל הכל, בלי הפתעות.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-10 text-right">
            <div className="bg-white rounded-xl p-6">
              <div className="text-sm mb-1" style={{ color: "var(--color-text-muted)" }}>איסוף עצמי</div>
              <div className="text-3xl font-bold" style={{ color: "var(--color-primary-dark)" }}>65 ₪</div>
              <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
                מפתח תקווה, בתיאום טלפוני
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: "#e8a878" }}>
              <div className="text-sm mb-1" style={{ color: "var(--color-text-muted)" }}>משלוח עד הבית</div>
              <div className="text-3xl font-bold" style={{ color: "var(--color-primary-dark)" }}>90 ₪</div>
              <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
                לכל הארץ, 3–5 ימי עסקים
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-3 text-right mb-8 p-5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <span className="text-xl shrink-0">🛡️</span>
            <p style={{ color: "#e8eee9" }} className="text-sm leading-relaxed">
              <strong>אחריות אישית מלאה.</strong> קרא את הספר — ואם לא קיבלת ממנו ערך אמיתי, כתוב לי ישירות ואדאג שתצא מרוצה. הסיכון כולו עליי.
            </p>
          </div>

          <Link href="/checkout" className="btn-primary text-lg px-12 py-4">
            אני מתחיל עכשיו ←
          </Link>

          <p className="mt-8 text-sm leading-relaxed" style={{ color: "#8ab296" }}>
            נ.ב. — כל יום שאתה דוחה את זה הוא עוד יום שהעבר מנהל לך את ההווה. אתה לא חייב לעבור את זה לבד, ואתה לא חייב לחכות. הצעד הראשון נמצא במרחק לחיצה אחת.
          </p>
        </div>
      </section>

      <div className="h-20 md:hidden" aria-hidden />
      <StickyBuyBar href="/checkout" label="אני מתחיל" />
    </>
  );
}
