import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-neutral-800">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-bold text-xl">Dyal Dar 🍔</p>
            <p className="text-sm leading-relaxed">
              Fast food bnin, fait maison. Maarif, Casablanca.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-sm uppercase tracking-widest">Navigation</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="#menu" className="hover:text-white transition-colors">Menu</Link>
              <Link href="#galerie" className="hover:text-white transition-colors">Galerie</Link>
              <Link href="#apropos" className="hover:text-white transition-colors">À propos</Link>
              <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-sm uppercase tracking-widest">Contact</p>
            <div className="flex flex-col gap-2 text-sm">
              <p>+212 661 000 000</p>
              <p>dyaldar@gmail.com</p>
              <p>23 Rue Abou Inane, Maarif</p>
              <p>Casablanca, Maroc</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Dyal Dar. Tous droits réservés.</p>
          <p>
            Site réalisé par{" "}
            
              <a href="https://github.com/nezarelhatimi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c0392b] hover:underline"
            >
              Nezar
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}