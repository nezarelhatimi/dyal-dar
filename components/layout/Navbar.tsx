"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menu", href: "/menu" },
  { label: "À propos", href: "/#apropos" },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">

        {/* Logo matching Footer style */}
        <Link href="/" className="text-2xl font-black text-white uppercase tracking-tight">
          Dyal <span className="text-red-500">Dar</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="https://wa.me/212661000000"
          target="_blank"
          className="hidden md:inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:scale-[1.02]"
        >
          Commander
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2.5 text-zinc-400 hover:text-white rounded-xl bg-zinc-900/60 border border-zinc-800/60 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-300 hover:text-white text-base font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/212661000000"
            target="_blank"
            className="w-full text-center bg-red-600 hover:bg-red-500 text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-lg shadow-red-600/20 mt-2"
            onClick={() => setOpen(false)}
          >
            Commander
          </Link>
        </div>
      )}
    </nav>
  );
}