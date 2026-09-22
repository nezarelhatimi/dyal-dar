import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-neutral-900 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-6">
        
        {/* Tag */}
        <span className="text-[#c0392b] text-sm font-semibold tracking-widest uppercase">
          Casablanca · Maarif
        </span>

        {/* Headline */}
        <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight max-w-2xl">
          Manger bien,<br />
          <span className="text-[#c0392b]">payer moins.</span>
        </h1>

        {/* Subtext — darija */}
        <p className="text-neutral-300 text-lg max-w-md">
          Fast food bnin, b les ingrédients frais — livrés ou à emporter. 
          Commande directement sur WhatsApp.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-2">
          <Link
            href="#menu"
            className="bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 text-sm"
          >
            Voir le menu
          </Link>
          <Link
            href="https://wa.me/212661000000"
            target="_blank"
            className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-semibold px-8 py-4 rounded-md transition-colors duration-200 text-sm"
          >
            Commander sur WhatsApp
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-6 mt-4 text-neutral-400 text-sm">
          <span>⭐ 4.8 / 5</span>
          <span className="w-px h-4 bg-neutral-600" />
          <span>+500 commandes / mois</span>
          <span className="w-px h-4 bg-neutral-600" />
          <span>Livraison 30 min</span>
        </div>
      </div>
    </section>
  );
}