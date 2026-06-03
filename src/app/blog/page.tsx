import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "בלוג — טיפים והתמודדות עם גירושין",
  description:
    "מאמרים ועצות להתמודדות רגשית עם גירושין מאת ברק יקותיאל — מאמן אישי ומחבר ‘שלם מלב שבור’. בדידות, ניהול רגשות, יתרונות גירושין בהסכמה, ועוד.",
  alternates: { canonical: "https://www.levshalem.net/blog" },
};

export default function BlogPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide">
        <nav aria-label="פירורי לחם" className="text-sm text-[var(--color-text-soft)] mb-6">
          <Link href="/" className="hover:text-[var(--color-primary)]">דף הבית</Link>
          <span className="mx-2">/</span>
          <span>בלוג</span>
        </nav>

        <header className="mb-12 max-w-2xl">
          <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-2">
            בלוג
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-4">
            מאמרים על התמודדות רגשית עם גירושין
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
            טיפים, כלים, ותובנות מהשטח — מאת ברק יקותיאל.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-[var(--color-surface)] border border-[var(--color-border-soft)] rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-sm text-[var(--color-text-soft)] mb-2 flex gap-3">
                <time dateTime={post.date}>{post.dateDisplay}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-3 leading-tight">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-5">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] inline-flex items-center gap-1"
              >
                להמשך קריאה ←
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
