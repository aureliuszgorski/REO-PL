"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CreateOfferModal from "@/components/modals/CreateOfferModal";
import ReserveOfferModal from "@/components/modals/ReserveOfferModal";
import { Calendar, Wind, Sun, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const mockOffers = [
  { id: 146, type: "Oferta sprzedaży", dateStr: "2025-01-01 - 2026-01-01", vol: "2 800.00", source: "wiatr", price: "465.00" },
  { id: 148, type: "Oferta sprzedaży", dateStr: "2025-01-01 - 2026-01-01", vol: "2 400.00", source: "wiatr", price: "490.00" },
  { id: 153, type: "Oferta sprzedaży", dateStr: "2025-01-01 - 2026-01-01", vol: "2 000.00", source: "słońce", price: "470.00" },
];

export default function OfertyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState<number | null>(null);
  const [selectedOfferPrice, setSelectedOfferPrice] = useState<string>("0");
  const [tradeType, setTradeType] = useState("kupic"); // 'sprzedac' or 'kupic'

  const handleReserveClick = (id: number, price: string) => {
    setSelectedOfferId(id);
    setSelectedOfferPrice(price);
    setReserveModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-[5%] max-w-5xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
          <Link href="/" className="hover:text-brand-green">Reo.pl</Link>
          <span>›</span>
          <Link href="#" className="hover:text-brand-green">Oferta</Link>
          <span>›</span>
          <span className="text-slate-500">Tabela ofert</span>
        </div>

        {/* Headings */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#383665] mb-6">Tabela ofert</h1>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Czy jesteś odbiorcą zielonej energii?</h2>
          <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto">
            Chcesz dokonać zakupu zielonej energii elektrycznej? Na Reo.pl znajdziesz szeroki wybór atrakcyjnych ofert od sprawdzonych wytwórców OZE. Zapewniamy przejrzystość kontraktu, konkurencyjne ceny oraz energię elektryczną zgodną z wymogami regulacyjnymi <Link href="#" className="underline text-[#383665]">ESG</Link>. Wystarczy, że zalogujesz się na konto użytkownika, 
            gdzie będziesz mógł zarezerwować interesującą Cię ofertę. Eksperci Reo.pl przeprowadzą Cię przez cały proces zakupu oraz <Link href="#" className="underline text-[#383665]">zmiany sprzedawcy</Link>. Dołącz do nas i zrób krok w stronę zrównoważonej przyszłości!
          </p>
        </div>

        {/* Actions Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 mt-16">
          
          {/* Toggle */}
          <div className="flex items-center rounded-full border border-[#383665] p-1 bg-white">
            <button 
              onClick={() => setTradeType("sprzedac")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${tradeType === 'sprzedac' ? 'bg-[#383665] text-white' : 'text-[#383665] hover:bg-slate-50'}`}
            >
              Chcę sprzedać
            </button>
            <button 
              onClick={() => setTradeType("kupic")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${tradeType === 'kupic' ? 'bg-[#383665] text-white' : 'text-[#383665] hover:bg-slate-50'}`}
            >
              Chcę kupić
            </button>
          </div>

          <button 
            onClick={() => setModalOpen(true)}
            className="bg-[#A7E8C8] hover:bg-[#8cdcb3] text-[#383665] px-6 py-3 rounded-full font-bold transition-colors inline-flex items-center gap-2"
          >
            Wystaw ofertę +
          </button>
        </div>

        <p className="text-sm font-bold text-slate-900 mb-8">
          Poniżej znajdują się oferty wystawione przez wytwórców zielonej energii, które możesz zarezerwować
        </p>

        {/* Table Headers */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 mb-4 text-slate-400 font-semibold text-sm">
          <div className="col-span-4">Okres kontraktu</div>
          <div className="col-span-3 text-center">Wolumen</div>
          <div className="col-span-3 text-center">Pochodzenie energii</div>
          <div className="col-span-2 text-right">Cena</div>
        </div>

        {/* Offers List */}
        <div className="space-y-6">
          {mockOffers.map((offer) => (
            <div key={offer.id} className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white border border-emerald-200 rounded-[2rem] px-8 py-6 shadow-sm hover:shadow-md transition-shadow">
              
              {/* Arrow Icon embedded on the top right edge */}
              <button 
                onClick={() => handleReserveClick(offer.id, offer.price)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-[#A7E8C8] rounded-full flex items-center justify-center text-[#383665] hover:bg-[#8cdcb3] transition-colors shadow-sm"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>

              {/* Okres & Title */}
              <div className="col-span-4 flex flex-col gap-1">
                <span className="font-extrabold text-slate-900">{tradeType === 'kupic' ? 'Oferta kupna' : 'Oferta sprzedaży'}</span>
                <span className="text-slate-500 text-sm mb-2">{tradeType === 'kupic' ? 'Kupujący' : 'Sprzedawca'}: {offer.id}</span>
                <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
                  <Calendar className="w-4 h-4 text-slate-400" /> {offer.dateStr}
                </div>
              </div>

              {/* Wolumen */}
              <div className="col-span-3 flex items-center justify-center gap-2 text-slate-900 font-bold">
                <Zap className="w-4 h-4 text-slate-400" /> {offer.vol} MWh
              </div>

              {/* Pochodzenie */}
              <div className="col-span-3 flex items-center justify-center gap-2 text-slate-900 font-bold">
                {offer.source === 'wiatr' ? <Wind className="w-5 h-5 text-slate-400" /> : <Sun className="w-5 h-5 text-slate-400" />} 
                {offer.source}
              </div>

              {/* Cena */}
              <div className="col-span-2 text-right text-[#383665] font-extrabold text-2xl">
                {offer.price} <span className="font-semibold text-sm text-slate-500">zł /MWh</span>
              </div>

            </div>
          ))}
        </div>

      </main>

      <CreateOfferModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ReserveOfferModal 
        isOpen={reserveModalOpen} 
        onClose={() => setReserveModalOpen(false)} 
        offerId={selectedOfferId}
        priceAmount={selectedOfferPrice}
      />
    </div>
  );
}
