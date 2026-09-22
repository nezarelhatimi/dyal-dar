export default function About() {
  return (
    <section id="apropos" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Notre histoire</h2>
            <p className="text-neutral-300 text-lg">
              Dyal Dar, c'est né d'une idée simple — manger comme à la maison, 
              mais avec le goût d'un vrai fast food. On a commencé en 2021 
              dans le Maarif avec une seule recette de burger. Aujourd'hui, 
              on sert plus de 500 commandes par mois.
            </p>
            <p className="text-neutral-300">
              Tout est préparé sur place, chaque jour. Pas de surgelé, 
              pas de compromis. Pain frais, viande locale, sauces maison.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-4 pt-6 border-t border-neutral-700">
              <div>
                <p className="text-3xl font-bold text-[#c0392b]">500+</p>
                <p className="text-neutral-400 text-sm mt-1">Commandes / mois</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#c0392b]">4.8</p>
                <p className="text-neutral-400 text-sm mt-1">Note moyenne</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#c0392b]">3+</p>
                <p className="text-neutral-400 text-sm mt-1">Ans d'expérience</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-800">
            <img
              src="/images/about.jpg"
              alt="Notre cuisine"
              className="w-full h-full object-cover opacity-80"
            />
            {/* Fallback color block if no image */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-sm">
              📸 Photo cuisine
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}