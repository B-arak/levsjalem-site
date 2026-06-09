import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1a3028" }} className="mt-20">
      <div className="container-wide py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          <div>
            <h3
              className="font-[family-name:var(--font-display)] text-xl mb-3"
              style={{ color: "#e8a878" }}
            >
              שלם מלב שבור
            </h3>
            <p className="text-[15px] leading-relaxed footer-link" style={{ cursor: "default" }}>
              המדריך הרגשי הראשון בעברית לגרושים ופרודים טריים — כלים מעשיים
              לריפוי הלב ובניית חיים חדשים אחרי גירושין.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4" style={{ color: "#e8a878" }}>
              ניווט
            </h4>
            <ul className="space-y-2.5 text-[15px]">
              {[
                { href: "/", label: "דף הבית" },
                { href: "/about", label: "על הספר והסופר" },
                { href: "/blog", label: "בלוג" },
                { href: "/buy", label: "רכישת הספר" },
                { href: "/contact", label: "צור קשר" },
                { href: "/terms", label: "תקנון האתר" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4" style={{ color: "#e8a878" }}>
              יצירת קשר
            </h4>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href="tel:+972528717980" className="footer-link">
                  052-8717980
                </a>
              </li>
              <li>
                <a href="mailto:barakuty@gmail.com" className="footer-link">
                  barakuty@gmail.com
                </a>
              </li>
              <li style={{ color: "#b0c7ba" }}>
                איסוף עצמי: הענבל 16/3, פתח תקווה (בתיאום)
              </li>
            </ul>
          </div>

        </div>

        <div
          className="pt-8 text-center text-sm"
          style={{ borderTop: "1px solid #2f5040", color: "#9ab5a2" }}
        >
          <p>© {year} ברק יקותיאל · ע.מ. 049820228 · כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}
