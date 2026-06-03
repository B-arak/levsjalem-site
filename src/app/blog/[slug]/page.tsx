import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPostBySlug } from "../posts";

type Params = { slug: string };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://www.levshalem.net/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: ["ברק יקותיאל"],
      images: ["/cover.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/cover.png"],
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let para: string[] = [];
  let listItems: string[] = [];
  let inBlockquote = false;
  let key = 0;

  const flushPara = () => {
    if (para.length > 0) {
      const text = para.join(" ").trim();
      if (text) elements.push(<p key={key++} dangerouslySetInnerHTML={{ __html: inline(text) }} />);
      para = [];
    }
  };
  const flushList = () => {
    if (listItems.length > 0) {
      const items = listItems.slice();
      elements.push(
        <ul key={key++}>
          {items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inline(it) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
      inBlockquote = false;
      continue;
    }
    if (line.startsWith("## ")) {
      flushPara();
      flushList();
      elements.push(<h2 key={key++}>{line.substring(3)}</h2>);
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara();
      flushList();
      elements.push(<h3 key={key++}>{line.substring(4)}</h3>);
      continue;
    }
    if (line.startsWith("> ")) {
      flushPara();
      flushList();
      elements.push(<blockquote key={key++}>{line.substring(2)}</blockquote>);
      inBlockquote = true;
      continue;
    }
    if (line.startsWith("- ")) {
      flushPara();
      listItems.push(line.substring(2));
      continue;
    }
    para.push(line);
  }
  flushPara();
  flushList();
  return elements;
}

function inline(text: string) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

export default async function BlogPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://www.levshalem.net/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: "https://www.levshalem.net/cover.png",
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "he-IL",
    author: {
      "@type": "Person",
      name: "ברק יקותיאל",
      url: "https://www.levshalem.net/about",
    },
    publisher: {
      "@type": "Organization",
      name: "שלם מלב שבור",
      logo: {
        "@type": "ImageObject",
        url: "https://www.levshalem.net/cover.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <article className="py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="container-narrow">
        <nav aria-label="פירורי לחם" className="text-sm text-[var(--color-text-soft)] mb-6">
          <Link href="/" className="hover:text-[var(--color-primary)]">דף הבית</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[var(--color-primary)]">בלוג</Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </nav>

        <header className="mb-8">
          <div className="text-sm text-[var(--color-text-soft)] mb-3 flex gap-3">
            <time dateTime={post.date}>{post.dateDisplay}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span>·</span>
            <span>ברק יקותיאל</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
            {post.description}
          </p>
        </header>

        <div className="prose-he">{renderContent(post.content)}</div>

        <div className="mt-16 p-8 bg-[var(--color-surface-warm)] rounded-xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl mb-3">
            לעמוד יותר עם זה לבד
          </h2>
          <p className="text-[var(--color-text-muted)] mb-6 max-w-xl mx-auto">
            הספר ״שלם מלב שבור״ הוא המדריך הרגשי הראשון בעברית לגרושים ופרודים טריים — עם כלים מעשיים ליישום מיידי.
          </p>
          <Link href="/checkout" className="btn-primary">
            לרכישת הספר ←
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-[var(--color-border-soft)]">
          <Link
            href="/blog"
            className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)]"
          >
            ← חזרה לכל המאמרים
          </Link>
        </div>
      </div>
    </article>
  );
}
