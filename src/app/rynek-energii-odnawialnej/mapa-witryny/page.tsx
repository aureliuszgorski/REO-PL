"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MapaWitrynyPage() {
  const mapData = [
    {
      title: "Oferta",
      items: [
        { name: "Umowy długoterminowe PPA", href: "/oferta/umowy-dlugoterminowe-ppa" },
        { name: "Grupy biznesowe", href: "/oferta/grupy-biznesowe" },
        { name: "Tabela ofert", href: "/oferta/tabela-ofert" },
        { name: "Platforma Peer-to-Peer", href: "/oferta/platforma-peer-to-peer" },
        { name: "Zielona energia dla biznesu", href: "/oferta/zielona-energia-dla-biznesu" },
        { name: "Zielona energia dla hoteli i SPA", href: "/oferta/oferta-oze-dla-hoteli-i-spa" },
        { name: "Zielona energia dla branży automotive", href: "/oferta/zielona-energia-dla-branzy-automotive" },
        { name: "Zielona energia dla branży spożywczej", href: "/oferta/zielona-energia-dla-branzy-spozywczej" },
        { name: "Zielona energia dla branży przetwórczej", href: "/oferta/zielona-energia-dla-branzy-przetworczej" },
        { name: "Zielona energia dla branży nieruchomości", href: "/oferta/zielona-energia-dla-branzy-nieruchomisci" },
        { name: "Współpraca agencyjna z Reo.pl", href: "/oferta/współpraca-agencyjna-z-reopl" },
      ]
    },
    {
      title: "Usługi",
      items: [
        { name: "Kompleksowa obsługa magazynów energii", href: "/uslugi/kompleksowa-obsluga-magazynow-energii" },
        { name: "Bilansowanie energii", href: "/uslugi/bilansowanie-energii" },
        { name: "Zmiana sprzedawcy", href: "/uslugi/zmiana-sprzedawcy" },
      ]
    },
    {
      title: "O nas",
      items: [
        { name: "Reo.pl", href: "/o-nas/rynek-energii-odnawialnej" },
        { name: "Cele i Wartości", href: "/o-nas/cele-i-wartosci" },
        { name: "Platforma Reo.pl", href: "/o-nas/platforma-reo-pl" },
        { name: "FAQ", href: "/o-nas/najczesciej-zadawane-pytania" },
        { name: "Kariera", href: "/o-nas/kariera" },
        { name: "Zarząd Spółki", href: "/o-nas/zarzad-spolki" },
      ]
    },
    {
      title: "Informacje",
      items: [
        { name: "Centrum Informacji", href: "/informacje" },
        { name: "Case Studies", href: "/informacje/case-studies" },
        { name: "Zielona encyklopedia", href: "/informacje/zielona-encyklopedia" },
        { name: "Green news", href: "/informacje/green-news" },
        { name: "Biznes i prawo", href: "/informacje/biznes-i-prawo" },
        { name: "Ekoporady", href: "/informacje/ekoporady" },
        { name: "Media o nas", href: "/informacje/media-o-nas" },
        { name: "Podcasty", href: "/informacje/podcasty" },
      ]
    },
    {
      title: "ESG",
      items: [
        { name: "Zrównoważony rozwój", href: "/esg/zrownowazony-rozwoj" },
        { name: "Matryca istotności", href: "/esg/matryca-istotnosci" },
        { name: "Ślad węglowy Reo.pl", href: "/esg/slad-weglowy-reo-pl-sp-z-o-o" },
        { name: "Reo.pl i Envirly - partnerstwo", href: "/esg/reopl-i-envirly-partnerstwo" },
        { name: "Strategia ESG Reo.pl", href: "/esg/strategia-esg-reopl-na-lata-2025-2027" },
      ]
    },
    {
      title: "Pozostałe",
      items: [
        { name: "Dla wytwórców", href: "/dla-wytworcow" },
        { name: "Kontakt", href: "/kontakt" },
        { name: "Dokumenty do pobrania", href: "/dokumenty/dokumenty-do-pobrania" },
        { name: "Polityka prywatności", href: "/dokumenty/polityka-prywatnosci" },
        { name: "Regulamin platformy", href: "/dokumenty/regulamin-platformy-reo" },
        { name: "Mapa witryny", href: "/rynek-energii-odnawialnej/mapa-witryny" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <section className="bg-slate-900 relative w-full pt-[120px] pb-16 flex flex-col justify-end overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Mapa <span className="text-brand-green">witryny</span>
          </h1>
          <p className="text-slate-400 font-medium">Struktura całokształtu serwisu informacyjnego Reo.pl</p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {mapData.map((col, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 h-full">
                 <h2 className="text-xl font-bold text-[#1e1a3b] mb-6 pb-4 border-b border-slate-100">{col.title}</h2>
                 <ul className="flex flex-col gap-3">
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                         <Link href={item.href} className="text-slate-600 hover:text-brand-green transition-colors font-medium text-sm flex items-center gap-2 group">
                             <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-brand-green transition-colors" /> {item.name}
                         </Link>
                      </li>
                    ))}
                 </ul>
              </div>
            ))}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
