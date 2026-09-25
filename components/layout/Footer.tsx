import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-12 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-bold text-white">Dyal Dar</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Fast-food 100% fait maison au Maarif, Casablanca.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link 
                  href="/menu" 
                  className="transition-colors hover:text-white"
                >
                  Notre Menu
                </Link>
              </li>
              <li>
                <Link 
                  href="/#apropos" 
                  className="transition-colors hover:text-white"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Location */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <p className="mt-3 text-sm text-zinc-400">
              Maarif, Casablanca
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              WhatsApp: +212 6 61 00 00 00
            </p>
          </div>

        </div>

        <div className="mt-12 border-t border-neutral-900 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Dyal Dar. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}