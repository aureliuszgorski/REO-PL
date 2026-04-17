"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileCheck, Users, ShoppingCart, ArrowLeftRight, ArrowUpRight, Lock, BarChart3, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    icon: FileCheck,
    title: "Umowa PPA",
    description: "Długoterminowe ustalenie stałej ceny za energię elektryczną, umożliwiające stabilizację kosztów. Gwarantujemy bezpieczeństwo.",
    delay: 0.1,
    href: "/oferta/umowy-dlugoterminowe-ppa"
  },
  {
    icon: Users,
    title: "Grupy biznesowe",
    description: "Sprzedaż wytworzonej przez wytwórcę OZE energii elektrycznej w ramach utworzonej Grupy, po cenie ustalonej przez jej członków.",
    delay: 0.2,
    href: "/oferta/grupy-biznesowe"
  },
  {
    icon: ShoppingCart,
    title: "Tabela Ofert",
    description: "Możliwość precyzyjnej personalizacji oferty zakupu lub sprzedaży zielonej energii elektrycznej w czasie rzeczywistym.",
    delay: 0.3,
    href: "/oferta/tabela-ofert"
  },
  {
    icon: ArrowLeftRight,
    title: "Platforma P2P",
    description: "Dedykowane rozwiązanie dla odbiorców i wytwórców do bezpośredniego obrotu energią ze źródeł odnawialnych.",
    delay: 0.4,
    href: "/oferta/platforma-peer-to-peer"
  },
];

export default function ArchitectureGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6 md:px-[5%] relative overflow-hidden bg-slate-50 font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#201B55]"
        >
          Platforma Reo.pl
        </motion.h2>

        {/* --- LAPTOP MOCKUP START --- */}
        <div className="mx-auto w-full max-w-5xl relative z-10 px-2 lg:px-0">
          
          {/* Laptop Screen Body */}
          <div className="bg-[#1a1c23] rounded-t-[24px] md:rounded-t-[32px] p-2 md:p-3 pb-3 md:pb-4 shadow-2xl relative ring-1 ring-slate-800/10">
            
            {/* Screen Display */}
            <div className="bg-white rounded-xl overflow-hidden relative shadow-inner flex flex-col md:aspect-[16/10] lg:aspect-[16/9]">
              
              {/* Fake Browser Top Bar */}
              <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between sticky top-0 z-20">
                <div className="flex gap-1.5 md:gap-2 w-1/3">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                
                <div className="flex-1 px-4 flex justify-center w-1/3">
                  <div className="bg-slate-100 border border-slate-200 text-slate-500 font-mono text-[10px] md:text-xs px-4 md:px-6 py-1 rounded-md flex items-center gap-2 shadow-sm">
                    <Lock className="w-3 h-3 text-[#1D71B8]" />
                    <span className="font-semibold text-slate-600">panel.reo.pl</span>
                  </div>
                </div>
                
                <div className="w-1/3 flex justify-end gap-2 text-slate-400">
                   {/* Hamburger menu mockup info */}
                   <div className="w-4 h-0.5 bg-slate-300 rounded mb-1"></div>
                   <div className="w-4 h-0.5 bg-slate-300 rounded mb-1"></div>
                   <div className="w-4 h-0.5 bg-slate-300 rounded"></div>
                </div>
              </div>

              {/* Application Header with User Profile */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 md:px-6 py-2 md:py-3 flex justify-between items-center z-10 w-full shrink-0">
                 <div className="font-bold text-[#201B55] text-sm md:text-base tracking-tight">
                    <span className="text-[#1D71B8]">reo</span>.pl <span className="font-medium text-slate-400 ml-1">Panel</span>
                 </div>
                 <div className="flex items-center gap-3">
                     <div className="text-right hidden sm:block">
                        <div className="text-sm font-bold text-[#201B55] leading-none mb-1">Jan Kowalski</div>
                        <div className="text-xs text-slate-500 leading-none">Właściciel</div>
                     </div>
                     <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#1D71B8] to-[#201B55] flex items-center justify-center text-white font-bold shadow-md ring-2 ring-white text-xs md:text-sm">
                        JK
                     </div>
                  </div>
              </div>

              {/* Dashboard Content area (MOCKED OS) */}
              <div className="flex-1 flex overflow-hidden">
                
                {/* Sidebar Navigation */}
                <div className="w-1/3 md:w-1/4 lg:w-1/5 bg-slate-50/50 border-r border-slate-200 flex flex-col items-center md:items-stretch py-4 overflow-y-auto">
                   <div className="mb-6 px-4 hidden md:block">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Moduły Systemu</div>
                   </div>
                   
                   <div className="flex flex-col gap-1 px-2">
                     {cards.map((card, idx) => {
                       const Icon = card.icon;
                       const isActive = activeTab === idx;
                       return (
                         <button
                           key={idx}
                           onClick={() => setActiveTab(idx)}
                           className={`w-full flex items-center gap-3 px-3 py-2.5 md:py-3 rounded-lg transition-all duration-200 ${
                             isActive 
                               ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] ring-1 ring-slate-200/60' 
                               : 'hover:bg-slate-100/80 text-slate-500'
                           }`}
                         >
                           <div className={`flex items-center justify-center rounded-md w-8 h-8 ${isActive ? 'bg-[#1D71B8]/10 text-[#1D71B8]' : 'text-slate-400 bg-white shadow-sm ring-1 ring-slate-100'}`}>
                             <Icon className="w-[18px] h-[18px]" strokeWidth={2.5} />
                           </div>
                           <span className={`hidden md:block text-xs font-semibold ${isActive ? 'text-[#201B55]' : 'text-slate-600'}`}>
                             {card.title}
                           </span>
                           {isActive && <div className="hidden md:block ml-auto w-1.5 h-1.5 rounded-full bg-[#A9E8CB]"></div>}
                         </button>
                       );
                     })}
                   </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white relative overflow-y-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 md:p-8 lg:p-10 h-full flex flex-col"
                      >
                         <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                           <div>
                             <h3 className="text-2xl md:text-3xl font-extrabold text-[#201B55] tracking-tight">{cards[activeTab].title}</h3>
                             <p className="text-sm font-medium text-slate-500 mt-2 max-w-md">{cards[activeTab].description}</p>
                           </div>
                           <Link href={cards[activeTab].href} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#201B55] hover:bg-[#1D71B8] text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap shadow-sm hover:shadow active:scale-95">
                              Dowiedz się więcej <ArrowUpRight className="w-4 h-4 text-[#A9E8CB]" />
                           </Link>
                         </div>

                         {/* 
                            Fake UI Mockups generated contextually for each tab 
                         */}
                         <div className="flex-1 border border-slate-100 rounded-xl bg-slate-50/50 shadow-inner flex flex-col overflow-hidden relative">
                           {activeTab === 0 && (
                             /* MOCKUP: UMOWA PPA */
                             <div className="p-6 flex flex-col h-full gap-4 opacity-90">
                               <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                                 <div className="flex items-center gap-2 text-slate-600"><FileCheck className="w-4 h-4"/> <span className="text-xs font-bold uppercase">Podgląd Kontraktu</span></div>
                                 <div className="px-2 py-1 bg-[#A9E8CB]/20 text-[#1D71B8] text-[10px] font-bold rounded">AKTYWNA</div>
                               </div>
                               <div className="space-y-4 flex-1">
                                 <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                                 <div className="h-3 bg-slate-100 rounded w-full"></div>
                                 <div className="h-3 bg-slate-100 rounded w-5/6"></div>
                                 <div className="h-3 bg-slate-100 rounded w-full"></div>
                                 <div className="h-4 bg-slate-200 rounded w-1/4 mt-8"></div>
                                 <div className="flex gap-4">
                                   <div className="w-1/2 h-16 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-300 text-xs font-bold">Podpis Wytwórcy</div>
                                   <div className="w-1/2 h-16 border-2 border-[#A9E8CB] bg-[#A9E8CB]/10 rounded-lg flex items-center justify-center text-[#1D71B8] text-xs font-bold">Zatwierdzono (Reo)</div>
                                 </div>
                               </div>
                             </div>
                           )}

                           {activeTab === 1 && (
                             /* MOCKUP: GRUPY BIZNESOWE */
                             <div className="p-6 flex flex-col h-full gap-4 opacity-90">
                               <div className="flex items-center justify-between mb-2">
                                 <div className="text-sm font-bold text-[#201B55]">Moja Grupa Energetyczna</div>
                                 <div className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-bold shadow-sm">+ Dodaj członka</div>
                               </div>
                               <div className="flex gap-4">
                                 <div className="w-1/3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center text-center">
                                    <div className="w-10 h-10 bg-[#A9E8CB] rounded-full flex items-center justify-center mb-2"><Zap className="w-5 h-5 text-[#201B55]"/></div>
                                    <div className="text-xs font-bold text-[#201B55]">Farma Wiatrowa X</div>
                                    <div className="text-[10px] text-slate-400">Lider Grupy</div>
                                 </div>
                                 <div className="flex-1 flex flex-col justify-center gap-2">
                                     <div className="flex items-center gap-2">
                                        <div className="h-px bg-slate-300 flex-1 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center"><ArrowLeftRight className="w-2 h-2"/></div></div>
                                        <div className="bg-white p-2 border border-slate-200 rounded text-xs w-32 shadow-sm font-medium">Zakład Przemysłowy</div>
                                     </div>
                                     <div className="flex items-center gap-2">
                                        <div className="h-px bg-slate-300 flex-1 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#A9E8CB] rounded-full flex items-center justify-center"><ArrowLeftRight className="w-2 h-2 text-[#201B55]"/></div></div>
                                        <div className="bg-white p-2 border border-[#A9E8CB] rounded text-xs w-32 shadow-sm font-bold text-[#1D71B8]">Sieć Handlowa</div>
                                     </div>
                                 </div>
                               </div>
                             </div>
                           )}

                           {activeTab === 2 && (
                             /* MOCKUP: TABELA OFERT */
                             <div className="p-4 flex flex-col h-full opacity-90 relative">
                               {/* Real-time pulse dot */}
                               <div className="absolute top-4 right-4 flex items-center gap-2">
                                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Live</span>
                                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                               </div>
                               <div className="text-xs font-bold uppercase text-slate-500 mb-4 px-2">Rynek PPA (Otwarty)</div>
                               <div className="flex flex-col gap-2">
                                 {/* Tabela header */}
                                 <div className="flex text-[10px] font-bold text-slate-400 uppercase px-3 pb-1 border-b border-slate-200">
                                   <div className="w-1/4">Źródło</div>
                                   <div className="w-1/4">Wolumen</div>
                                   <div className="w-1/4">Cena (PLN/MWh)</div>
                                   <div className="w-1/4 text-right">Akcja</div>
                                 </div>
                                 {/* Rows */}
                                 {[1,2,3].map((row) => (
                                   <div key={row} className="flex items-center bg-white border border-slate-100 rounded-lg p-2 text-xs hover:border-[#1D71B8]/30 transition-colors cursor-pointer shadow-sm">
                                      <div className="w-1/4 font-semibold flex items-center gap-2">
                                         {row===1 ? <Zap className="w-3 h-3 text-[#A9E8CB]"/> : <BarChart3 className="w-3 h-3 text-slate-400"/>} 
                                         PV {row*5} MW
                                      </div>
                                      <div className="w-1/4 font-mono text-slate-500">{500 * row} MWh</div>
                                      <div className="w-1/4 font-bold text-[#201B55]">{320 + row*5},00</div>
                                      <div className="w-1/4 text-right"><span className="px-3 py-1 bg-slate-100 text-slate-600 rounded font-semibold text-[10px] hover:bg-[#201B55] hover:text-white transition-colors">Negocjuj</span></div>
                                   </div>
                                 ))}
                               </div>
                             </div>
                           )}

                           {activeTab === 3 && (
                             /* MOCKUP: PLATFORMA P2P */
                             <div className="p-6 flex flex-col h-full gap-4 opacity-90 overflow-hidden relative">
                               {/* Graf statystyk giełdowych */}
                               <div className="flex items-end gap-1 h-24 mb-4 border-b border-slate-200 pb-2">
                                  {[40, 20, 60, 45, 90, 70, 80, 50, 100, 85].map((h, i) => (
                                    <div key={i} className="flex-1 bg-gradient-to-t from-[#A9E8CB] to-[#1D71B8]/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                  ))}
                               </div>
                               <div className="flex gap-4">
                                  <div className="w-1/2 flex flex-col gap-2">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Najlepsza oferta KUPNA</div>
                                    <div className="bg-white p-3 border border-green-200 rounded-lg shadow-sm border-l-4 border-l-green-400">
                                      <div className="text-xl font-extrabold text-[#201B55]">345,50 <span className="text-[10px] text-slate-400">PLN/MWh</span></div>
                                    </div>
                                  </div>
                                  <div className="w-1/2 flex flex-col gap-2">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Najlepsza oferta SPRZEDAŻY</div>
                                    <div className="bg-white p-3 border border-red-200 rounded-lg shadow-sm border-l-4 border-l-red-400">
                                      <div className="text-xl font-extrabold text-[#201B55]">348,00 <span className="text-[10px] text-slate-400">PLN/MWh</span></div>
                                    </div>
                                  </div>
                               </div>
                             </div>
                           )}
                           
                         </div>
                      </motion.div>
                    </AnimatePresence>
                </div>

              </div>

            </div>
            
            {/* Logo on bottom bezel of the screen */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-black text-slate-600 tracking-widest opacity-80 uppercase">Reo Laptop</div>
          </div>
          
          {/* Laptop Base (Keyboard area front) */}
          <div className="relative mx-[-2%] sm:mx-[-4%] md:mx-[-6%] lg:mx-[-8%] flex justify-center z-0">
             {/* The wedge shape */}
             <div style={{ perspective: '800px' }} className="w-full h-4 md:h-6 flex justify-center">
                <div 
                  className="w-full h-full bg-gradient-to-b from-[#b0b5bd] to-[#8d939e] rounded-b-[16px] md:rounded-b-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-t border-[#d8dce3] relative overflow-hidden"
                >
                   {/* Trackpad notch */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[5px] bg-[#9ca2ad] rounded-b-md shadow-inner"></div>
                   
                   {/* Light reflection on the lip */}
                   <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20"></div>
                </div>
             </div>
          </div>
          
          {/* Dropshadow underneath laptop */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/20 blur-2xl rounded-full z-[-1]"></div>
        </div>
        {/* --- LAPTOP MOCKUP END --- */}

      </div>
    </section>
  );
}
