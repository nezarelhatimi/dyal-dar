const categories = [
  {
    name: "Burgers",
    items: [
      { name: "Classic Burger", desc: "Steak haché, salade, tomate, fromage", price: 35 },
      { name: "Double Smash", desc: "Double steak, sauce maison, cornichons", price: 49 },
      { name: "Crispy Chicken", desc: "Poulet croustillant, coleslaw, mayo", price: 42 },
      { name: "BBQ Bacon", desc: "Steak, bacon, sauce BBQ, oignons caramélisés", price: 52 },
    ],
  },
  {
    name: "Sandwichs",
    items: [
      { name: "Kefta Maison", desc: "Kefta grillée, harissa, oignons, persil", price: 28 },
      { name: "Poulet Grillé", desc: "Filet de poulet, légumes, sauce blanche", price: 32 },
      { name: "Mix Viande", desc: "Kefta + merguez, frites incluses", price: 38 },
    ],
  },
  {
    name: "Accompagnements",
    items: [
      { name: "Frites Maison", desc: "Fraîches, croustillantes", price: 15 },
      { name: "Onion Rings", desc: "Panés, sauce ketchup", price: 18 },
      { name: "Salade Fraîche", desc: "Tomate, concombre, vinaigrette", price: 12 },
    ],
  },
  {
    name: "Boissons",
    items: [
      { name: "Jus d'Orange Frais", desc: "Pressé minute", price: 18 },
      { name: "Sodas", desc: "Coca, Pepsi, Sprite", price: 10 },
      { name: "Eau Minérale", desc: "Sidi Ali / Oulmes", price: 7 },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-neutral-900">
            Notre Menu
          </h2>

          <p className="text-neutral-500 mt-2">
            Fait maison, ingrédients frais — commandez sur WhatsApp
          </p>
        </div>

        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat.name}>

              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold text-neutral-900">
                  {cat.name}
                </h3>

                <div className="flex-1 h-px bg-neutral-200" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-lg p-5 border border-neutral-200 hover:border-[#c0392b] hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex justify-between items-start gap-2">

                      <div>
                        <p className="font-semibold text-neutral-900">
                          {item.name}
                        </p>

                        <p className="text-sm text-neutral-500 mt-1">
                          {item.desc}
                        </p>
                      </div>

                      <span className="text-[#c0392b] font-bold text-sm whitespace-nowrap">
                        {item.price} MAD
                      </span>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://wa.me/212661000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200"
          >
            Commander sur WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}