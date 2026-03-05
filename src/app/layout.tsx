import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "שלם מלב שבור - מדריך רגשי לגרושים ופרודים טריים",
  description: "קנה את הספר וגלו כלים רגשיים לריפוי הלב אחרי גירושין.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased bg-white text-gray-800`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
