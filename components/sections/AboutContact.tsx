"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";

interface AboutContactProps {
  imageUrl?: string;
  whatsappNumber?: string;
  googleMapsUrl?: string;
  address?: string;
  city?: string;
  hoursWeekday?: string;
  hoursWeekend?: string;
}

export default function AboutContact({
  imageUrl, // Pass a real photo like "/images/kitchen.jpg" when ready
  whatsappNumber = "212661000000",
  googleMapsUrl = "https://maps.google.com/?q=Maarif+Casablanca",
  address = "Maarif",
  city = "Casablanca, Maroc",
  hoursWeekday = "11h — 23h",
  hoursWeekend = "11h — 00h",
}: AboutContactProps) {

  // Real-time Open Status Check
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      const isWeekend = day === 0 || day === 6;

      if (isWeekend) {
        setIsOpen(currentHour >= 11 || currentHour === 0);
      } else {
        setIsOpen(currentHour >= 11 && currentHour < 23);
      }
    };

    checkOpenStatus();
    // Re-evaluate status every minute
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="apropos" className="py-14 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Main Content Card */}
        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-sm mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Brand Story & Stats (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1">
                  <span className="text-[11px] font-bold tracking-widest text-red-500 uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                    À propos
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3">
                    Manger comme à la maison.
                  </h2>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-2.5">
                    Dyal Dar est né en 2021 au Maarif avec une idée simple : un fast food 100% fait maison. Pain frais, viande locale et recettes préparées chaque jour.
                  </p>
                </div>

                {/* Optional Photo (renders only when imageUrl is provided) */}
                {imageUrl && (
                  <div className="relative w-full sm:w-36 h-32 shrink-0 rounded-2xl overflow-hidden border border-zinc-800/80">
                    <Image 
                      src={imageUrl} 
                      alt="Cuisine Dyal Dar" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                )}
              </div>

              {/* Refined Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-zinc-800/60 text-center sm:text-left">
                <div>
                  <p className="text-xl md:text-2xl font-black text-red-500">500+</p>
                  <p className="text-zinc-400 text-xs mt-0.5 font-medium">Commandes / mois</p>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-red-500">4.8 ★</p>
                  <p className="text-zinc-400 text-xs mt-0.5 font-medium">Avis clients</p>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-red-500">2021</p>
                  <p className="text-zinc-400 text-xs mt-0.5 font-medium">Depuis</p>
                </div>
              </div>

            </div>

            {/* Right Column: Embedded Location Anchor Panel (5 cols) */}
            <div className="lg:col-span-5 bg-zinc-950/80 border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                    Infos Pratiques
                  </span>
                  
                  {/* Real-time Dynamic Open Badge */}
                  {isOpen ? (
                    <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-medium text-emerald-400">Ouvert</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 bg-zinc-800/80 border border-zinc-700/50 px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-zinc-500" />
                      <span className="text-[11px] font-medium text-zinc-400">Fermé</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">{address}</p>
                      <p className="text-xs text-zinc-400">{city}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">{hoursWeekday} <span className="text-xs font-normal text-zinc-400">(Lun — Ven)</span></p>
                      <p className="text-xs text-zinc-400">{hoursWeekend} (Sam — Dim)</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Primary Action Button */}
              <a 
  href={`https://wa.me/${whatsappNumber}`}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm tracking-wide px-6 py-3.5 rounded-2xl border border-emerald-400/30 shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
>
  {/* Official WhatsApp SVG Logo */}
  <svg 
    className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform duration-300 shrink-0" 
    viewBox="0 0 24 24"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.834-1.951-.929-.262-.095-.453-.143-.644.143-.19.285-.737.929-.904 1.119-.167.19-.333.214-.618.071-.285-.143-1.207-.445-2.299-1.418-.85-.758-1.424-1.694-1.591-1.98-.167-.285-.018-.439.124-.581.128-.128.285-.333.428-.5.143-.167.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.644-1.552-.882-2.122-.231-.555-.467-.479-.643-.488l-.548-.01c-.19 0-.5.071-.761.357-.262.285-1.001.977-1.001 2.382 0 1.405 1.023 2.763 1.166 2.953.143.19 2.013 3.074 4.877 4.312.681.295 1.213.471 1.627.602.684.217 1.307.186 1.8.113.55-.082 1.689-.69 1.927-1.357.238-.667.238-1.238.167-1.357-.071-.119-.262-.19-.547-.333z"/>
  </svg>
  <span>Commander sur WhatsApp</span>
</a>
            </div>

          </div>
        </div>

        {/* Map Strip with Subtle Interactions */}
        <div className="rounded-3xl overflow-hidden border border-zinc-800/80 h-56 md:h-64 bg-zinc-900 relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9!2d-7.6335!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzOCcwMC42Ilc!5e0!3m2!1sfr!2sma!4v1620000000000!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            className="w-full h-full grayscale contrast-[1.15] invert-[0.9] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          {/* External Map Link Overlay */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-zinc-950/90 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 backdrop-blur-md shadow-xl transition-colors"
          >
            <span>Voir l'itinéraire</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

      </div>
    </section>
  );
}