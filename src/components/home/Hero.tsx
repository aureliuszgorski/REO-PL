"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <section className="relative w-[calc(100%-48px)] mx-auto mt-8 mb-12 h-[calc(100vh-160px)] min-h-[600px] rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(45,47,93,0.15)] border border-black/5">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/storage/reo-sg_09aef68f.mp4" type="video/mp4" />
      </video>

      {/* Left Side: Producer (Zwiększ zyski) */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center items-center p-8 md:p-12 text-center md:text-left overflow-hidden cursor-pointer bg-white/90 backdrop-blur-md"
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{
          flexGrow: hoveredSide === "right" ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div 
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 border border-black/10 rounded-full text-xs font-bold text-[#201B55] mb-6 uppercase tracking-wider mx-auto md:mx-0 shadow-sm">
            <Zap className="w-4 h-4" /> Dla Wytwórców OZE
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#201B55] leading-[1.1] mb-6 tracking-tight">
            <span className="text-[#1D71B8]">Zwiększ zyski</span> ze <br className="hidden md:block" />swojej instalacji
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
            Zarabiaj więcej oferując energię bezpośrednio firmom. Zyskaj dostęp do płynnego rynku Peer-to-Peer, bilansowania i kompleksowej obsługi Twoich aktywów OZE.
          </p>
          
          <Link href="/oze" className="inline-flex items-center gap-3 bg-[#201B55] hover:bg-[#1D71B8] text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg hover:scale-105 active:scale-95">
            Znajdź odbiorców <ArrowRight className="w-5 h-5 pointer-events-none" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side: B2B Consumer (Zabezpiecz stabilne ceny) */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center items-center p-8 md:p-12 text-center md:text-left overflow-hidden cursor-pointer bg-[#201B55]/90 backdrop-blur-md border-t md:border-t-0 md:border-l border-white/10"
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{
          flexGrow: hoveredSide === "left" ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div 
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-[#A9E8CB] mb-6 uppercase tracking-wider mx-auto md:mx-0 shadow-sm">
            <ShieldCheck className="w-4 h-4" /> Dla Biznesu
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Zabezpiecz <span className="text-[#A9E8CB]">stabilne</span> <br className="hidden md:block" />
            <span className="text-[#A9E8CB]">ceny</span> energii
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-medium">
            Kupuj w 100% zieloną energię bezpośrednio od wytwórców. Redukuj ślad węglowy, realizuj cele ESG i stabilizuj koszty dzięki elastycznym kontraktom PPA i platformie obrotu.
          </p>
          
          <Link href="/b2b" className="inline-flex items-center gap-3 bg-[#A9E8CB] text-[#201B55] hover:bg-white px-8 py-4 rounded-full font-extrabold transition-all shadow-[0_0_40px_-10px_rgba(169,232,203,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.7)] hover:scale-105 active:scale-95">
            Zobacz ofertę zakupu <ArrowRight className="w-5 h-5 pointer-events-none" />
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
