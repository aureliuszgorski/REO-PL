"use client";

import { motion } from "framer-motion";
import { FileCheck, Users, ShoppingCart, ArrowLeftRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    icon: FileCheck,
    title: "Umowa PPA",
    description: "Długoterminowe ustalenie stałej (lub stałej z indeksacją) ceny za energię elektryczną, umożliwiające stabilizację kosztów zakupu energii",
    delay: 0.1,
    href: "/oferta/umowy-dlugoterminowe-ppa"
  },
  {
    icon: Users,
    title: "Grupy biznesowe",
    description: "Sprzedaż wytworzonej przez wytwórcę OZE energii elektrycznej w ramach utworzonej Grupy, po cenie ustalonej przez jej członków",
    delay: 0.2,
    href: "/oferta/grupy-biznesowe"
  },
  {
    icon: ShoppingCart,
    title: "Tabela Ofert",
    description: "Możliwość personalizacji oferty zakupu lub sprzedaży zielonej energii elektrycznej",
    delay: 0.3,
    href: "/oferta/tabela-ofert"
  },
  {
    icon: ArrowLeftRight,
    title: "Platforma P2P",
    description: "Dedykowane rozwiązanie, dla odbiorców i wytwórców do bezpośredniego obrotu energią elektryczną online ze źródeł odnawialnych",
    delay: 0.4,
    href: "/oferta/platforma-peer-to-peer"
  },
];

export default function ArchitectureGrid() {
  return (
    <section className="py-24 px-6 md:px-[5%] max-w-7xl mx-auto bg-white font-sans">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#201B55]"
      >
        Platforma Reo.pl
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: card.delay }}
              className="group relative p-8 pb-10 bg-[#f4f6f8] rounded-[32px] rounded-tr-none hover:shadow-[0_20px_50px_rgba(45,47,93,0.1)] transition-all duration-300 pointer-events-auto cursor-pointer"
            >
              <Link href={card.href} className="absolute inset-0 z-30" aria-label={`Przejdź do: ${card.title}`} />
              
              {/* Folder Cutout Top-Right Zabezpieczenie wizualne odwracające narożnik */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-bl-[28px] z-10 pointer-events-none translate-x-[1px] -translate-y-[1px]" />
              
              {/* Pływający zielony przycisk ze strzałką - umieszczony 'w wycięciu' */}
              <div className="absolute top-3 right-3 w-10 h-10 bg-[#A9E8CB] text-white rounded-full flex items-center justify-center z-20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#1D71B8] shadow-sm">
                 <ArrowUpRight className="w-5 h-5" />
              </div>

              <div className="relative z-10">
                <div className="w-[72px] h-[72px] bg-[#201B55] rounded-full flex items-center justify-center text-white mb-6 group-hover:-translate-y-1 transition-transform duration-300 shadow-md">
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-[#201B55] mb-4 group-hover:text-[#1D71B8] transition-colors">{card.title}</h3>
                
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
