import Link from "next/link"
import Image from "next/image"
import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
})

export default function Hero() {
  return (
    <section
      className={`${jakarta.className} relative flex min-h-[92vh] items-center overflow-hidden bg-neutral-950`}
    >
      <Image
        src="/images/hero-bg.jpg"
        alt="Assortiment de street food marocaine — brochettes de kefta, merguez et briouat"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/30 md:from-neutral-950/92 md:via-neutral-950/60 md:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-7 px-5 py-24 md:px-8">

        <div className="hero-item hero-item-1 flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c0392b] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c0392b]" />
            </span>
            Casablanca · Maarif
          </span>
        </div>

        <h1 className="hero-item hero-item-2 max-w-3xl font-extrabold leading-[0.98] tracking-[-0.03em] text-white text-[clamp(3rem,7vw,5.5rem)]">
          Manger bien,
          <br />
          <span className="text-[#c0392b]">payer moins.</span>
        </h1>

        <p className="hero-item hero-item-3 max-w-md text-lg leading-relaxed text-neutral-300">
          Fast food bnin, b les ingrédients frais — livrés ou à emporter. Commande directement sur WhatsApp.
        </p>

        <div className="hero-item hero-item-4 flex flex-col gap-4 pt-1 sm:flex-row sm:flex-wrap">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-md bg-[#c0392b] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#c0392b]/30 transition duration-200 hover:-translate-y-0.5 hover:bg-[#a93226] hover:shadow-xl hover:shadow-[#c0392b]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0392b]"
          >
            Voir le menu
          </Link>
          <Link
            href="https://wa.me/212661000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Commander sur WhatsApp
          </Link>
        </div>

        <p className="hero-item hero-item-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-400">
          <span>Préparé à la commande</span>
          <span aria-hidden className="text-neutral-600">·</span>
          <span>Ingrédients frais</span>
          <span aria-hidden className="text-neutral-600">·</span>
          <span>Maarif</span>
        </p>

      </div>
    </section>
  )
}