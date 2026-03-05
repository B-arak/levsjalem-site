import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-4xl flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-gray-800">
          שלם מלב שבור
        </Link>
        <nav>
          <ul className="flex space-x-6 rtl:space-x-reverse">
            <li>
              <Link href="#about" className="text-gray-700 hover:text-[var(--color-accent)]">על הספר</Link>
            </li>
            <li>
              <Link href="#summary" className="text-gray-700 hover:text-[var(--color-accent)]">תקציר ופרק ראשון</Link>
            </li>
            <li>
              <Link href="#author" className="text-gray-700 hover:text-[var(--color-accent)]">המחבר</Link>
            </li>
            <li>
              <Link href="#buy" className="text-gray-700 hover:text-[var(--color-accent)]">רכישה</Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-700 hover:text-[var(--color-accent)]">צור קשר</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
