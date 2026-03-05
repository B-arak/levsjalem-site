export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center py-6 mt-12">
      <div className="max-w-4xl mx-auto text-sm text-gray-600">
        © {new Date().getFullYear()} שלם מלב שבור. כל הזכויות שמורות.
      </div>
    </footer>
  );
}
