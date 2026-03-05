export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero section */}
      <section className="w-full bg-[var(--color-accent)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* cover image (place file at public/cover.png) */}
          <div className="w-48 mb-6">
            <img src="/cover.png" alt="כיסוי הספר" className="w-full h-auto" />
          </div>
          <h1 className="text-4xl font-bold max-w-2xl mx-auto">
            שלם מלב שבור
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            מדריך רגשי לגרושים ופרודים טריים – כלי לריפוי הלב ולחיים חדשים.
          </p>
          <p className="mt-2 max-w-xl mx-auto text-sm">
            גם אתם מתמודדים עם הטלטלה הרגשית בעקבות הגירושין? מדריך זה נכתב
            במיוחד עבורכם!
          </p>
          <a
            id="buy"
            href="#buy"
            className="mt-8 inline-block rounded-full bg-white text-[var(--color-accent)] px-8 py-3 font-semibold shadow hover:bg-gray-100 transition"
          >
            לרכישת המדריך
          </a>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="w-full py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">על הספר</h2>
          <p className="text-base leading-relaxed">
            הספר "שלם מלב שבור" מספק כלים מעשיים מעולמות האימון האישי,
            הפסיכולוגיה החיובית ומקורות יהדות כדי לעזור לגרושים
            להתמודד עם סערת הרגשות ולחיות חיים שלמים יותר לאחר הפרידה.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            המדריך נכתב בזמן שהמחבר היה פרוד וחיפש עזרה להתמודד עם
            הטלטלה הרגשית. הוא לא מצא ריכוז של כלים שאפשר ליישם יומיום
            – ולכן הוא כתב את מה שהוא עצמו היה צריך.
          </p>
        </div>
      </section>

      {/* Summary / first chapter download section */}
      <section id="summary" className="w-full py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">תקציר הספר ופרק ראשון</h2>
          <p className="text-base leading-relaxed mb-4">
            למטה תוכלו להוריד תקציר ולקבל הצצה לפרק הראשון של "שלם מלב
            שבור". לקבלת הקובץ עצמו, העלו אותו אל התיקייה הציבורית (`/public`)
            בשם `first-chapter.pdf`.
          </p>
          <a
            className="inline-block rounded-full bg-[var(--color-accent)] px-6 py-3 text-white font-semibold hover:bg-opacity-90 transition"
            href="/first-chapter.pdf"
            download
          >
            הורדת התקציר ופרק ראשון
          </a>
        </div>
      </section>

      {/* Author section */}
      <section id="author" className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">על המחבר</h2>
          <p className="text-base leading-relaxed">
            ברק יקותיאל, מאמן אישי ומחבר הספר. ברק עבר תהליך גירושין
            אישי ופגש בטלטלה רגשית – מה שהוביל לכתיבת מדריך זה מתוך
            ניסיון ותובנות אישיות ומקצועיות.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            הוא שילב במדריך כלים מעולמות האימון, פסיכולוגיה חיובית, NLP
            ומקורות יהדות – מתוך מטרה לעזור לאחרים למצוא שלווה, ביטחון
            עצמי ויכולת להמשיך הלאה.
          </p>
        </div>
      </section>

      {/* Buy section placeholder with links */}
      <section className="w-full py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">רכישה</h2>
          <p className="mb-6">
            ניתן לרכוש את המדריך כעותק פיזי או דיגיטלי דרך הפלטפורמות
            הבאות:
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-white font-semibold hover:bg-opacity-90 transition"
              href="https://store.quickepub.com/?id=landingpage&bookid=urn:uuid:F035F9A7-FB8B-4D91-AA88-6A3174AF25B5"
              target="_blank"
              rel="noopener noreferrer"
            >
              באתר הליקון
            </a>
            <a
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-white font-semibold hover:bg-opacity-90 transition"
              href="https://www.e-vrit.co.il/Product/22511/%D7%A9%D7%9C%D7%9D_%D7%9E%D7%9C%D7%91_%D7%A9%D7%91%D7%95%D7%A8"
              target="_blank"
              rel="noopener noreferrer"
            >
              באתר עברית
            </a>
          </div>
        </div>
      </section>

      {/* Contact section placeholder */}
      <section id="contact" className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">צור קשר</h2>
          <p>מלא פרטים ונחזור אליך בהקדם האפשרי.</p>
          {/* Add a form in later iteration */}
        </div>
      </section>

      {/* FAQ section */}
      <section id="faq" className="w-full py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">שאלות ותשובות</h2>
          <div className="space-y-6 text-base">
            <div>
              <p className="font-semibold">מהו המדריך "שלם מלב שבור"?</p>
              <p>
                מדריך רגשי שנכתב עבור גירושים ופרודים טריים, עם כלים
                מעשיים להתמודדות עם רגשות כעס, בדידות, חיזוק הביטחון
                העצמי ועוד.
              </p>
            </div>
            <div>
              <p className="font-semibold">למי מתאים המדריך?</p>
              <p>
                לכל מי שעבר או עובר תהליך גירושין ומרגיש צורך בתמיכה
                והכוונה רגשית. מתאים לגברים ולנשים כאחד.
              </p>
            </div>
            <div>
              <p className="font-semibold">האם אפשר להוריד פרק ראשון לפני רכישה?</p>
              <p>
                כן – ניתן להוריד את התקציר והפרק הראשון דרך הלחצן
                בסעיף "תקציר ופרק ראשון".
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
