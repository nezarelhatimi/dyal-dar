"use client";

const photos = [
  { src: "/images/burger-1.jpg", alt: "Classic Burger" },
  { src: "/images/burger-2.jpg", alt: "Double Smash" },
  { src: "/images/sandwich-1.jpg", alt: "Kefta Maison" },
  { src: "/images/frites.jpg", alt: "Frites Maison" },
  { src: "/images/poulet.jpg", alt: "Crispy Chicken" },
  { src: "/images/boisson.jpg", alt: "Jus Frais" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-neutral-900">Galerie</h2>
          <p className="text-neutral-500 mt-2">
            Fait maison, photographié maison.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/400x400/f4f4f5/a1a1aa?text=" + photo.alt;
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}