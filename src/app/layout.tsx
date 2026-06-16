import type { Metadata, Viewport } from "next";
import { Heebo, Frank_Ruhl_Libre } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-body",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-display",
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = "https://www.levshalem.net";
const SITE_NAME = "שלם מלב שבור";
const SITE_DESCRIPTION =
  "המדריך הרגשי הראשון בעברית לגרושים ופרודים טריים. כלים מעשיים מאימון אישי, פסיכולוגיה חיובית, NLP ומקורות היהדות להתמודדות עם הכאב, ריפוי הלב ובניית חיים חדשים אחרי גירושין.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "שלם מלב שבור — מדריך רגשי לגרושים ופרודים טריים",
    template: "%s | שלם מלב שבור",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "גירושין",
    "מדריך לגרושים",
    "ספר על גירושין",
    "התמודדות עם גירושין",
    "ריפוי רגשי אחרי גירושין",
    "ברק יקותיאל",
    "שלם מלב שבור",
    "אימון אישי לגרושים",
    "בדידות אחרי גירושין",
    "גרושים טריים",
  ],
  authors: [{ name: "ברק יקותיאל", url: SITE_URL + "/about" }],
  creator: "ברק יקותיאל",
  publisher: "ברק יקותיאל",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "שלם מלב שבור — מדריך רגשי לגרושים ופרודים טריים",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "שלם מלב שבור — מדריך רגשי לגרושים ופרודים טריים",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "שלם מלב שבור — מדריך רגשי לגרושים ופרודים טריים",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Self-Help",
};

export const viewport: Viewport = {
  themeColor: "#2d5043",
  width: "device-width",
  initialScale: 1,
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: SITE_URL + "/cover.png",
      founder: { "@id": SITE_URL + "/#person" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+972-52-871-7980",
        email: "barakuty@gmail.com",
        contactType: "customer service",
        areaServed: "IL",
        availableLanguage: "Hebrew",
      },
    },
    {
      "@type": "Person",
      "@id": SITE_URL + "/#person",
      name: "ברק יקותיאל",
      alternateName: "Barak Yekutiel",
      url: SITE_URL + "/about",
      jobTitle: "מאמן אישי ומחבר",
      email: "barakuty@gmail.com",
      telephone: "+972-52-871-7980",
      knowsAbout: [
        "התמודדות עם גירושין",
        "אימון אישי",
        "פסיכולוגיה חיובית",
        "NLP",
        "ריפוי רגשי",
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": SITE_URL + "/#organization" },
      inLanguage: "he-IL",
    },
    {
      "@type": "Book",
      "@id": SITE_URL + "/#book",
      name: "שלם מלב שבור",
      alternateName: "מדריך רגשי לגרושים ופרודים טריים",
      author: { "@id": SITE_URL + "/#person" },
      inLanguage: "he",
      bookFormat: "https://schema.org/Paperback",
      description:
        "המדריך הרגשי הראשון בעברית לגרושים ופרודים טריים. כלים מעשיים מעולמות האימון האישי, הפסיכולוגיה החיובית, NLP ומקורות היהדות.",
      image: SITE_URL + "/cover.png",
      offers: {
        "@type": "Offer",
        price: "65.00",
        priceCurrency: "ILS",
        availability: "https://schema.org/InStock",
        url: SITE_URL + "/checkout",
        seller: { "@id": SITE_URL + "/#person" },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${frankRuhl.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
