"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EsgNews() {
  return (
    <section className="py-24 px-6 md:px-[5%] max-w-7xl mx-auto bg-white font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#201B55] rounded-[40px] rounded-tl-none p-10 md:p-16 lg:p-20 shadow-[0_20px_50px_rgba(32,27,85,0.15)] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
      >
        {/* Abstract graphic background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D71B8] rounded-[60px] opacity-30 blur-3xl -translate-y-24 translate-x-12 pointer-events-none" />
        
        {/* Folder Cutout imitation */}
        <div className="absolute top-0 left-0 w-24 h-16 bg-white rounded-br-[32px] z-10 pointer-events-none -translate-x-[1px] -translate-y-[1px]" />

        <div className="relative z-20 flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-bold text-[#A9E8CB] mb-6 uppercase tracking-wider backdrop-blur-sm shadow-sm border border-white/5">
            <BookOpen className="w-4 h-4" /> Baza Wiedzy Reo.pl
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
            Edukacja na temat strategii <br className="hidden md:block" /> 
            <span className="text-[#A9E8CB]">zrównoważonego rozwoju.</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Odkryj bibliotekę artykułów, raportów i analiz dotyczących odnawialnych źródeł energii, strategii ESG oraz zmian w prawnym środowisku energetycznym.
          </p>
        </div>

        <div className="relative z-20 flex-shrink-0 w-full md:w-auto">
          <Link href="/informacje" className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#A9E8CB] text-[#201B55] hover:bg-white px-8 py-5 rounded-full font-extrabold text-[15px] transition-all shadow-[0_0_40px_-10px_rgba(169,232,203,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.7)] hover:scale-105 active:scale-95">
            Wejdź do bazy wiedzy <ArrowRight className="w-5 h-5 pointer-events-none" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
