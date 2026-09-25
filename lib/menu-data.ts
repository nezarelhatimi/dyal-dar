export type CustomAddon = {
  id: string
  name: string
  price: number
  icon?: string
  description?: string
}

export type Item = {
  name: string
  desc: string
  price: number
  slug: string
  ingredients?: string[]
}

export type Category = {
  name: string
  items: Item[]
  addons?: CustomAddon[]
}

export const categories: Category[] = [
  {
    name: "Burgers",
    addons: [
      { id: "cheese", name: "Fromage supplémentaire", price: 5, icon: "🧀", description: "Tranche de cheddar fondu" },
      { id: "smoked-beef", name: "Bœuf fumé supplémentaire", price: 8, icon: "🥩", description: "Tranche de bœuf fumé croustillant" },
      { id: "sauce", name: "Sauce maison", price: 3, icon: "🥫", description: "Notre sauce signature" },
      { id: "onions", name: "Oignons caramélisés", price: 3, icon: "🧅", description: "Oignons doux cuits à la planche" },
    ],
    items: [
      { name: "Classic Burger", desc: "Steak haché, salade, tomate, fromage", price: 35, slug: "classic-burger", ingredients: ["Steak haché", "Salade", "Tomate", "Fromage"] },
      { name: "Double Smash", desc: "Double steak, sauce maison, cornichons", price: 49, slug: "double-smash", ingredients: ["Double steak", "Sauce maison", "Cornichons", "Fromage"] },
      { name: "Crispy Chicken", desc: "Poulet croustillant, coleslaw, mayo", price: 42, slug: "crispy-chicken", ingredients: ["Poulet croustillant", "Coleslaw", "Mayonnaise"] },
      { name: "BBQ Smokey", desc: "Steak, bœuf fumé, sauce BBQ, oignons caramélisés", price: 52, slug: "bbq-smokey", ingredients: ["Steak haché", "Bœuf fumé", "Sauce BBQ", "Oignons caramélisés"] },
    ],
  },
  {
    name: "Sandwichs",
    addons: [
      { id: "harissa", name: "Harissa supplémentaire", price: 2, icon: "🌶️", description: "Harissa maison pimentée" },
      { id: "cheese", name: "Fromage fondu", price: 5, icon: "🧀", description: "Tranche de fromage fondu" },
      { id: "fries", name: "Frites maison", price: 10, icon: "🍟", description: "Portion de frites fraîches" },
      { id: "sauce-blanche", name: "Sauce blanche", price: 3, icon: "🥫", description: "Sauce blanche maison" },
    ],
    items: [
      { name: "Kefta Maison", desc: "Kefta grillée, harissa, oignons, persil", price: 28, slug: "kefta-maison", ingredients: ["Kefta grillée", "Harissa", "Oignons", "Persil"] },
      { name: "Poulet Grillé", desc: "Filet de poulet, légumes, sauce blanche", price: 32, slug: "poulet-grille", ingredients: ["Filet de poulet", "Légumes", "Sauce blanche"] },
      { name: "Mix Viande", desc: "Kefta + merguez, frites incluses", price: 38, slug: "mix-viande", ingredients: ["Kefta", "Merguez", "Frites"] },
    ],
  },
  {
    name: "Accompagnements",
    addons: [
      { id: "ketchup", name: "Sauce ketchup", price: 2, icon: "🍅", description: "Ketchup maison" },
      { id: "mayo", name: "Mayonnaise", price: 2, icon: "🥫", description: "Mayo maison" },
      { id: "harissa", name: "Harissa", price: 2, icon: "🌶️", description: "Harissa maison" },
    ],
    items: [
      { name: "Frites Maison", desc: "Fraîches, croustillantes", price: 15, slug: "frites-maison", ingredients: ["Pommes de terre fraîches", "Sel"] },
      { name: "Onion Rings", desc: "Panés, sauce ketchup", price: 18, slug: "onion-rings", ingredients: ["Oignons panés", "Sauce ketchup"] },
      { name: "Salade Fraîche", desc: "Tomate, concombre, vinaigrette", price: 12, slug: "salade-fraiche", ingredients: ["Tomate", "Concombre", "Vinaigrette"] },
    ],
  },
  {
    name: "Boissons",
    addons: [
      { id: "ice", name: "Glaçons", price: 0, icon: "🧊", description: "Avec ou sans glaçons" },
      { id: "citron", name: "Citron", price: 2, icon: "🍋", description: "Tranche de citron frais" },
    ],
    items: [
      { name: "Jus d'Orange Frais", desc: "Pressé minute", price: 18, slug: "jus-orange", ingredients: ["Oranges fraîches"] },
      { name: "Sodas", desc: "Coca, Pepsi, Sprite", price: 10, slug: "sodas", ingredients: ["Au choix"] },
      { name: "Eau Minérale", desc: "Sidi Ali / Oulmes", price: 7, slug: "eau-minerale", ingredients: ["Eau de source"] },
    ],
  },
]