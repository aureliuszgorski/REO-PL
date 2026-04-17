"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";

export default function Calculator() {
  const [usage, setUsage] = useState(500); // MWh
  const [price, setPrice] = useState(600); // PLN/MWh

  // Mock calculation logic for demonstration
  // Assuming PPA price is significantly lower (e.g., 400 PLN/MWh flat)
  const ppaPrice = 400;
  const savings = useMemo(() => {
    const defaultCost = usage * price;
    const ppaCost = usage * ppaPrice;
    return Math.max(0, defaultCost - ppaCost);
  }, [usage, price]);

  // Rough estimation of carbon offset (e.g., ~0.708 tonnes per MWh)
  const carbonOffset = useMemo(() => {
    return Math.floor(usage * 0.708);
  }, [usage]);

  return (
    <section className="py-24 px-6 md:px-[5%] max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden"
      >
        <div className="p-10 md:p-14 border-b border-slate-100 bg-slate-50">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Kalkulator Potencjału Zakupowego
          </h2>
          <p className="text-slate-500 text-lg">
            Sprawdź szacunkowe możliwości optymalizacji przy umowie (3 lata) na <strong className="text-brand-green font-bold">65% Wiatr i 35% Słońce.</strong>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          
          {/* Controls */}
          <div className="flex-1 p-10 md:p-14 border-r border-slate-100 flex flex-col justify-center gap-10">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-slate-700 font-bold">Roczne zapotrzebowanie odbioru</label>
                <div className="text-2xl font-extrabold text-brand-green">{usage.toLocaleString('pl-PL')} <span className="text-base text-slate-500">MWh</span></div>
              </div>
              <input 
                type="range" 
                min="50" max="5000" step="50" 
                value={usage} 
                onChange={(e) => setUsage(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-slate-700 font-bold">Obecne wydatki giełdowe na TGE</label>
                <div className="text-2xl font-extrabold text-brand-green">{price.toLocaleString('pl-PL')} <span className="text-base text-slate-500">PLN/MWh</span></div>
              </div>
              <input 
                type="range" 
                min="300" max="1500" step="10" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
              />
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-sm text-slate-500 leading-relaxed italic">
              Wartości orientacyjne – odzwierciedlają optymalizacje z kontraktów PPA względem hurtowego indeksu cBase.
            </div>
          </div>

          {/* Results */}
          <div className="w-full lg:w-[400px] bg-[#201B55] p-10 md:p-14 flex flex-col justify-center gap-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A9E8CB]/10 rounded-full blur-3xl group-hover:bg-[#A9E8CB]/20 transition-colors duration-500"></div>

            <div className="relative z-10">
              <div className="text-slate-400 font-medium mb-2">Potencjalne roczne oszczędności</div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#A9E8CB] tracking-tight">
                {savings.toLocaleString('pl-PL')} <span className="text-xl">PLN</span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-slate-400 font-medium mb-2">Redukcja śladu węglowego (CO₂)</div>
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {carbonOffset.toLocaleString('pl-PL')} <span className="text-xl">Ton</span>
              </div>
            </div>

            <button className="relative z-10 w-full mt-4 bg-gradient-to-r from-[#A9E8CB] to-[#60A5FA] hover:opacity-90 text-[#201B55] font-extrabold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(169,232,203,0.3)] hover:shadow-[0_0_30px_rgba(169,232,203,0.6)] active:scale-95">
              Odbierz dokładną ofertę
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
