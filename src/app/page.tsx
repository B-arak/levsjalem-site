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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            עזרה ראשונה לנפש: המדריך המעשי שיעזור לך לחזור לשלוט בחיים אחרי הגירושין
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            שלם מלב שבור - המדריך הרגשי הראשון בעברית לגרושים ופרודים טריים
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 font-medium">
            אם אתם מתמודדים עם כעס, בדידות, חרדה ופחדים מהעתיד – המדריך הזה נכתב במיוחד עבורכם!
            כלים מעשיים לריפוי הלב, חיזוק הביטחון העצמי ויצירת חיים חדשים ושלמים.
          </p>
          <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 inline-block">
            ⏰ הצעה מוגבלת בזמן – 30% הנחה עד סוף החודש!
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#buy"
              className="inline-block bg-white text-[var(--color-accent)] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              שלחו לי את המדריך עכשיו ✨
            </a>
            <a
              href="#leadmagnet"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--color-accent)] transition"
            >
              אני רוצה להתחיל פרק חדש 🆓
            </a>
          </div>
          <p className="mt-6 text-sm opacity-80">
            ✅ ערבות החזר כספי מלא ל‑30 יום | ✅ למעלה מ‑500 קוראים כבר השתנו
          </p>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="leadmagnet" className="w-full py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🎁</div>
          <h2 className="text-4xl font-bold mb-6">קבלו 5 טיפים חיוניים בחינם</h2>
          <p className="text-xl mb-8 leading-relaxed">
            "5 הטיפים שעזרו לי לשרוד את השבוע הראשון של הגירושין"
          </p>
          <p className="text-lg mb-8 opacity-90">
            הזינו את האימייל שלכם וקבלו מיידית את ה-PDF עם 5 הטיפים הקריטיים להתמודדות רגשית בימים הראשונים
          </p>
          
          <form className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl max-w-md mx-auto">
            <input
              type="email"
              placeholder="הכנס כתובת אימייל"
              className="w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 font-bold text-lg rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              שלחו לי את 5 הטיפים עכשיו →
            </button>
            <p className="text-xs text-gray-600 mt-4">
              אנחנו לא שוברים את ההסכם - בריאות הרוח שלכם היא העדיפות שלנו
            </p>
          </form>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">מה אומרים הקוראים?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "הספר הזה הציל אותי. אחרי הגירושין הרגשתי שבור לגמרי, אבל הכלים כאן עזרו לי לבנות את עצמי מחדש.
                היום אני חזק יותר מתמיד ומלא תקווה לעתיד."
              </p>
              <p className="font-semibold text-[var(--color-accent)]">שרה כ., 42</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "כפרוד טרי, הרגשתי אבוד. הספר נתן לי כלים מעשיים להתמודד עם הכעס והבדידות.
                המלצה חמה לכל מי שעובר תקופה קשה."
              </p>
              <p className="font-semibold text-[var(--color-accent)]">דוד מ., 38</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "תודה על המדריך הזה. הוא עזר לי להבין שאני לא לבד, ונתן לי כוח להמשיך הלאה.
                השינוי שהוא יצר בחיי הוא מדהים."
              </p>
              <p className="font-semibold text-[var(--color-accent)]">רחל ל., 35</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">למעלה מ-500 קוראים כבר חוו שינוי משמעותי בחייהם</p>
          </div>
        </div>
      </section>

      {/* Problem/Solution section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">מה תקבלו במדריך?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="text-6xl mb-6">💔</div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">הבעיה</h3>
              <p className="text-gray-700 leading-relaxed">
                גירושין מביאים איתם סערת רגשות: כעס, בדידות, חרדה, אובדן ביטחון עצמי,
                ופחד מהעתיד. רבים מרגישים שבורים ולא יודעים איך להמשיך הלאה.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="text-6xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">הכלים</h3>
              <p className="text-gray-700 leading-relaxed">
                טכניקות מוכחות מאימון אישי, פסיכולוגיה חיובית, NLP ומקורות יהודיים.
                תרגילים מעשיים שתוכלו ליישם מיידית בחיי היומיום שלכם.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="text-6xl mb-6">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">התוצאה</h3>
              <p className="text-gray-700 leading-relaxed">
                ריפוי רגשי, חיזוק ביטחון עצמי, יכולת ליצור מערכות יחסים בריאות,
                וחיים מלאי משמעות ותקווה לעתיד טוב יותר.
              </p>
            </div>
          </div>
          <div className="mt-16 bg-[var(--color-accent)] text-white p-8 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-4">המדריך כולל:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
              <div className="flex items-center justify-center">
                <span className="mr-2">📚</span> 12 פרקים מקיפים
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">🎯</span> תרגילים מעשיים
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">💡</span> כלים מיידיים ליישום
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">🤝</span> תמיכה אישית
              </div>
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
          <h2 className="text-3xl font-bold mb-8 text-gray-800">מי אני ולמה אני בעמדה למדריך אתכם?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/author.jpg" alt="ברק יקותיאל - המחבר" className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
            </div>
            <div className="text-right">
              <h3 className="text-2xl font-bold mb-4">ברק יקותיאל</h3>
              <p className="text-lg leading-relaxed mb-4 font-semibold text-[var(--color-accent)]">
                מאמן אישי, מוכשר בـ NLP וטראומה רגשית
              </p>
              <p className="text-lg leading-relaxed mb-6">
                הספר "שלם מלב שבור" נכתב מתוך חוויה אישית עמוקה. עברתי גירושין קשה שהותיר אותי בשברים רגשיים - כעס, בדידות, חרדה ופחד מהעתיד. בחיפוש דחוף עבור עזרה, גיליתי שחסר מדריך בעברית שמפנה ישירות לכאב של גרושים וגרושות טריים.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                בשנים הבאות, הסתמכתי על כלים מאימון אישי, פסיכולוגיה חיובית, NLP וחוכמת יהודית כדי לרפא את הלב שלי ולבנות חיים חדשים ושלמים יותר. הכלים שהשתמשתי בהם עבדו - והם עבדו גם עבור עוזרים וקוראים אחרים.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                כיום, אני משתף את הכלים הללו במדריך זה כדי לעזור לאחרים שעוברים מה שעברתי. זו תקוותי שתצאו מפרץ הרגשות הזה לברק חדש של תקווה והצלחה אישית.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee section */}
      <section className="w-full py-16 px-4 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">הבטחתנו אליכם</h2>
          <p className="text-xl mb-8 leading-relaxed">
            אנחנו יודעים שזה קשה. לכן אנחנו נותנים לכם ערבות של 30 יום להחזר כספי מלא.
            אם המדריך לא יעזור לכם להתמודד טוב יותר עם הרגשות שלכם – פשוט החזירו אותו ותקבלו את הכסף בחזרה.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            <p className="text-lg font-semibold text-[var(--color-accent)]">
              "אם לא תרגישו שיפור משמעותי ברגשות שלכם תוך 30 יום – נחזיר לכם את כל הכסף"
            </p>
          </div>
        </div>
      </section>

      {/* Bundles/Upsells section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">בחרו את החבילה המתאימה לכם</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Basic Bundle */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-4">ספר בלבד</h3>
              <p className="text-gray-600 mb-6">
                הספר "שלם מלב שבור" בחרות פיזית או דיגיטלית
              </p>
              <div className="text-3xl font-bold text-green-600 mb-6">₪59-89</div>
              <button className="w-full bg-[var(--color-accent)] text-white py-3 font-bold rounded-lg hover:bg-opacity-90 transition">
                בחר חבילה זו
              </button>
            </div>

            {/* Premium Bundle */}
            <div className="border-2 border-[var(--color-accent)] bg-white p-8 rounded-xl shadow-xl scale-105 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[var(--color-accent)] text-white px-4 py-1 rounded-full text-sm font-bold">
                ⭐ הבחירה הפופולרית
              </div>
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-4">חבילת פרמיום</h3>
              <p className="text-gray-600 mb-6">
                הספר + חוברת עבודה דיגיטלית + גישה לקהילה סגורה
              </p>
              <div className="text-3xl font-bold text-green-600 mb-6">₪129 <span className="text-lg line-through">₪179</span></div>
              <button className="w-full bg-[var(--color-accent)] text-white py-3 font-bold rounded-lg hover:bg-opacity-90 transition">
                בחר חבילה זו
              </button>
              <p className="text-sm text-gray-600 mt-4">חסכון של ₪50</p>
            </div>

            {/* Diamond Bundle */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4">חבילת יהלום</h3>
              <p className="text-gray-600 mb-6">
                כל מה בחבילה פרמיום + שיחת ייעוץ עם המחבר (30 דקות)
              </p>
              <div className="text-3xl font-bold text-green-600 mb-6">₪249 <span className="text-lg line-through">₪349</span></div>
              <button className="w-full bg-[var(--color-accent)] text-white py-3 font-bold rounded-lg hover:bg-opacity-90 transition">
                בחר חבילה זו
              </button>
              <p className="text-sm text-gray-600 mt-4">חסכון של ₪100</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buy section */}
      <section id="buy" className="w-full py-20 px-4 bg-[var(--color-accent)] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-8 inline-block">
            ⏰ הצעה מוגבלת בזמן – 30% הנחה עד סוף החודש בלבד!
          </div>
          <h2 className="text-4xl font-bold mb-8">קבל את המדריך עכשיו ותחל את הריפוי</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            אל תחכה יותר! למעלה מ-500 קוראים כבר שינו את חייהם עם הכלים האלה.
            הצטרף אליהם ותחל את המסע שלך לחיים שלמים יותר.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <a
              className="block bg-white text-[var(--color-accent)] p-8 rounded-xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105"
              href="https://store.quickepub.com/?id=landingpage&bookid=urn:uuid:F035F9A7-FB8B-4D91-AA88-6A3174AF25B5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-2">גרסה פיזית – הליקון</h3>
              <p className="mb-4">ספר מודפס איכותי עם משלוח עד הבית</p>
              <div className="text-3xl font-bold text-green-600">₪89</div>
              <div className="text-sm text-gray-600 line-through">₪127</div>
            </a>
            <a
              className="block bg-white text-[var(--color-accent)] p-8 rounded-xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105"
              href="https://www.e-vrit.co.il/Product/22511/%D7%A9%D7%9C%D7%9D_%D7%9E%D7%9C%D7%91_%D7%A9%D7%91%D7%95%D7%A8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-2">גרסה דיגיטלית – עברית</h3>
              <p className="mb-4">PDF להורדה מיידית + קריאה באפליקציה</p>
              <div className="text-3xl font-bold text-green-600">₪59</div>
              <div className="text-sm text-gray-600 line-through">₪85</div>
            </a>
          </div>

          <div className="bg-white text-[var(--color-accent)] p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">💯 ערבות החזר כספי מלא ל-30 יום</h3>
            <p className="text-lg mb-6">
              אם לא תרגיש שיפור משמעותי ברגשות שלך תוך 30 יום – נחזיר לך את כל הכסף.
              אנחנו בטוחים כל כך בכלים האלה כי הם עובדים!
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-2">🔒</span> תשלום מאובטח
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-2">🚚</span> משלוח חינם
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-2">📞</span> תמיכה 24/7
              </div>
            </div>
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
