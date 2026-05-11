import Link from "next/link";

export default function Nav() {
  return (
    <header className="w-full border-b border-gray-100">
      <nav className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium text-gray-900 hover:opacity-60 transition-opacity">
          Meet Rajguru
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/work" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Work
          </Link>
          <Link href="/writing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Writing
          </Link>
          <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            About
          </Link>
          <a
            href="mailto:mt.rajguru@gmail.com"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
