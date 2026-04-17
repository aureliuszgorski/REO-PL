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

export default function AnimatedStats() {
  return (
    <section className="py-24 px-6 md:px-[5%] relative overflow-hidden bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Tytuł ukryty dla Mobile w układzie gridu, widoczny normalnie we Flexie, 
            ale na makiecie tytuł to jeden z kafelków. Zbudujemy układ Bento za pomocą CSS Grid. */}
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* KAFELEK 1: 376,9 MW (Photo Background) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 lg:row-span-1 rounded-[32px] rounded-tr-none relative overflow-hidden bg-slate-200 group flex items-end justify-end p-8"
          >
            {/* Folder Cutout Top-Right */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50 rounded-bl-[28px] z-20 pointer-events-none translate-x-[1px] -translate-y-[1px]" />
            
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80" 
                alt="Compass in mountains" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 text-right">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-none">
                <LiveNumber target={376.9} decimals={1} /> MW
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
            
            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-extrabold text-[#A9E8CB] leading-none mb-1">
                <LiveNumber target={498} flutter={false} />
              </h3>
              <p className="text-white font-medium pl-1">Klientów</p>
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

          {/* KAFELEK 4: 2000 GWh (Green Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 lg:row-span-2 rounded-[32px] rounded-bl-none relative overflow-hidden bg-[#EAF9F4] p-8 flex flex-col justify-between"
          >
            {/* Folder Cutout Bottom-Left */}
            <div className="absolute bottom-0 left-0 w-24 h-12 bg-slate-50 rounded-tr-[28px] z-20 pointer-events-none -translate-x-[1px] translate-y-[1px]" />
            
            <div className="text-center mt-4">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#201B55] leading-none mb-6">
                <LiveNumber target={2000} decimals={0} /> GWh
              </h3>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-dark"><Zap className="w-4 h-4" /></div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-dark"><CircleDollarSign className="w-4 h-4" /></div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-dark"><CheckCircle2 className="w-4 h-4" /></div>
              </div>

              <p className="text-[#201B55] font-bold px-4">Łączny obrót zieloną<br/>energią z bilansowaniem</p>
            </div>

            {/* Abstract Graphic Placeholder (Bulb with continuous line) */}
            <div className="w-full flex justify-center mb-8">
              <svg width="120" height="150" viewBox="0 0 100 150" fill="none" opacity="0.6">
                <path d="M50 110 C80 110, 80 50, 50 20 C20 50, 20 110, 50 110" stroke="#201B55" strokeWidth="3" fill="none" />
                <path d="M35 110 Q50 130 65 110" stroke="#201B55" strokeWidth="3" fill="none" />
                <path d="M40 120 L60 120 M42 130 L58 130" stroke="#201B55" strokeWidth="3" strokeLinecap="round" />
                <path d="M50 130 C30 160, -20 120, 10 145 C40 170, 90 145, 95 120 M50 20 L50 40" stroke="#1D71B8" strokeWidth="3" fill="none" className="animate-[dash_10s_linear_infinite]" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* KAFELEK 5: 59 Firm (Photo Background) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 lg:row-span-1 rounded-[32px] rounded-tl-none relative overflow-hidden bg-slate-300 group p-8 flex flex-col justify-end"
          >
            {/* Folder Cutout Top-Left */}
            <div className="absolute top-0 left-0 w-24 h-16 bg-slate-50 rounded-br-[28px] z-20 pointer-events-none -translate-x-[1px] -translate-y-[1px]" />
            
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1592985684693-e4d6c429e29a?w=1200&q=80" 
                alt="Wytwórca na platformie" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-none mb-1 shadow-sm">
                59
              </h3>
              <p className="text-white/90 font-bold block">Liczba wytwórców na Platformie Reo.pl</p>
            </div>
          </motion.div>

          {/* KAFELEK 6: 1000 GWh (Light Green Wide Block) */}
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
                <LiveNumber target={1000} decimals={0} /> GWh
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

        </div>
      </div>
    </section>
  );
}
