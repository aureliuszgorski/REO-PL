"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CreateOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateOfferModal({ isOpen, onClose }: CreateOfferModalProps) {
  const [role, setRole] = useState("kupujacy");
  const [agreed, setAgreed] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-xl bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(32,27,85,0.4)] overflow-y-auto max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-3xl font-extrabold text-[#201B55] text-center mb-8">Dodaj ofertę</h2>

            <form className="flex flex-col gap-6">
              
              {/* Jestem toggle (Segmented Control) */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 font-bold text-sm ml-1">Kto wystawia ofertę?</label>
                <div className="flex items-center rounded-xl bg-slate-100 p-1.5 w-full">
                  <button 
                    type="button"
                    onClick={() => setRole("kupujacy")}
                    className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${role === 'kupujacy' ? 'bg-white text-[#1D71B8] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Jestem kupującym
                  </button>
                  <button 
                    type="button"
                    onClick={() => setRole("sprzedajacy")}
                    className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${role === 'sprzedajacy' ? 'bg-white text-[#1D71B8] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Jestem sprzedającym
                  </button>
                </div>
              </div>

              {/* Wolumen */}
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-700 font-bold text-sm ml-1">
                  {role === 'kupujacy' ? 'Zapotrzebowanie na energię' : 'Wolumen oferowanej energii'} <span className="text-red-500 font-black">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="np. 500 MWh"
                  className="w-full h-14 px-5 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#A9E8CB] focus:ring-4 focus:ring-[#A9E8CB]/20 transition-all font-semibold"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Data poczatku kontraktu */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-700 font-bold text-sm ml-1">
                    Data początku <span className="text-red-500 font-black">*</span>
                  </label>
                  <input 
                    type="date" 
                    className="w-full h-14 px-5 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#A9E8CB] focus:ring-4 focus:ring-[#A9E8CB]/20 transition-all font-semibold"
                  />
                  <p className="text-[11px] text-slate-400 font-semibold ml-2">Min. 60 dni od dziś</p>
                </div>

                {/* Długość kontraktu */}
                <div className="flex flex-col gap-1.5 relative">
                  <label className="text-slate-700 font-bold text-sm ml-1">Długość kontraktu</label>
                  <select className="w-full h-14 px-5 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#A9E8CB] focus:ring-4 focus:ring-[#A9E8CB]/20 transition-all appearance-none cursor-pointer font-semibold">
                    <option value="">wybierz</option>
                    <option>1 rok</option>
                    <option>2 lata</option>
                    <option>3 lata</option>
                  </select>
                  <div className="absolute right-5 top-[38px] pointer-events-none text-slate-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Źródło energii */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-slate-700 font-bold text-sm ml-1">
                  Źródło energii <span className="text-red-500 font-black">*</span>
                </label>
                <select className="w-full h-14 px-5 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#A9E8CB] focus:ring-4 focus:ring-[#A9E8CB]/20 transition-all appearance-none cursor-pointer font-semibold">
                  <option value="">Wybierz technologię</option>
                  <option>Wiatr</option>
                  <option>Słońce</option>
                  <option>Słońce + Wiatr (MIX)</option>
                </select>
                <div className="absolute right-5 top-[38px] pointer-events-none text-slate-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                </div>
              </div>

              {/* Cena jednostkowa */}
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-700 font-bold text-sm ml-1">
                  Cena jednostkowa netto <span className="text-red-500 font-black">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Wpisz proponowaną kwotę"
                    className="w-full h-14 pl-5 pr-20 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#A9E8CB] focus:ring-4 focus:ring-[#A9E8CB]/20 transition-all font-semibold"
                  />
                  <div className="absolute right-5 top-0 bottom-0 flex items-center justify-center text-slate-400 font-bold">
                    PLN
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed ml-2 pr-4">
                  * Cena po opublikowaniu zostanie powiększona o koszt zakupu i umorzenia świadectw pochodzenia oraz akcyzę.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl mt-2">
                <p className="text-[12px] text-slate-600 font-semibold leading-relaxed">
                  <span className="text-[#1D71B8] font-bold">Ważne: </span>Wszystkie transakcje zawierane na Platformie Reo.pl obciążane są kosztami zbilansowania kontraktu i marżą, zgodnie z obowiązującą tabelą marż.
                </p>
              </div>

              <div className="flex items-start gap-4 my-2 px-1">
                <button 
                  type="button" 
                  onClick={() => setAgreed(!agreed)}
                  className={`w-5 h-5 mt-0.5 shrink-0 rounded-md flex items-center justify-center transition-all border-2 ${agreed ? 'bg-[#1D71B8] border-[#1D71B8]' : 'bg-white border-slate-300 hover:border-slate-400'}`}
                >
                  {agreed && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
                </button>
                <span className="text-[13px] font-semibold text-slate-600 cursor-pointer pt-[2px]" onClick={() => setAgreed(!agreed)}>
                  Oświadczam, że zapoznałem/am się z Regulaminem Platformy Reo.pl i akceptuję jego postanowienia.
                </span>
              </div>

              {/* Dodaj Button */}
              <div className="mt-2">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="w-full h-14 bg-gradient-to-r from-[#201B55] to-[#1D71B8] hover:from-[#1a1545] hover:to-[#155a96] text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_10px_20px_-10px_rgba(29,113,184,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(29,113,184,0.6)] focus:outline-none focus:ring-4 focus:ring-[#1D71B8]/30"
                >
                  Opublikuj ofertę
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
