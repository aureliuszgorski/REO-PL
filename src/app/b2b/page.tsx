"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { CheckCircle, Shield, TrendingDown } from "lucide-react";

export default function B2bPage() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden flex flex-col">
      <Header />

      {/* Haptic Glow Background */}
      <div className="fixed top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_bottom,rgba(30,41,59,0.5)_0%,transparent_80%)]"></div>

      <main className="flex-1 pt-32 pb-24 px-6 md:px-[5%] max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-neon/10 border border-brand-neon/30 rounded-full text-brand-neon font-semibold text-sm tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            Green Deal B2B
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Długoterminowe Umowy PPA
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Innowacyjne rozwiązanie, które pozwala firmom na korzystanie z energii ze źródeł odnawialnych w sposób ekonomiczny. Zabezpiecz budżet energetyczny na dekadę.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          
          {/* Card 1: cPPA */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass-deep rounded-3xl p-8 md:col-span-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="w-16 h-16 bg-brand-neon/10 rounded-2xl flex items-center justify-center text-brand-neon mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Fizyczne cPPA</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              Dotyczy fizycznych dostaw energii elektrycznej realizowanych za pośrednictwem krajowego systemu elektroenergetycznego (KSE). W takiej umowie ustalana jest ilość oraz cena energii. Kluczowym elementem jest pełne bilansowanie dostaw i certyfikat pochodzenia "za licznikiem".
            </p>
          </motion.div>

          {/* Card 2: CO2 */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-deep rounded-3xl p-8 md:col-span-5 bg-gradient-to-br from-brand-neon/10 to-transparent relative overflow-hidden group"
          >
            <h3 className="text-7xl font-extrabold text-brand-neon mb-2 tracking-tighter">CO₂</h3>
            <h4 className="text-xl font-bold text-white mb-3">Redukcja Emisji</h4>
            <p className="text-slate-400 leading-relaxed">
              Inwestując poprzez PPA przyczyniasz się do twardej redukcji emisji w standardach ESG (zakres 2). Zyskujesz oficjalne Gwarancje Pochodzenia URE.
            </p>
          </motion.div>

          {/* Card 3: Niezależność */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-deep rounded-3xl p-8 md:col-span-7 relative overflow-hidden group"
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
              <TrendingDown className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Niezależność od RDN</h4>
            <p className="text-slate-400 leading-relaxed text-lg">
              Całkowita ochrona przed szokami cenowymi i ukrytymi marżami Towarowej Giełdy Energii. Reo.pl oferuje stałe (Flat) koszty zaopatrzenia w energię nawet do 15 lat, bez ukrytych opłat aukcyjnych.
            </p>
          </motion.div>

        </div>

      </main>
    </div>
  );
}
