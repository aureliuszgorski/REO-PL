"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CreateOfferModal from "@/components/modals/CreateOfferModal";
import { Calendar, Edit2, Lock, Wind, Sun, Zap } from "lucide-react";

const initialOffers = [
  { id: 146, dateStr: "2025-01-01 - 2026-01-01", vol: "2 800.00 MWh", source: "wiatr", price: 445 },
  { id: 148, dateStr: "2025-01-01 - 2026-01-01", vol: "2 400.00 MWh", source: "wiatr", price: 470 },
  { id: 153, dateStr: "2025-01-01 - 2026-01-01", vol: "2 000.00 MWh", source: "słońce", price: 450 },
];

export default function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("sprzedazy");
  const [offers, setOffers] = useState(initialOffers);

  return (
    <div className="min-h-screen bg-[#120F36] text-white selection:bg-[#A9E8CB] selection:text-[#201B55]">
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-[5%] max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
          Moje konto
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center bg-[#201B55]/50 border border-white/10 rounded-full p-1 shadow-sm backdrop-blur-md">
            <button 
              onClick={() => setActiveTab("sprzedazy")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === 'sprzedazy' ? 'bg-[#A9E8CB] text-[#201B55]' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
            >
              Moje oferty sprzedaży
            </button>
            <button 
              onClick={() => setActiveTab("zakupu")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === 'zakupu' ? 'bg-[#A9E8CB] text-[#201B55]' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
            >
              Moje oferty zakupu
            </button>
            <button 
              onClick={() => setActiveTab("rezerwacje")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === 'rezerwacje' ? 'bg-[#A9E8CB] text-[#201B55]' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
            >
              Moje rezerwacje
            </button>
            <button 
              onClick={() => setActiveTab("archiwalne")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === 'archiwalne' ? 'bg-[#A9E8CB] text-[#201B55]' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
            >
              Oferty archiwalne
            </button>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-[#1D71B8] hover:bg-[#2080cf] text-white px-6 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl shadow-[#1D71B8]/20"
          >
            Wystaw ofertę +
          </button>
        </div>

        {/* Table Headers */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 mb-4 text-slate-400 font-semibold text-sm uppercase tracking-wider">
          <div className="col-span-3">Okres kontraktu</div>
          <div className="col-span-3 text-center">Wolumen</div>
          <div className="col-span-3 text-center">Pochodzenie energii</div>
          <div className="col-span-2 text-right">Cena</div>
          <div className="col-span-1 text-right">Akcja</div>
        </div>

        {/* Offers List */}
        <div className="space-y-4">
          {offers.map((offer) => (
            <div key={offer.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#201B55]/40 border border-white/5 rounded-[2rem] px-8 py-6 shadow-sm hover:shadow-md hover:bg-[#201B55]/60 hover:border-white/10 transition-all font-medium">
              
              {/* Okres */}
              <div className="col-span-3 flex flex-col gap-1">
                <span className="font-bold text-white">Numer: {offer.id}</span>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                  <Calendar className="w-4 h-4" /> {offer.dateStr}
                </div>
              </div>

              {/* Wolumen */}
              <div className="col-span-3 flex items-center justify-center gap-2 text-[#A9E8CB] font-bold text-lg">
                <Zap className="w-5 h-5 text-[#A9E8CB]/70" /> {offer.vol}
              </div>

              {/* Pochodzenie */}
              <div className="col-span-3 flex items-center justify-center gap-2 text-white font-bold">
                {offer.source.toLowerCase() === 'wiatr' ? <Wind className="w-5 h-5 text-slate-400" /> : <Sun className="w-5 h-5 text-slate-400" />} 
                {offer.source}
              </div>

              {/* Cena */}
              <div className="col-span-2 text-right text-white font-extrabold text-2xl tracking-tight">
                {offer.price} <span className="font-semibold text-sm text-slate-400 font-sans tracking-normal">zł /MWh</span>
              </div>

              {/* Akcje */}
              <div className="col-span-1 flex items-center justify-end gap-2">
                <button className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-[#1D71B8] transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-amber-500 transition-colors">
                  <Lock className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
          {offers.length === 0 && (
            <div className="text-center text-slate-400 italic py-10 bg-[#201B55]/20 rounded-3xl border border-white/5">
              Brak wystawionych ofert odpowiadających kryteriom.
            </div>
          )}
        </div>

      </main>

      <CreateOfferModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onSubmit={(newOfferData) => {
          setOffers([{
            id: 200 + offers.length,
            dateStr: newOfferData?.dateStr || "2025-06-01 - 2026-06-01",
            vol: `${newOfferData?.vol || "50"} MWh`,
            source: newOfferData?.source || "słońce",
            price: newOfferData?.price || 420
          }, ...offers]);
          setModalOpen(false);
        }}
      />
    </div>
  );
}
