export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero section - Emotional and compelling */}
      <section className="w-full bg-gradient-to-br from-[var(--color-accent)] to-green-700 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="w-48 mx-auto mb-8">
            <img src="/cover.png" alt="כיסוי הספר שלם מלב שבור" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            שלם מלב שבור
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            מדריך רגשי לגרושים ופרודים טריים
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            גם אתם מתמודדים עם הטלטלה הרגשית בעקבות הגירושין? המדריך הזה נכתב במיוחד עבורכם!
            כלים מעשיים לריפוי הלב, חיזוק הביטחון העצמי ויצירת חיים חדשים ושלמים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#buy"
              className="inline-block bg-white text-[var(--color-accent)] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              קנה עכשיו
            </a>
            <a
              href="#summary"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--color-accent)] transition"
            >
              הורד פרק ראשון חינם
            </a>
          </div>
        </div>
      </section>

      {/* Problem/Solution section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">האם זה נשמע מוכר?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-right">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-600">הבעיות הרגשיות</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• כעס, קנאה ונקמה</li>
                <li>• בדידות וחוסר ביטחון עצמי</li>
                <li>• חרדה מהעתיד והאשמה עצמית</li>
                <li>• מחשבות טורדניות על העבר</li>
                <li>• קושי לישון או להתרכז</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-600">הפתרון שלנו</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• כלים מעשיים לניהול רגשות</li>
                <li>• טכניקות סליחה וריפוי</li>
                <li>• חיזוק ערך עצמי וביטחון</li>
                <li>• הכוונה לחיים חדשים ושלמים</li>
                <li>• תמיכה מקצועית וחוויתית</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About the book */}
      <section id="about" className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">מה תמצאו במדריך?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                "שלם מלב שבור" הוא המדריך הראשון בעברית שנכתב במיוחד עבור גרושים ופרודים טריים.
                הוא מציע כלים מעשיים מעולמות האימון האישי, הפסיכולוגיה החיובית, NLP ומקורות היהדות
                כדי לעזור לכם להתמודד עם סערת הרגשות ולצאת מתוך המשבר לחיים בריאים ושלמים יותר.
              </p>
              <p className="text-lg leading-relaxed">
                המדריך נכתב מתוך ניסיון אישי – לאחר שעברתי תהליך גירושין בעצמי וחיפשתי עזרה
                שלא מצאתי. היום, אחרי שנים, אני יודע שהכלים האלה עובדים ויכולים לעזור גם לכם.
              </p>
            </div>
            <div className="bg-[var(--color-accent)] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">למי זה מתאים?</h3>
              <p className="leading-relaxed">
                אם אתם חווים רכבת הרים רגשית, רגשות כדוגמת כעס, עצבות, בדידות, חרדה ופחדים מהעתיד,
                ביטחון עצמי נמוך או אפילו מחשבות אובדניות – המדריך הזה נכתב עבורכם.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary / first chapter download */}
      <section id="summary" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">תקציר הספר ופרק ראשון להורדה</h2>
          <p className="text-lg mb-6 leading-relaxed">
            למטה תוכלו להוריד תקציר של הספר ואת הפרק הראשון בחינם.
            זה ייתן לכם הצצה לתוכן ויעזור לכם להחליט אם המדריך מתאים לכם.
          </p>
          <a
            className="inline-block bg-[var(--color-accent)] px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg hover:bg-opacity-90 transition transform hover:scale-105"
            href="/first-chapter.pdf"
            download
          >
            הורד תקציר ופרק ראשון
          </a>
        </div>
      </section>

      {/* Author section */}
      <section id="author" className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">מי אני ולמה כדאי לכם לקרוא?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/author.jpg" alt="ברק יקותיאל - המחבר" className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
            </div>
            <div className="text-right">
              <h3 className="text-2xl font-bold mb-4">ברק יקותיאל</h3>
              <p className="text-lg leading-relaxed mb-6">
                מאמן אישי ומחבר הספר "שלם מלב שבור". המדריך נכתב בעקבות חוויות הגירושין האישית שלי,
                החוויות הרגשיות איתן התמודדתי ואיתן מתמודדים גרושים וגרושות רבים.
              </p>
              <p className="text-lg leading-relaxed">
                תמצאו בו את הכלים המקצועיים בהם נעזרתי כדי לרפא את הלב, לצאת לדרך חדשה וטובה
                יותר ולמצוא זוגיות מיטיבה. אני בטוח שיעזרו גם לכם במסע לחיים החדשים שלכם.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buy section */}
      <section id="buy" className="w-full py-20 px-4 bg-[var(--color-accent)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">המדריך זמין לרכישה</h2>
          <p className="text-lg mb-12">
            ניתן לרכוש את "שלם מלב שבור" כעותק פיזי או דיגיטלי דרך הפלטפורמות הבאות:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a
              className="block bg-white text-[var(--color-accent)] p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              href="https://store.quickepub.com/?id=landingpage&bookid=urn:uuid:F035F9A7-FB8B-4D91-AA88-6A3174AF25B5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-2xl font-bold mb-2">אתר הליקון</h3>
              <p>רכישה מקוונת עם משלוח עד הבית</p>
            </a>
            <a
              className="block bg-white text-[var(--color-accent)] p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              href="https://www.e-vrit.co.il/Product/22511/%D7%A9%D7%9C%D7%9D_%D7%9E%D7%9C%D7%91_%D7%A9%D7%91%D7%95%D7%A8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-2xl font-bold mb-2">אתר עברית</h3>
              <p>ספרים דיגיטליים ופיזיים</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">צור קשר</h2>
          <p className="text-lg mb-8 leading-relaxed">
            יש לך שאלות? אני כאן לעזור. שלח לי הודעה ואחזור אליך בהקדם האפשרי.
          </p>
          <a
            href="mailto:contact@levsjalem.net?subject=שאלה על המדריך שלם מלב שבור"
            className="inline-block bg-[var(--color-accent)] px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg hover:bg-opacity-90 transition"
          >
            שלח אימייל
          </a>
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
