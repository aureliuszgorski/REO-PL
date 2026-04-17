"use client";

import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { Loader2, Mail, CheckCircle2, ChevronRight, BrainCircuit, ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export default function Calculator() {
  const [usage, setUsage] = useState(500); // MWh
  const [price, setPrice] = useState(600); // PLN/MWh
  const [offerType, setOfferType] = useState<"stala" | "elastyczna">("stala");
  const [isCalculating, setIsCalculating] = useState(false);
  
  // AI Simulation States
  const [showSim, setShowSim] = useState(false);
  const [simStep, setSimStep] = useState(0); 
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const startSimulation = () => {
    setShowSim(true);
    setSimStep(0);
    setSubmitted(false);
    
    // AI Steps Simulation
    setTimeout(() => setSimStep(1), 1500);     // Inicjalizacja modeli wiatrowych
    setTimeout(() => setSimStep(2), 3500);     // Zestawianie z generacją solarną
    setTimeout(() => setSimStep(3), 5500);     // Korelacja indeksów giełdowych
    setTimeout(() => setSimStep(4), 7000);     // Formularz
  };

  const submitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
       setSubmitted(true);
       setTimeout(() => {
          setShowSim(false);
          setSimStep(0);
       }, 3000);
    }
  };

  // Calculation logic imitating reo.pl calculator
  const savings = useMemo(() => {
    // Both variables are per-month values based on sliders.
    const monthlyMWh = usage;
    const unitPrice = price; // PLN / MWh
    
    const yearlyCost = monthlyMWh * unitPrice * 12;
    
    // Stała gives around 15.5% savings, Elastyczna gives 25% (as reverse-engineered from screenshots)
    const savingsPercentage = offerType === "stala" ? 0.15476 : 0.25;
    
    return Math.floor(yearlyCost * savingsPercentage / 1000) * 1000;
  }, [usage, price, offerType]);

  // Rough estimation of carbon offset (e.g., ~0.708 tonnes per MWh)
  const carbonOffset = useMemo(() => {
    return Math.floor(usage * 0.708);
  }, [usage]);

  // Update calculations over time to simulate a spinning counter
  const [displayedSavings, setDisplayedSavings] = useState(0);

  useEffect(() => {
    setIsCalculating(true);
    const targetSavings = savings;
    
    // Simulate loading for 1.5s then animate
    const timeout = setTimeout(() => {
       setIsCalculating(false);
       
       // Simple animation logic
       const start = displayedSavings;
       const duration = 800; // ms
       const startTime = performance.now();
       
       const animateCount = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setDisplayedSavings(start + (targetSavings - start) * ease);
          
          if (progress < 1) {
             requestAnimationFrame(animateCount);
          }
       };
       requestAnimationFrame(animateCount);
    }, 800);
    
    return () => clearTimeout(timeout);
  }, [savings]);

  return (
    <section className="py-24 px-6 md:px-[5%] max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden"
      >
        <div className="p-10 md:p-14 border-b border-slate-100 bg-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#201B55] mb-8">
             Sprawdź ile możesz zaoszczędzić
          </h2>
          
          <div className="inline-flex bg-white border border-[#201B55] rounded-full overflow-hidden p-0.5 relative z-10 shadow-sm">
             <button 
               className={`px-8 py-2.5 rounded-full font-bold transition-all text-sm ${offerType === "stala" ? "bg-[#201B55] text-white" : "bg-white text-[#201B55] hover:bg-slate-50"}`}
               onClick={() => setOfferType("stala")}
             >
               Stała
             </button>
             <button 
               className={`px-8 py-2.5 rounded-full font-bold transition-all text-sm ${offerType === "elastyczna" ? "bg-[#201B55] text-white" : "bg-white text-[#201B55] hover:bg-slate-50"}`}
               onClick={() => setOfferType("elastyczna")}
             >
               Elastyczna
             </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          
          {/* Controls */}
          <div className="flex-1 p-10 md:p-14 md:pr-20 flex flex-col justify-center gap-10 bg-white">
            <div>
              <div className="text-[#201B55] font-extrabold mb-6">
                Zapotrzebowanie średnie miesięczne
              </div>
              <div className="relative h-2 bg-slate-200 rounded-full mb-4">
                 <div className="absolute top-0 left-0 h-full bg-[#A9E8CB] rounded-full" style={{ width: `${(usage - 1) / (1000 - 1) * 100}%` }}></div>
                 <div className="absolute top-1/2 -ml-3 -mt-3 w-6 h-6 bg-white rounded-full shadow-md border-[3px] border-slate-200 pointer-events-none" style={{ left: `${(usage - 1) / (1000 - 1) * 100}%` }}></div>
              </div>
              <div className="text-sm font-extrabold text-[#201B55]">{usage.toLocaleString('pl-PL')} MWh</div>
            </div>
            
            <div className="mb-4">
              <div className="text-[#201B55] font-extrabold mb-6">
                Moje miesięczne wydatki za energię (Cena jednostkowa)
              </div>
              <div className="relative h-2 bg-slate-200 rounded-full mb-4">
                 <div className="absolute top-0 left-0 h-full bg-[#A9E8CB] rounded-full" style={{ width: `${(price - 300) / (2000 - 300) * 100}%` }}></div>
                 <input 
                   type="range" 
                   min="300" max="2000" step="10" 
                   value={price} 
                   onChange={(e) => setPrice(Number(e.target.value))}
                   className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
                 />
                 <div className="absolute top-1/2 -ml-3 -mt-3 w-6 h-6 bg-white rounded-full shadow-md border-[3px] border-slate-200 pointer-events-none" style={{ left: `${(price - 300) / (2000 - 300) * 100}%` }}></div>
              </div>
              <div className="text-sm font-extrabold text-[#201B55]">{price.toLocaleString('pl-PL')} zł/MWh</div>
            </div>

            <div className="p-8 bg-slate-50/80 rounded-2xl text-[13px] text-slate-500 leading-relaxed font-medium">
              Wartości orientacyjne – odzwierciedlają optymalizacje z kontraktów PPA względem hurtowego indeksu cBase.
            </div>
          </div>

          {/* Results Block */}
          <div className="w-full lg:w-[480px] bg-[#3B3961] p-10 md:p-14 pb-32 flex flex-col justify-between relative text-white rounded-[2.5rem] lg:rounded-[3rem] shadow-xl m-6 lg:m-8 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-8 w-full block">
              <div className="flex justify-between items-center border-b border-white/10 pb-6">
                <span className="text-white/80 font-medium">Długość umowy</span>
                <div className="flex items-center gap-2 font-bold text-white">
                   3 lata
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-b border-white/10 pb-6 min-h-[50px]">
                <span className="text-white/80 font-medium">Rodzaj źródła energii</span>
                <div className="flex items-center gap-6 font-bold text-white">
                   {isCalculating ? (
                      <div className="flex items-center gap-2 font-bold text-white">
                         Czekaj...
                         <Loader2 className="w-5 h-5 text-white animate-spin ml-2" />
                      </div>
                   ) : (
                      <>
                        <div className="flex items-center gap-2 text-white/90">65% <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 21V10M12 10L16 6C16 6 17.5 7.5 16.5 9.5C15.5 11.5 12 10 12 10ZM12 10L8 6C8 6 6.5 7.5 7.5 9.5C8.5 11.5 12 10 12 10ZM9 21H15" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                        <div className="flex items-center gap-2 text-white/90">35% <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="6" width="18" height="12" rx="2" ry="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="9" y1="6" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="18"/></svg></div>
                      </>
                   )}
                </div>
              </div>
            </div>

            <div className="relative z-10 -mt-10 lg:-mt-4 mb-32 md:mb-24 pr-12">
              <div className="text-white font-medium text-xl w-48 mb-6 leading-tight relative">
                 Szacowane roczne oszczędności
                 
                 {/* CSS Arrow pointing to amount */}
                 <div className="absolute right-[-120px] top-[10px] transform">
                 <svg width="112" height="92" viewBox="0 0 112 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                    <path d="M72.2356 12.3392C78.4318 8.04949 89.2882 -3.42436 97.4339 6.22055C104.912 15.0739 101.442 28.5303 94.6738 35.5393C86.7265 43.7699 71.3653 47.9304 63.832 38.3582C56.666 29.2536 67.2413 13.9169 77.0163 12.3392C92.2033 9.88725 106.638 18.0673 110.155 31.8159C114.739 49.7394 99.8856 68.32 80.6053 73.1812C63.266 77.5532 44.821 72.8273 28.3298 65.5901C20.6552 62.2217 6.46743 55.4334 2.20786 64.9102" stroke="#5C85FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.9231 53.6427L2.20786 64.9102M2.20786 64.9102L15.3402 70.9333" stroke="#5C85FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>

                 </div>
              </div>
              <div className="text-5xl md:text-6xl font-black text-[#A9E8CB] tracking-tighter tabular-nums mt-2">
                {Math.floor(displayedSavings).toLocaleString('pl-PL')} <span className="text-3xl ml-1">zł</span>
              </div>
            </div>

            {/* Bottom-right cutout with button */}
            <div className="absolute -bottom-2 -right-2 w-72 h-36 bg-white rounded-tl-[3.5rem] z-20 flex items-center justify-center border-t-[8px] border-l-[8px] border-white">
               <button 
                 onClick={startSimulation}
                 className="bg-[#A9E8CB] text-[#201B55] hover:bg-[#8CDCB8] font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 group absolute top-6 left-6 shadow-md hover:shadow-xl"
               >
                 Szczegóły oferty
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
            
          </div>

        </div>
      </motion.div>

      {/* AI Simulation Modal */}
      <AnimatePresence>
        {showSim && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#120F36]/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl relative"
            >
               {/* Modal Header */}
               <div className="bg-[#120F36] p-8 text-center relative overflow-hidden min-h-[160px] flex flex-col justify-center">
                  
                  {/* Chaotic Moving Cloud Background */}
                  <div className="absolute inset-0 z-0 opacity-60">
                     <motion.div 
                       animate={{ 
                         x: [0, -50, 20, -30, 0], 
                         y: [0, 30, -20, 50, 0],
                         scale: [1, 1.5, 1.2, 1.8, 1],
                         rotate: [0, 45, -45, 90, 0]
                       }}
                       transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                       className="absolute -top-10 -left-10 w-48 h-48 bg-[#A9E8CB] rounded-full mix-blend-screen blur-[50px] opacity-40"
                     />
                     <motion.div 
                       animate={{ 
                         x: [0, 60, -40, 20, 0], 
                         y: [0, -40, 60, -20, 0],
                         scale: [1, 1.8, 1.1, 1.5, 1],
                         rotate: [0, -60, 40, -20, 0]
                       }}
                       transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                       className="absolute bottom-0 right-0 w-56 h-56 bg-[#1D71B8] rounded-[40%] mix-blend-screen blur-[60px] opacity-50"
                     />
                     <motion.div 
                       animate={{ 
                         x: [0, -30, 50, -10, 0], 
                         y: [0, 50, -30, 40, 0],
                         scale: [1, 1.2, 1.7, 1.1, 1]
                       }}
                       transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                       className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#38bdf8] rounded-full mix-blend-screen blur-[45px] opacity-30"
                     />
                     <div className="absolute inset-0 bg-[#120F36]/30 backdrop-blur-[2px]"></div>
                  </div>

                  <BrainCircuit className={`w-14 h-14 text-white mx-auto relative z-10 mb-3 drop-shadow-[0_0_15px_rgba(169,232,203,0.8)] ${simStep < 4 ? 'animate-pulse' : ''}`} />
                  <h3 className="text-2xl font-black text-white relative z-10 tracking-tight drop-shadow-md">AI Reo.pl</h3>
               </div>

               <div className="p-8">
                  {simStep < 4 ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-slate-700">
                        {simStep >= 0 ? (simStep > 0 ? <CheckCircle2 className="w-5 h-5 text-brand-green" /> : <Loader2 className="w-5 h-5 text-brand-blue animate-spin" />) : <div className="w-5" />}
                        <span className={simStep >= 0 ? "font-bold" : "text-slate-400"}>Tworzenie profilu optymalizacji OZE...</span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-700">
                        {simStep >= 1 ? (simStep > 1 ? <CheckCircle2 className="w-5 h-5 text-brand-green" /> : <Loader2 className="w-5 h-5 text-brand-blue animate-spin" />) : <div className="w-5 h-5 rounded-full border-2 border-slate-200" />}
                        <span className={simStep >= 1 ? "font-bold" : "text-slate-400"}>Dopasowywanie krzywej 65% wiatr / 35% słońce...</span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-700">
                        {simStep >= 2 ? (simStep > 2 ? <CheckCircle2 className="w-5 h-5 text-brand-green" /> : <Loader2 className="w-5 h-5 text-brand-blue animate-spin" />) : <div className="w-5 h-5 rounded-full border-2 border-slate-200" />}
                        <span className={simStep >= 2 ? "font-bold text-brand-green" : "text-slate-400"}>Skanowanie zapytań z 59 farm...</span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-700">
                        {simStep >= 3 ? (simStep > 3 ? <CheckCircle2 className="w-5 h-5 text-brand-green" /> : <Loader2 className="w-5 h-5 text-brand-blue animate-spin" />) : <div className="w-5 h-5 rounded-full border-2 border-slate-200" />}
                        <span className={simStep >= 3 ? "font-bold" : "text-slate-400"}>Obliczanie ostatecznych oszczędności...</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-8">
                         <motion.div 
                           className="h-full bg-gradient-to-r from-brand-blue to-brand-green"
                           initial={{ width: "5%" }}
                           animate={{ width: `${(simStep / 3) * 100}%` }}
                           transition={{ duration: 0.5 }}
                         />
                      </div>
                    </div>
                  ) : submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                       <div className="w-20 h-20 bg-[#EAF9F4] rounded-full flex items-center justify-center mx-auto mb-6">
                         <CheckCircle2 className="w-10 h-10 text-brand-green" />
                       </div>
                       <h4 className="text-2xl font-black text-[#201B55] mb-2">Oferta wysłana!</h4>
                       <p className="text-slate-500 font-medium">Sprawdź swoją skrzynkę, nasza sztuczna inteligencja przygotowała spersonalizowany raport.</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                       <h4 className="text-2xl font-black text-[#201B55] mb-2">Symulacja zakończona</h4>
                       <p className="text-slate-500 mb-6 leading-relaxed">
                          Nasz algorytm zidentyfikował dodatkowe <strong className="text-brand-green">14.8%</strong> optymalizacji kosztów względem standardowych taryf. Podaj adres e-mail, by otrzymać pełną ofertę w PDF.
                       </p>
                       <form onSubmit={submitEmail} className="mt-4">
                          <div className="relative mb-4">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                               <Mail className="w-5 h-5 text-slate-400" />
                            </div>
                            <input 
                              type="email" 
                              required
                              placeholder="Twój adres np. jan@firma.pl"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:bg-white transition-all text-slate-700 font-medium"
                            />
                          </div>
                          <button 
                            type="submit"
                            className="w-full bg-[#201B55] hover:bg-[#201B55]/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 group transition-all"
                          >
                            Wyślij Ofertę <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                       </form>
                       <button 
                         onClick={() => setShowSim(false)}
                         className="w-full mt-4 text-slate-400 hover:text-slate-600 text-sm font-semibold transition-colors"
                       >
                         Wróć do kalkulatora
                       </button>
                    </motion.div>
                  )}
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
