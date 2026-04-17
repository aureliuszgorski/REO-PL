"use client";

import { motion, useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { Zap, CircleDollarSign, CheckCircle2 } from "lucide-react";

/**
 * Komponent do płynnie zmieniających ("drżących") się liczb (efekt opisany przez użytkownika)
 */
function LiveNumber({ target, decimals = 0, flutter = true }: { target: number, decimals?: number, flutter?: boolean }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2500;
    const startTime = performance.now();
    let tickInterval: NodeJS.Timeout;
    
    const animateCount = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (target - start) * ease;
      
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else if (flutter) {
        // Ticking logic na żywo - waha się tylko o kilka procent wokół celu
        tickInterval = setInterval(() => {
           setValue(v => {
             const shift = (Math.random() - 0.5) * (target * 0.02);
             const nextValue = v + shift;
             const maxDeviation = target * 0.03;
             if (Math.abs(nextValue - target) > maxDeviation) {
                return v > target ? v - Math.abs(shift) : v + Math.abs(shift);
             }
             return nextValue;
           });
        }, 1200 + Math.random() * 800); 
      }
    };
    
    requestAnimationFrame(animateCount);
    return () => clearInterval(tickInterval);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals).replace('.', ',')}
    </span>
  );
}

function SavingsCounter() {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startDate = new Date('2025-01-01T00:00:00Z').getTime();
    const ratePerMs = 80000 / (24 * 60 * 60 * 1000);
    
    let currentTarget = (new Date().getTime() - startDate) * ratePerMs;
    setDisplayValue(currentTarget);

    let timeoutId: NodeJS.Timeout;

    const updateIrregularly = () => {
      // Wyliczamy faktyczną poprawną wartość w czasie rzeczywistym
      const realExpected = (new Date().getTime() - startDate) * ratePerMs;
      
      setDisplayValue(prev => {
         // Chcemy większe nierówne skoki (od kilku do kilkunastu PLN), żeby było widoczne
         // Algorytm musi gonić realExpected, ale w losowych transzach.
         const difference = realExpected - prev;
         
         // Jeżeli nagle aplikacja była w tle, nadrabiamy.
         if (difference > 100) return realExpected;
         
         // Zwykły tick: wylosuj skok, ale upewnij się, że nie odstajemy mocno od realExpected.
         // Ponieważ 80k dziennie to 0.9 PLN/s, żeby skoki zadowalały oko, dodajemy lekki szum.
         const jump = Math.max(0, difference + (Math.random() * 5));
         return prev + jump;
      });

      // Następny skok za 1.5 - 4.5 sekundy (generuje nierównomierność)
      const nextDelay = 1500 + Math.random() * 3000; 
      timeoutId = setTimeout(updateIrregularly, nextDelay);
    };

    timeoutId = setTimeout(updateIrregularly, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <span className="tabular-nums font-mono tracking-tight">
      {displayValue.toLocaleString('pl-PL', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/,/g, ' ')}
    </span>
  );
}

function GrowingGwhCounter() {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Od momentu 1 Stycznia 2025 roku wartość wynosiła około 1943.4
    // Rośnie o powiedzmy 3.5 GWh dziennie
    const startDate = new Date('2025-01-01T00:00:00Z').getTime();
    const baseValue = 1943.4;
    const ratePerMs = 3.5 / (24 * 60 * 60 * 1000); // Wzrost za jedną milisekundę
    
    let currentTarget = baseValue + (new Date().getTime() - startDate) * ratePerMs;
    setDisplayValue(currentTarget);

    let timeoutId: NodeJS.Timeout;

    const updateIrregularly = () => {
      // Wyliczamy faktyczną poprawną wartość w czasie rzeczywistym
      const realExpected = baseValue + (new Date().getTime() - startDate) * ratePerMs;
      
      setDisplayValue(prev => {
         const difference = realExpected - prev;
         if (difference > 1) return realExpected;
         
         const jump = Math.max(0, difference + (Math.random() * 0.05));
         return prev + jump;
      });

      // Następny skok cyferki za 2 do 5 sekund
      const nextDelay = 2000 + Math.random() * 3000; 
      timeoutId = setTimeout(updateIrregularly, nextDelay);
    };

    timeoutId = setTimeout(updateIrregularly, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <span className="tabular-nums">
      {displayValue.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <section className="py-24 px-6 md:px-[5%] relative overflow-hidden bg-slate-50 font-sans">
  {/* Wind farm icons added on right side */}
  <div className="absolute right-0 top-1/3 w-48 h-48 opacity-30">
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#A9E8CB" strokeWidth="2">
      <path d="M10 80 L30 20 L50 80 Z" />
      <path d="M30 80 L50 20 L70 80 Z" />
    </svg>
  </div>
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* KAFELEK 1: 371.3 MW (Graphical Abstract Background) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 lg:row-span-1 rounded-[32px] rounded-tr-none relative overflow-hidden bg-gradient-to-br from-[#1D71B8] to-[#120F36] group flex items-end justify-end p-8"
          >
            {/* Folder Cutout Top-Right */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50 rounded-bl-[28px] z-20 pointer-events-none translate-x-[1px] -translate-y-[1px]" />
            
            <div className="absolute inset-0 z-0">
               {/* Abstract Graphical Elements */}
               {/* Gauge Graphic Background / Speedometer */}
               <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none absolute bottom-0 left-0">
                  <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#A9E8CB" strokeWidth="2" strokeDasharray="4 8" />
                  <path d="M 40 100 A 60 60 0 0 1 160 100" fill="none" stroke="#201B55" strokeWidth="10" opacity="0.5" />
                  <circle cx="100" cy="100" r="8" fill="#A9E8CB" />
                  <path d="M 100 100 L 140 40" stroke="#A9E8CB" strokeWidth="4" strokeLinecap="round" className="animate-[pulse_3s_ease-in-out_infinite] origin-bottom shadow-lg" />
               </svg>
               <div className="absolute inset-0 bg-gradient-to-t from-[#120F36]/90 via-[#120F36]/50 to-transparent"></div>
            </div>
            
            <div className="relative z-10 text-right w-full">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#A9E8CB] leading-none drop-shadow-md">
                <LiveNumber target={371.3} decimals={1} flutter={false} /> MW
              </h3>
              <p className="text-white/80 font-medium mt-2">Łączna moc instalacji OZE</p>
            </div>
          </motion.div>

          {/* KAFELEK 2: 498 Klientów (Brand Dark Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 lg:row-span-2 rounded-[32px] rounded-tl-none relative overflow-hidden bg-[#201B55] p-8 flex flex-col"
          >
            {/* Folder Cutout Top-Left */}
            <div className="absolute top-0 left-0 w-16 h-12 bg-slate-50 rounded-br-[28px] z-20 pointer-events-none -translate-x-[1px] -translate-y-[1px]" />
            
            <div className="relative z-10 text-right">
              <h3 className="text-5xl md:text-6xl font-extrabold text-[#A9E8CB] leading-none mb-1">
                <LiveNumber target={498} flutter={false} />
              </h3>
              <p className="text-white font-medium pr-1">Klientów</p>
            </div>

            {/* Zbiór Avatarków w formie grafu połączeń */}
            <div className="flex-1 relative mt-8 flex items-center justify-center">
               <div className="w-full h-full absolute flex flex-wrap gap-4 items-center justify-center opacity-80">
                  {/* Pseudo-graf (linie) */}
                  <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                  
                  {/* Floating Avatars */}
                  <img src="https://i.pravatar.cc/100?img=11" className="w-16 h-16 rounded-full border-4 border-[#201B55] absolute top-10 left-4" alt="avatar" />
                  <img src="https://i.pravatar.cc/100?img=47" className="w-12 h-12 rounded-full border-4 border-[#201B55] absolute top-4 right-10" alt="avatar" />
                  <img src="https://i.pravatar.cc/100?img=33" className="w-10 h-10 rounded-full border-4 border-[#201B55] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="avatar" />
                  <img src="https://i.pravatar.cc/100?img=5" className="w-14 h-14 rounded-full border-4 border-[#201B55] absolute bottom-12 left-8" alt="avatar" />
                  <img src="https://i.pravatar.cc/100?img=44" className="w-20 h-20 rounded-full border-4 border-[#201B55] absolute bottom-6 right-6" alt="avatar" />
               </div>
            </div>
          </motion.div>

          {/* KAFELEK 3: Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 lg:row-span-1 rounded-[32px] p-8 flex items-center justify-center lg:justify-start"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#201B55] leading-[1.1]">
              Reo.pl<br />w liczbach
            </h2>
          </motion.div>

          {/* KAFELEK 4: 1943 GWh (Green Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 lg:row-span-2 rounded-[32px] rounded-bl-none relative overflow-hidden bg-[#EAF9F4] p-8 flex flex-col justify-between group"
          >
            {/* Folder Cutout Bottom-Left */}
            <div className="absolute bottom-0 left-0 w-24 h-12 bg-slate-50 rounded-tr-[28px] z-20 pointer-events-none -translate-x-[1px] translate-y-[1px]" />
            
            <div className="text-center mt-4 relative z-10">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#201B55] leading-none mb-6">
                <GrowingGwhCounter /> GWh
              </h3>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-dark"><Zap className="w-4 h-4" /></div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-dark"><CircleDollarSign className="w-4 h-4" /></div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-dark"><CheckCircle2 className="w-4 h-4" /></div>
              </div>

              <p className="text-[#201B55] font-bold px-4">Łączny obrót zieloną<br/>energią z bilansowaniem</p>
            </div>

            {/* Abstract Graphic Placeholder (Bulb with continuous line) */}
            <div className="w-full flex justify-center mb-8 relative z-0">
              <svg width="120" height="150" viewBox="0 0 100 150" fill="none" opacity="0.6">
                <path d="M50 110 C80 110, 80 50, 50 20 C20 50, 20 110, 50 110" stroke="#201B55" strokeWidth="3" fill="none" />
                <path d="M35 110 Q50 130 65 110" stroke="#201B55" strokeWidth="3" fill="none" />
                <path d="M40 120 L60 120 M42 130 L58 130" stroke="#201B55" strokeWidth="3" strokeLinecap="round" />
                <path d="M50 130 C30 160, -20 120, 10 145 C40 170, 90 145, 95 120 M50 20 L50 40" stroke="#1D71B8" strokeWidth="3" fill="none" className="animate-[dash_10s_linear_infinite]" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* KAFELEK 5: 59 Firm (Premium Data Visualization) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 lg:row-span-1 rounded-[32px] rounded-tl-none relative overflow-hidden bg-gradient-to-br from-[#120F36] to-[#201B55] group p-8 flex flex-col justify-end"
          >
            {/* Folder Cutout Top-Left */}
            <div className="absolute top-0 left-0 w-24 h-16 bg-slate-50 rounded-br-[28px] z-20 pointer-events-none -translate-x-[1px] -translate-y-[1px]" />
            
            {/* Abstract Graphic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(169,232,203,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(169,232,203,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              {/* Glowing Map Nodes (Abstract) */}
              <div className="absolute top-1/4 right-[15%] w-3 h-3 bg-[#A9E8CB] rounded-full shadow-[0_0_20px_4px_rgba(169,232,203,0.5)] animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-[40%] right-[35%] w-2 h-2 bg-[#A9E8CB] rounded-full shadow-[0_0_15px_3px_rgba(169,232,203,0.4)] animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
              <div className="absolute bottom-[30%] right-[10%] w-4 h-4 bg-[#A9E8CB] rounded-full shadow-[0_0_25px_5px_rgba(169,232,203,0.6)] animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-[10%] right-[40%] w-2 h-2 bg-[#A9E8CB] rounded-full shadow-[0_0_10px_2px_rgba(169,232,203,0.3)] animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '2s' }}></div>
            </div>
            
            <div className="absolute inset-0 z-0">
               <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                  <path d="M 85 25 L 65 40 L 60 90 M 65 40 L 90 70 M 60 90 L 30 70 M 30 70 L 65 40" stroke="#A9E8CB" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="animate-[dash_10s_linear_infinite]" />
               </svg>
            </div>

            <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-4 mt-8">
              
              {/* Tech Icon / Badge */}
              <div className="hidden md:flex w-16 h-16 rounded-full bg-[#A9E8CB]/10 items-center justify-center border border-[#A9E8CB]/30 backdrop-blur-sm self-end">
                <div className="w-12 h-12 rounded-full border border-[#A9E8CB]/50 flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full border border-[#A9E8CB] animate-ping opacity-20"></div>
                   <Zap className="w-5 h-5 text-[#A9E8CB]" />
                </div>
              </div>

              <div className="pr-2 text-right">
                <h3 className="text-6xl md:text-7xl font-black text-[#A9E8CB] leading-none mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(169,232,203,0.3)]">
                  <LiveNumber target={59} flutter={false} />
                </h3>
                <p className="text-white/90 font-medium text-lg md:text-xl max-w-sm ml-auto">
                  Liczba wytwórców energii na Platformie Reo.pl
                </p>
              </div>
            </div>
          </motion.div>

          {/* KAFELEK 6: 1016 GWh (Light Green Wide Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-1 lg:row-span-1 rounded-[32px] rounded-br-none relative overflow-hidden bg-[#EAF9F4] p-8"
          >
            {/* Folder Cutout Bottom-Right */}
            <div className="absolute bottom-0 right-0 w-16 h-12 bg-slate-50 rounded-tl-[28px] z-20 pointer-events-none translate-x-[1px] translate-y-[1px]" />
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#201B55] leading-none mb-2">
                <LiveNumber target={1016} decimals={0} flutter={false} /> GWh
              </h3>
              <p className="text-[#201B55] font-bold max-w-[150px]">Łączna produkcja z OZE</p>
            </div>

            {/* Abstract Graphic Placeholder (Bird with continuous line) */}
            <div className="absolute right-4 bottom-4 w-32 h-24 flex justify-end items-end opacity-70">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                 <path d="M10 60 Q 30 70 50 60 T 90 40 Q 110 50 115 55 Q 90 60 70 55 C 60 40 40 30 50 20 C 60 10 70 15 80 30" stroke="#1D71B8" strokeWidth="3" fill="none" strokeLinecap="round" />
                 <path d="M50 20 C 40 10 20 10 20 20 C 20 30 30 50 50 60" stroke="#1D71B8" strokeWidth="3" fill="none" strokeLinecap="round" />
                 <path d="M0 70 Q 20 80 40 70" stroke="#201B55" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </motion.div>

          {/* KAFELEK 7: Oszczędności (Wpasowane w prawe dolne złącze, 2 kolumny) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2 lg:row-span-1 rounded-[32px] relative overflow-hidden bg-transparent p-8 md:px-10 flex flex-col md:flex-row items-center justify-between"
          >
             <div className="z-10 mb-6 md:mb-0 max-w-sm">
                <h3 className="text-xl md:text-2xl font-black text-[#201B55] mb-2 uppercase tracking-wide">
                  NASI KLIENCI ZAOSZCZĘDZILI OD 2025 ROKU
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Oszczędności generowane na bieżąco (średnio 80 tys. PLN dziennie dzięki tańszej energii i OZE)
                </p>
             </div>
             
             {/* Usunięte szare tło z ramką, przesunięte do prawej */}
             <div className="z-10 whitespace-nowrap ml-auto text-right flex items-baseline gap-2">
                <div className="text-4xl md:text-5xl font-bold text-[#1D71B8] tracking-widest tabular-nums font-mono">
                   <SavingsCounter />
                </div> 
                <span className="text-xl font-bold text-[#201B55]">PLN</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
