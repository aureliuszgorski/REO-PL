"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CreateOfferModal from "@/components/modals/CreateOfferModal";
import { Calendar, Edit2, Lock, Wind, Sun, Zap } from "lucide-react";

const mockOffers = [
  { id: 146, dateStr: "2025-01-01 - 2026-01-01", vol: "2 800.00 MWh", source: "wiatr", price: 445 },
  { id: 148, dateStr: "2025-01-01 - 2026-01-01", vol: "2 400.00 MWh", source: "wiatr", price: 470 },
  { id: 153, dateStr: "2025-01-01 - 2026-01-01", vol: "2 000.00 MWh", source: "słońce", price: 450 },
];

export default function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("sprzedazy");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-[5%] max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#383665] text-center mb-16">
          Moje konto
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center bg-white border border-[#383665]/20 rounded-full p-1 shadow-sm">
            <button 
              onClick={() => setActiveTab("sprzedazy")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === 'sprzedazy' ? 'bg-[#383665] text-white' : 'text-[#383665] hover:bg-slate-50'}`}
            >
              Moje oferty sprzedaży
            </button>
            <button 
              onClick={() => setActiveTab("zakupu")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === 'zakupu' ? 'bg-[#383665] text-white' : 'text-[#383665] hover:bg-slate-50'}`}
            >
              Moje oferty zakupu
            </button>
            <button 
              onClick={() => setActiveTab("rezerwacje")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === 'rezerwacje' ? 'bg-[#383665] text-white' : 'text-[#383665] hover:bg-slate-50'}`}
            >
              Moje rezerwacje
            </button>
            <button 
              onClick={() => setActiveTab("archiwalne")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === 'archiwalne' ? 'bg-[#383665] text-white' : 'text-[#383665] hover:bg-slate-50'}`}
            >
              Oferty archiwalne
            </button>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-[#A7E8C8] hover:bg-[#8cdcb3] text-[#383665] px-6 py-3 rounded-full font-bold transition-colors inline-flex items-center gap-2"
          >
            Wystaw ofertę +
          </button>
        </div>

        {/* Table Headers */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 mb-4 text-slate-400 font-semibold text-sm">
          <div className="col-span-3">Okres kontraktu</div>
          <div className="col-span-3 text-center">Wolumen</div>
          <div className="col-span-3 text-center">Pochodzenie energii</div>
          <div className="col-span-2 text-right">Cena</div>
          <div className="col-span-1 text-right">Akcja</div>
        </div>

        {/* Offers List */}
        <div className="space-y-4">
          {mockOffers.map((offer) => (
            <div key={offer.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white border border-emerald-200 rounded-full px-8 py-6 shadow-sm hover:shadow-md transition-shadow">
              
              {/* Okres */}
              <div className="col-span-3 flex flex-col gap-1">
                <span className="font-bold text-[#383665]">Numer: {offer.id}</span>
                <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
                  <Calendar className="w-4 h-4" /> {offer.dateStr}
                </div>
              </div>

              {/* Wolumen */}
              <div className="col-span-3 flex items-center justify-center gap-2 text-[#383665] font-bold">
                <Zap className="w-4 h-4 text-slate-400" /> {offer.vol}
              </div>

              {/* Pochodzenie */}
              <div className="col-span-3 flex items-center justify-center gap-2 text-[#383665] font-bold">
                {offer.source === 'wiatr' ? <Wind className="w-5 h-5 text-slate-400" /> : <Sun className="w-5 h-5 text-slate-400" />} 
                {offer.source}
              </div>

              {/* Cena */}
              <div className="col-span-2 text-right text-[#383665] font-extrabold text-2xl">
                {offer.price} <span className="font-semibold text-sm text-slate-500">zł /MWh</span>
              </div>

              {/* Akcje */}
              <div className="col-span-1 flex items-center justify-end gap-2">
                <button className="w-8 h-8 rounded-full bg-[#A7E8C8]/40 text-[#383665] flex items-center justify-center hover:bg-[#A7E8C8] transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center hover:bg-amber-500 transition-colors">
                  <Lock className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </main>

      <CreateOfferModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
