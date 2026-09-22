"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Galerie", href: "#galerie" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-[#c0392b] tracking-tight">
          Dyal Dar 🍔
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-neutral-700 hover:text-[#c0392b] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="https://wa.me/212661000000"
          target="_blank"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Commander
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-neutral-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-700 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/212661000000"
            target="_blank"
            className="btn-primary text-sm text-center"
          >
            Commander
          </Link>
        </div>
      )}
    </nav>
  );
}