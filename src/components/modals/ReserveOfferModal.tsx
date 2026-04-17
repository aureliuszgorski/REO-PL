"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ReserveOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  offerId: number | null;
  priceAmount: string | number;
}

export default function ReserveOfferModal({ isOpen, onClose, offerId, priceAmount }: ReserveOfferModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [volume, setVolume] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Reset state when closing / reopening
  const handleClose = () => {
    setStep(1);
    setVolume("");
    setAgreed(false);
    onClose();
  };

  const handleNext = () => {
    if (volume && agreed) setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl p-8 shadow-2xl"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 1 ? (
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex flex-col gap-2 relative">
                  <label className="text-[#383665] font-bold text-sm">
                    Wolumen <span className="text-orange-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Wpisz wartość"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full h-12 px-4 border border-emerald-200 rounded-full text-slate-800 bg-white focus:outline-none focus:border-brand-neon pr-12"
                  />
                  {volume.length > 0 && (
                    <Check className="w-5 h-5 text-emerald-300 absolute right-4 top-10" />
                  )}
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <button 
                    type="button" 
                    onClick={() => setAgreed(!agreed)}
                    className={`w-5 h-5 rounded flex items-center justify-center transition-colors border ${agreed ? 'bg-[#383665] border-[#383665]' : 'bg-white border-slate-300'}`}
                  >
                    {agreed && <Check className="w-3 h-3 text-white" />}
                  </button>
                  <span className="text-sm font-medium text-[#383665]">
                    Oświadczam, że zapoznałem się z regulaminem Platformy Reo.pl i akceptuję jego postanowienia <span className="text-orange-500">*</span>
                  </span>
                </div>

                <div className="mt-4">
                  <button 
                    type="button" 
                    onClick={handleNext}
                    className="bg-[#383665] hover:bg-[#2b2a4f] text-white font-bold py-3 px-8 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Przejdź do podsumowania
                  </button>
                </div>
                
                <p className="text-sm text-slate-600 mt-2">
                  Możesz zarezerwować cały wolumen wystawionej oferty lub mniejszą ilość w zależności od swojego zapotrzebowania na energię.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6 mt-2">
                <h3 className="text-base font-bold text-slate-900 mb-2">Rezerwujesz ofertę sprzedaży od wytwórcy nr <span className="text-black font-extrabold">{offerId}</span></h3>
                
                <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-slate-500 mb-1">Pochodzenie energii:</p>
                    <p className="font-bold text-slate-900">wiatr</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Okres obowiązywania kontraktu:</p>
                    <p className="font-bold text-slate-900">1 stycznia 2025 - 1 stycznia 2026</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Wolumen (MWh):</p>
                    <p className="font-bold text-slate-900">{volume}</p>
                  </div>
                </div>

                <div className="space-y-1 text-sm">
                  <p><span className="text-slate-600">Cena netto:</span> <span className="font-bold text-slate-900">{priceAmount} zł/MWh</span></p>
                  <p><span className="text-slate-600">Cena netto z uwzględnieniem kosztami zbilansowania i marżą:</span> <span className="font-bold text-slate-900">520.63 zł/MWh</span></p>
                  <p><span className="text-slate-600">Wartość kontraktu:</span> <span className="font-bold text-slate-900">67 681.25 zł</span></p>
                  <p className="text-slate-500 mt-4">Nasz doradca skontaktuje się z Tobą w celu przygotowania umowy.</p>
                </div>

                <div className="mt-6">
                  <button 
                    type="button" 
                    onClick={handleClose}
                    className="bg-[#383665] hover:bg-[#2b2a4f] text-white font-bold py-3 px-8 rounded-full transition-colors"
                  >
                    Potwierdzam rezerwację
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
