import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-dark)] text-white mt-20">
      <div className="container-wide py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl mb-3 text-white">
              שלם מלב שבור
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              המדריך הרגשי הראשון בעברית לגרושים ופרודים טריים — כלים מעשיים
              לריפוי הלב ובניית חיים חדשים אחרי גירושין.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-3 text-white">ניווט</h4>
            <ul className="space-y-2 text-white/80 text-[15px]">
              <li><Link href="/" className="hover:text-white">דף הבית</Link></li>
              <li><Link href="/about" className="hover:text-white">על הספר והסופר</Link></li>
              <li><Link href="/blog" className="hover:text-white">בלוג</Link></li>
              <li><Link href="/checkout" className="hover:text-white">רכישת הספר</Link></li>
              <li><Link href="/contact" className="hover:text-white">צור קשר</Link></li>
              <li><Link href="/terms" className="hover:text-white">תקנון האתר</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-3 text-white">יצירת קשר</h4>
            <ul className="space-y-2 text-white/80 text-[15px]">
              <li>
                <a href="tel:+972528717980" className="hover:text-white">
                  052-8717980
                </a>
              </li>
              <li>
                <a href="mailto:barakuty@gmail.com" className="hover:text-white">
                  barakuty@gmail.com
                </a>
              </li>
              <li className="text-white/70">איסוף עצמי: הענבל 16/3, פתח תקווה (בתיאום)</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 text-center text-white/70 text-sm">
          <p>© {year} ברק יקותיאל · ע.מ. 049820228 · כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}
