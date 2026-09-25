"use client"

import { use, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Plus_Jakarta_Sans } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/layout/WhatsAppButton"
import { categories, Item, Category } from "@/lib/menu-data"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
})

// Définition des options et suppléments
export interface CustomAddon {
  id: string
  name: string
  price: number
  icon?: string
  description?: string
}

export interface ExtendedItem extends Item {
  longDescription?: string
  ingredients?: string[]
  addons?: CustomAddon[]
}

// Suppléments par défaut si l'item n'en a pas spécifiquement dans la BDD
const DEFAULT_ADDONS: CustomAddon[] = [
  { id: "fries", name: "Frites de maison", price: 10, icon: "🍟", description: "Portion de frites fraîches croustillantes" },
  { id: "drink", name: "Boisson fraîche 33cl", price: 8, icon: "🥤", description: "Coca-Cola, Fanta, Sprite ou Eau" },
  { id: "cheese", name: "Fromage supplémentaire", price: 5, icon: "🧀", description: "Tranche de cheddar fondu" },
  { id: "onions", name: "Oignons caramélisés", price: 3, icon: "🧅", description: "Oignons doux cuits à la planche" },
]

function ProductImage({ slug, name }: { slug: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        aria-hidden
        className="flex h-full w-full items-center justify-center bg-neutral-900 rounded-2xl min-h-[420px]"
      >
        <span className="text-7xl font-extrabold text-neutral-800">
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
      priority
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.02]"
      onError={() => setFailed(true)}
    />
  )
}

function CardImage({ slug, name }: { slug: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        aria-hidden
        className="flex h-full w-full items-center justify-center bg-neutral-900"
      >
        <span className="text-3xl font-extrabold text-neutral-800">
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

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function MenuItemPage({ params }: PageProps) {
  const { slug } = use(params)

  let rawItem: Item | null = null
  let category: Category | null = null

  for (const cat of categories) {
    const found = cat.items.find((i) => i.slug === slug)
    if (found) {
      rawItem = found
      category = cat
      break
    }
  }

  if (!rawItem || !category) {
    notFound()
  }

  const item = rawItem as ExtendedItem
const availableAddons = category.addons || []
  // Gestion des suppléments sélectionnés
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([])

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Calcul du prix total
  const selectedAddonsList = availableAddons.filter((a) => selectedAddonIds.includes(a.id))
  const addonsTotal = selectedAddonsList.reduce((sum, a) => sum + a.price, 0)
  const totalPrice = item.price + addonsTotal

  // Message WhatsApp structuré
  const addonsText = selectedAddonsList.length > 0
    ? `\n• Personnalisation :\n` + selectedAddonsList.map((a) => `   + ${a.name} (${a.price} MAD)`).join("\n")
    : ""

  const whatsappMessage = `Bonjour Dyal Dar ! 👋\nJe souhaite commander :\n\n• *${item.name}* — ${item.price} MAD${addonsText}\n\n*Total : ${totalPrice} MAD*`
  const whatsappUrl = `https://wa.me/212661000000?text=${encodeURIComponent(whatsappMessage)}`

  // Articles associés & Navigation
  const relatedItems = category.items.filter((i) => i.slug !== item.slug).slice(0, 3)
  const allItems: Item[] = categories.flatMap((cat) => cat.items)
  const currentIndex = allItems.findIndex((i) => i.slug === slug)
  const prevItem = allItems[(currentIndex - 1 + allItems.length) % allItems.length]
  const nextItem = allItems[(currentIndex + 1) % allItems.length]

  return (
    <div className={`${jakarta.className} min-h-screen bg-neutral-950 text-white flex flex-col selection:bg-[#c0392b] selection:text-white`}>
      <Navbar />

      <main className="flex-1 pt-24 pb-20 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">

          {/* Lien de Retour */}
          <div className="mb-8 md:mb-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              <span className="text-sm">←</span>
              <span>Retour au menu</span>
            </Link>
          </div>

          {/* Grille Principale */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Photo Produit Éditoriale (Fixe sur Desktop) */}
            <div className="lg:col-span-6 w-full lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800/80 shadow-2xl shadow-black/80">
                <ProductImage slug={item.slug} name={item.name} />
              </div>
            </div>

            {/* Interface de Commande & Détails Produit */}
            <div className="lg:col-span-6 flex flex-col justify-start text-left space-y-7">
              
              {/* En-tête : Catégorie, Titre, Prix Base */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c0392b]">
                  {category.name}
                </span>

                <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {item.name}
                </h1>

                <div className="mt-3 flex items-baseline gap-2 text-3xl sm:text-4xl font-extrabold text-white">
                  <span>{item.price}</span>
                  <span className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                    MAD
                  </span>
                </div>
              </div>

              {/* Description Appétissante */}
              <div>
                <p className="text-base sm:text-[18px] leading-relaxed text-neutral-300 font-normal max-w-xl">
                  {item.longDescription || item.desc}
                </p>

                {/* Micro-Badges de Fraîcheur */}
                <div className="mt-4 flex items-center gap-2.5 text-xs font-medium text-neutral-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Préparé à la commande</span>
                  <span className="text-neutral-600">•</span>
                  <span>Ingrédients frais</span>
                </div>
              </div>

              {/* Ce qui est inclus */}
              <div className="pt-5 border-t border-neutral-800/80 space-y-2.5">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                  Ce qui est inclus
                </h2>
                <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed">
                  {item.ingredients && item.ingredients.length > 0
                    ? item.ingredients.join("  ·  ")
                    : item.desc.replace(/,/g, "  ·  ")}
                </p>
              </div>

              {/* Module de Personnalisation / Add-ons (Rangées Compactes) */}
              <div className="pt-5 border-t border-neutral-800/80 space-y-3.5">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Personnalisez votre commande
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1">
                    Ajoutez simplement ce qui vous fait envie.
                  </p>
                </div>

                {/* Liste des Options Compactes */}
                <div className="space-y-2">
                  {availableAddons.map((addon) => {
                    const isSelected = selectedAddonIds.includes(addon.id)

                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 group ${
                          isSelected
                            ? "border-[#c0392b]/70 bg-[#c0392b]/10 text-white"
                            : "border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {addon.icon && (
                            <span className="text-lg leading-none">{addon.icon}</span>
                          )}
                          <div>
                            <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-white">
                              {addon.name}
                            </p>
                            {addon.description && (
                              <p className="text-[11px] text-neutral-400 mt-0.5">
                                {addon.description}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 ml-3">
                          <span className="text-xs font-bold text-neutral-300">
                            +{addon.price} MAD
                          </span>

                          <span
                            className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                              isSelected
                                ? "bg-[#c0392b] text-white shadow-sm shadow-[#c0392b]/50"
                                : "bg-neutral-800 text-neutral-400 group-hover:text-white"
                            }`}
                          >
                            {isSelected ? "✓" : "＋"}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Total & Action WhatsApp */}
              <div className="pt-5 border-t border-neutral-800/80 space-y-4">
                
                {/* Ligne récapitulative du prix */}
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    Total
                  </span>
                  <div className="flex items-baseline gap-1.5 text-2xl font-extrabold text-white">
                    <span>{totalPrice}</span>
                    <span className="text-xs font-bold text-neutral-400">MAD</span>
                  </div>
                </div>

                {/* Bouton de Commande WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between rounded-xl bg-[#c0392b] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#c0392b]/20 transition-all duration-300 hover:bg-[#a93226] hover:shadow-xl hover:shadow-[#c0392b]/30 focus:outline-none focus:ring-2 focus:ring-[#c0392b]/50"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.47-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
                    </svg>
                    <span>Commander sur WhatsApp</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm opacity-90">{totalPrice} MAD</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Navigation Précédent / Suivant */}
          <nav aria-label="Navigation produit" className="mt-16 sm:mt-24 border-t border-neutral-900 pt-8">
            <div className="flex items-center justify-between gap-4">
              {prevItem && (
                <Link
                  href={`/menu/${prevItem.slug}`}
                  className="group flex flex-col gap-1 text-left transition-colors"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 transition-colors group-hover:text-[#c0392b]">
                    ← Produit précédent
                  </span>
                  <span className="text-sm font-bold text-neutral-300 transition-colors group-hover:text-white sm:text-base">
                    {prevItem.name}
                  </span>
                </Link>
              )}

              {nextItem && (
                <Link
                  href={`/menu/${nextItem.slug}`}
                  className="group flex flex-col gap-1 text-right transition-colors"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 transition-colors group-hover:text-[#c0392b]">
                    Produit suivant →
                  </span>
                  <span className="text-sm font-bold text-neutral-300 transition-colors group-hover:text-white sm:text-base">
                    {nextItem.name}
                  </span>
                </Link>
              )}
            </div>
          </nav>

          {/* Recommandations / Vous aimerez aussi */}
          {relatedItems.length > 0 && (
            <section className="mt-16 sm:mt-24 border-t border-neutral-900 pt-14">
              <div className="mb-8 flex items-center justify-between gap-4">
                <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                  Vous pourriez aussi aimer
                </h2>
                <div className="h-px flex-1 bg-neutral-900" />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedItems.map((rel) => (
                  <article key={rel.slug} className="group">
                    <Link href={`/menu/${rel.slug}`} className="block">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900">
                        <CardImage slug={rel.slug} name={rel.name} />
                      </div>

                      <div className="mt-3 px-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-bold text-white transition-colors group-hover:text-[#c0392b]">
                            {rel.name}
                          </p>
                          <span className="shrink-0 text-sm font-bold text-[#c0392b]">
                            {rel.price} MAD
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                          {rel.desc}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}