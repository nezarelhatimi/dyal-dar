export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-neutral-900">Nous trouver</h2>
          <p className="text-neutral-500 mt-2">
            On est ouverts 7j/7 — commandez sur WhatsApp ou passez nous voir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Info */}
          <div className="flex flex-col gap-8">

            <div>
              <p className="text-sm font-semibold text-[#c0392b] uppercase tracking-widest mb-2">Adresse</p>
              <p className="text-neutral-700">23 Rue Abou Inane, Maarif</p>
              <p className="text-neutral-700">Casablanca, Maroc</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#c0392b] uppercase tracking-widest mb-2">Horaires</p>
              <div className="flex flex-col gap-1 text-neutral-700">
                <div className="flex justify-between max-w-xs">
                  <span>Lundi — Vendredi</span>
                  <span>11h — 23h</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Samedi — Dimanche</span>
                  <span>11h — 00h</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#c0392b] uppercase tracking-widest mb-2">Contact</p>
              <p className="text-neutral-700">+212 661 000 000</p>
              <p className="text-neutral-700">dyaldar@gmail.com</p>
            </div>

            {/* WhatsApp CTA */}
            
             <a href="https://wa.me/212661000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 w-fit"
            >
              Commander sur WhatsApp
            </a>

          </div>

          {/* Map embed */}
          <div className="rounded-lg overflow-hidden border border-neutral-200 min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9!2d-7.6335!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzOCcwMC42Ilc!5e0!3m2!1sfr!2sma!4v1620000000000!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}