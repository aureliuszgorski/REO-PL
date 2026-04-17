"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Sun, Wind } from "lucide-react";
import Link from "next/link";

export default function OzePage() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden flex flex-col">
      <Header />

      {/* Hero Header */}
      <main className="flex-1 pt-32 pb-24 px-6 md:px-[5%] max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green font-bold text-sm tracking-widest uppercase mb-6">
            Platforma Wytwórców OZE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Grupy Biznesowe
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Narzędzie Reo.pl służące elastycznemu organizowaniu sprzedaży energii na rzecz wybranych Odbiorców bez prowizji aukcyjnych.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-white border border-slate-100 rounded-3xl p-8 md:col-span-8 relative overflow-hidden group shadow-xl shadow-slate-200/50"
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Rynek Peer-to-Peer (P2P)</h3>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              Zapewniamy dostęp do największej w regionie rzeszy firm gotowych do natychmiastowego zawierania umów cPPA. Sprzedając energię z pominięciem giełdy i pośredników, po raz pierwszy zachowujesz 100% wartości swoich aktywów.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-900 rounded-3xl p-8 md:col-span-4 relative overflow-hidden group flex flex-col justify-between"
          >
            <div>
               <div className="flex items-center gap-2 mb-4">
                <Sun className="w-6 h-6 text-brand-neon" />
                <Wind className="w-6 h-6 text-blue-400" />
               </div>
              <h4 className="text-2xl font-bold text-white mb-3">Pełne Wymiary OZE</h4>
              <p className="text-slate-400 leading-relaxed">
                Obsługujemy transakcje z farm fotowoltaicznych, wiatrowych, elektrowni wodnych.
              </p>
            </div>
            <Link href="#" className="inline-flex items-center gap-2 mt-8 text-brand-neon font-bold hover:text-white transition-colors">
              Dodaj swoją farmę <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>

      </main>
    </div>
  );
}
