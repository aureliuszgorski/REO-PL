"use client";

import { useState } from "react";
import { X, Check, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface OfferFormData {
  dateStr?: string;
  vol?: string;
  source?: string;
  price?: number;
}

interface CreateOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data?: OfferFormData) => void;
}

export default function CreateOfferModal({ isOpen, onClose, onSubmit }: CreateOfferModalProps) {
  const [role, setRole] = useState("kupujacy");
  const [agreed, setAgreed] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

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
            className="relative w-full max-w-4xl bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(32,27,85,0.4)] overflow-y-auto max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-3xl font-extrabold text-[#201B55] text-center mb-8">Dodaj ofertę</h2>

            <div className="relative">


              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative">
                
                {/* LEWA KOLUMNA */}
                <div className="flex flex-col gap-6">
                  {/* Jestem toggle (Segmented Control) */}
                  <div className="flex flex-col gap-2 relative">
                    <label className="flex items-center gap-2 text-slate-700 font-bold text-sm ml-1">
                      Kto wystawia ofertę?
                      <div className="relative flex items-center">
                        <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'role' ? null : 'role')} className={`focus:outline-none transition-colors ${activeTooltip === 'role' ? 'text-[#1D71B8]' : 'text-slate-400 hover:text-[#1D71B8]'}`}>
                          <GraduationCap className="w-[18px] h-[18px]" />
                        </button>
                        <AnimatePresence>
                          {activeTooltip === 'role' && (
                            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[260px] bg-[#A9E8CB] text-[#201B55] text-[13px] font-medium leading-relaxed p-4 rounded-xl shadow-xl z-50 pointer-events-auto">
                              <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 border-x-8 border-x-transparent border-b-8 border-b-[#A9E8CB]"></div>
                              <p>Najpierw określ, czy szukasz zielonej energii, czy chcesz ją zaoferować.</p>
                              <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#201B55]/10">
                                <span className="text-[11px] font-bold opacity-60">Krok 1/4</span>
                                <button type="button" onClick={() => setActiveTooltip('volume')} className="bg-[#201B55] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold hover:bg-[#15113d] transition-colors focus:outline-none">Dalej ➔</button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </label>
                    <div className="flex items-center rounded-xl bg-slate-100 p-1.5 w-full relative z-10">
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
                    <label className="flex items-center gap-2 text-slate-700 font-bold text-sm ml-1">
                      {role === 'kupujacy' ? 'Zapotrzebowanie na energię' : 'Wolumen oferowanej energii'} <span className="text-red-500 font-black">*</span>
                      <div className="relative flex items-center">
                        <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'volume' ? null : 'volume')} className={`focus:outline-none transition-colors ${activeTooltip === 'volume' ? 'text-[#1D71B8]' : 'text-slate-400 hover:text-[#1D71B8]'}`}>
                          <GraduationCap className="w-[18px] h-[18px]" />
                        </button>
                        <AnimatePresence>
                          {activeTooltip === 'volume' && (
                            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[260px] bg-[#A9E8CB] text-[#201B55] text-[13px] font-medium leading-relaxed p-4 rounded-xl shadow-xl z-50 pointer-events-auto">
                              <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 border-x-8 border-x-transparent border-b-8 border-b-[#A9E8CB]"></div>
                              <p>Podaj szacunkową ilość energii w megawatogodzinach (MWh).</p>
                              <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#201B55]/10">
                                <span className="text-[11px] font-bold opacity-60">Krok 2/4</span>
                                <button type="button" onClick={() => setActiveTooltip('source')} className="bg-[#201B55] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold hover:bg-[#15113d] transition-colors focus:outline-none">Dalej ➔</button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="np. 500 MWh"
                        className="w-full h-14 px-5 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#A9E8CB] focus:ring-4 focus:ring-[#A9E8CB]/20 transition-all font-semibold"
                      />
                    </div>
                  </div>

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

                {/* PRAWA KOLUMNA */}
                <div className="flex flex-col gap-6 justify-between">
                  
                  <div className="flex flex-col gap-6">
                    {/* Źródło energii */}
                    <div className="flex flex-col gap-1.5 relative">
                      <label className="flex items-center gap-2 text-slate-700 font-bold text-sm ml-1">
                        Źródło energii <span className="text-red-500 font-black">*</span>
                        <div className="relative flex items-center">
                          <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'source' ? null : 'source')} className={`focus:outline-none transition-colors ${activeTooltip === 'source' ? 'text-[#1D71B8]' : 'text-slate-400 hover:text-[#1D71B8]'}`}>
                            <GraduationCap className="w-[18px] h-[18px]" />
                          </button>
                          <AnimatePresence>
                            {activeTooltip === 'source' && (
                              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[260px] bg-[#A9E8CB] text-[#201B55] text-[13px] font-medium leading-relaxed p-4 rounded-xl shadow-xl z-50 pointer-events-auto">
                                <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 border-x-8 border-x-transparent border-b-8 border-b-[#A9E8CB]"></div>
                                <p>Wybierz dominującą technologię OZE z której chcesz skorzystać.</p>
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#201B55]/10">
                                  <span className="text-[11px] font-bold opacity-60">Krok 3/4</span>
                                  <button type="button" onClick={() => setActiveTooltip('price')} className="bg-[#201B55] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold hover:bg-[#15113d] transition-colors focus:outline-none">Dalej ➔</button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
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
                      <label className="flex items-center gap-2 text-slate-700 font-bold text-sm ml-1">
                        Cena jednostkowa netto <span className="text-red-500 font-black">*</span>
                        <div className="relative flex items-center">
                          <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'price' ? null : 'price')} className={`focus:outline-none transition-colors ${activeTooltip === 'price' ? 'text-[#1D71B8]' : 'text-slate-400 hover:text-[#1D71B8]'}`}>
                            <GraduationCap className="w-[18px] h-[18px]" />
                          </button>
                          <AnimatePresence>
                            {activeTooltip === 'price' && (
                              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[260px] bg-[#A9E8CB] text-[#201B55] text-[13px] font-medium leading-relaxed p-4 rounded-xl shadow-xl z-50 pointer-events-auto">
                                <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 border-x-8 border-x-transparent border-b-8 border-b-[#A9E8CB]"></div>
                                <p>Proponując własną cenę zwiększasz szanse na zawarcie korzystnej umowy PPA.</p>
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#201B55]/10">
                                  <span className="text-[11px] font-bold opacity-60">Krok 4/4</span>
                                  <button type="button" onClick={() => setActiveTooltip(null)} className="bg-[#201B55] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold hover:bg-[#15113d] transition-colors focus:outline-none">Zakończ ✔</button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
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
                      <p className="text-[11px] text-slate-500 font-semibold leading-relaxed ml-2 pr-4 mt-1">
                        * Cena po opublikowaniu zostanie powiększona o koszt zakupu i umorzenia świadectw pochodzenia oraz akcyzę.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl relative">
                      <p className="text-[12px] text-slate-600 font-semibold leading-relaxed relative z-10">
                        <span className="text-[#1D71B8] font-bold">Ważne: </span>Wszystkie transakcje zawierane na Platformie Reo.pl obciążane są kosztami zbilansowania kontraktu i marżą, zgodnie z obowiązującą tabelą marż.
                      </p>
                    </div>
                  </div>

                  {/* Zgody i Akcja - na dole kolumny */}
                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex items-start gap-4 px-1">
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

                    <button 
                      type="button" 
                      onClick={() => {
                        if (onSubmit) {
                           onSubmit({});
                        } else {
                           onClose();
                        }
                      }}
                      className={`w-full h-14 bg-gradient-to-r from-[#201B55] to-[#1D71B8] hover:from-[#1a1545] hover:to-[#155a96] text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_10px_20px_-10px_rgba(29,113,184,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(29,113,184,0.6)] focus:outline-none focus:ring-4 focus:ring-[#1D71B8]/30 ${!agreed ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!agreed}
                    >
                      Opublikuj ofertę
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
