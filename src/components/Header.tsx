import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-4xl flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-gray-800">
          שלם מלב שבור
        </Link>
        <nav>
          <ul className="flex space-x-6 rtl:space-x-reverse items-center">
            <li>
              <Link href="#about" className="text-gray-700 hover:text-[var(--color-accent)] transition">על הספר</Link>
            </li>
            <li>
              <Link href="#author" className="text-gray-700 hover:text-[var(--color-accent)] transition">המחבר</Link>
            </li>
            <li>
              <Link href="#faq" className="text-gray-700 hover:text-[var(--color-accent)] transition">שאלות</Link>
            </li>
            <li>
              <Link 
                href="#buy" 
                className="bg-[var(--color-accent)] text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition"
              >
                קנה עכשיו
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
