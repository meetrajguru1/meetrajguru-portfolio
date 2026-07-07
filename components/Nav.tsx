"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100">
      <nav className="max-w-[800px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-sm font-medium text-gray-900 hover:text-navy transition-colors"
        >
          Meet Rajguru
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 -mr-2"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-sm py-2 transition-colors ${
                  active ? "text-navy font-medium" : "text-gray-500 hover:text-navy"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="mailto:mt.rajguru@gmail.com"
            className="text-sm text-gray-500 hover:text-navy transition-colors py-2"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-sm text-white font-medium bg-navy rounded-md px-3 py-2 mt-2 text-center hover:bg-navy-dark transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
