"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-gray-100">
      <nav className="max-w-[800px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium text-gray-900 hover:text-navy transition-colors">
          Meet Rajguru
        </Link>
        <div className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-navy underline decoration-navy underline-offset-4"
                    : "text-gray-500 hover:text-navy"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="mailto:mt.rajguru@gmail.com"
            className="text-sm text-gray-500 hover:text-navy transition-colors"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-sm text-white font-medium bg-navy rounded-md px-3 py-1.5 hover:bg-navy-dark transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
