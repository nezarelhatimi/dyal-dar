"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus_Jakarta_Sans } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/layout/WhatsAppButton"
import { categories, Category, Item } from "@/lib/menu-data"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
})

function MenuItemImage({ slug, name }: { slug: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        aria-hidden
        className="flex h-full w-full items-center justify-center bg-neutral-800"
      >
        <span className="text-3xl font-extrabold text-neutral-600">
          {name.charAt(0)}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={`/images/menu/${slug}.png`}
      alt={name}
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  )
}

function MenuItemCard({ item }: { item: Item }) {
  return (
    <Link href={`/menu/${item.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-900 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c0392b]/40 hover:shadow-xl hover:shadow-[#c0392b]/10">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
          <MenuItemImage slug={item.slug} name={item.name} />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-50"
          />

          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-neutral-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span>Voir</span>
            <span className="text-[#c0392b] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-3 bg-zinc-900/40 px-4 py-3.5">
          <div>
            <p className="font-bold text-white transition-colors duration-200 group-hover:text-red-400">
              {item.name}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400 line-clamp-2">
              {item.desc}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-[#c0392b]/20 bg-[#c0392b]/10 px-3 py-1 text-sm font-bold whitespace-nowrap text-red-400 transition-transform duration-300 group-hover:scale-105">
            {item.price} MAD
          </span>
        </div>
      </article>
    </Link>
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous")

  const categoryNames = ["Tous", ...categories.map((c) => c.name)]

  const filteredCategories: Category[] =
    activeCategory === "Tous"
      ? categories
      : categories.filter((c) => c.name === activeCategory)

  return (
    <div className={`${jakarta.className} min-h-screen bg-neutral-950 text-white flex flex-col`}>
      <Navbar />

      <main className="flex-1 pt-24 pb-20 md:pb-28">
        <div className="border-b border-neutral-900 bg-neutral-950 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c0392b]">
              Dyal Dar Casablanca
            </span>
            <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Notre Menu
            </h1>
            <p className="mx-auto mt-4 text-pretty text-neutral-400 text-base md:text-lg tracking-wide">
  Fait maison · Ingrédients frais · Commande directe sur WhatsApp
</p>
          </div>
        </div>

        <div className="sticky top-16 z-30 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900/80 py-4">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1 border-b border-neutral-800">
              {categoryNames.map((name) => {
                const isActive = activeCategory === name
                return (
                  <button
                    key={name}
                    onClick={() => setActiveCategory(name)}
                    className={`px-4 py-2 text-sm font-bold whitespace-nowrap uppercase tracking-widest transition-all duration-200 border-b-2 ${
  isActive
    ? "border-[#c0392b] text-white"
    : "border-transparent text-neutral-500 hover:text-white"
}`}
                  >
                    {name}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 md:px-8 mt-10">
          <div className="space-y-16">
            {filteredCategories.map((cat) => (
              <div key={cat.name}>
                <div className="mb-7 flex items-center gap-4">
                  <h2 className="text-lg font-bold uppercase tracking-wide text-white">
                    {cat.name}
                  </h2>
                  <div className="h-px flex-1 bg-neutral-800" />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item) => (
                    <MenuItemCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="https://wa.me/212661000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-md border border-white/40 bg-transparent px-8 py-4 font-semibold text-white shadow-lg shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.47-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
              </svg>
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}