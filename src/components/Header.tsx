"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/about", label: "על הספר והסופר" },
  { href: "/blog", label: "בלוג" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border-soft)]">
      <div className="container-wide flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-[var(--color-primary-dark)] font-bold text-lg"
          aria-label="שלם מלב שבור - דף הבית"
        >
          <span
            className="font-[family-name:var(--font-display)] text-xl tracking-tight"
            style={{ color: "var(--color-primary-dark)" }}
          >
            שלם מלב שבור
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="ניווט ראשי">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] font-medium text-[15px] transition-colors rounded-md hover:bg-[var(--color-surface-warm)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/checkout"
            className="mr-2 px-5 py-2 bg-[var(--color-accent)] text-white font-semibold text-[15px] rounded-md hover:bg-[var(--color-accent-dark)] transition-colors shadow-sm"
          >
            רכישת הספר
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-[var(--color-text)] rounded-md hover:bg-[var(--color-surface-warm)]"
          aria-label={open ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={open}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-[var(--color-border-soft)] bg-[var(--color-bg)]"
          aria-label="ניווט נייד"
        >
          <div className="container-wide py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-[var(--color-text)] font-medium rounded-md hover:bg-[var(--color-surface-warm)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-md text-center"
            >
              רכישת הספר
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
