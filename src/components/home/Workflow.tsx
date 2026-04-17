"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Darmowa Konsultacja",
    description: "Skontaktuj się z nami na bezpłatną konsultację. Przeanalizujemy Twój profil zużycia i przedstawimy korzyści wynikające z zakupu zielonej energii elektrycznej.",
  },
  {
    number: "02",
    title: "Oferta i Oszczędności",
    description: "Przedstawimy Ci szczegółową ofertę, w której znajdziesz informacje o kosztach, oszczędnościach i korzyściach środowiskowych.",
  },
  {
    number: "03",
    title: "Bezpieczna Umowa",
    description: "Po zaakceptowaniu oferty podpiszemy umowę, która szczegółowo określi warunki współpracy.",
  },
];

export default function Workflow() {
  return (
    <section className="py-24 px-6 md:px-[5%] bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center gap-16 lg:gap-24">
        
        {/* Left Side Abstract Graphic */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative w-full aspect-[4/3] rounded-[40px] rounded-bl-none bg-gradient-to-br from-[#201B55] to-[#201B55] shadow-[0_30px_60px_rgba(45,47,93,0.15)] flex items-center justify-center overflow-hidden group">
            {/* Folder Cutout Bottom-Left */}
            <div className="absolute bottom-0 left-0 w-24 h-16 bg-slate-50 rounded-tr-[32px] z-20 pointer-events-none -translate-x-[1px] translate-y-[1px]"></div>

            {/* Geometric Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            
            {/* Dynamic Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#A9E8CB]/20 rounded-full blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-700 z-10"></div>

            <motion.div 
              className="relative z-10 text-center"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Cpu className="w-16 h-16 text-[#A9E8CB] mx-auto mb-4" />
              <h3 className="text-white text-3xl font-extrabold tracking-tight">Smart Execution</h3>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Text Steps */}
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#201B55] mb-12"
          >
            Jak to działa i co zyskujesz
          </motion.h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 border-l-[3px] border-[#A9E8CB]/30 pb-8 last:pb-0 last:border-transparent group"
              >
                {/* Node Dot */}
                <div className="absolute left-[-8.5px] top-1 w-[14px] h-[14px] rounded-full bg-[#A9E8CB] shadow-[0_0_10px_rgba(24,201,145,0.8)] group-hover:scale-150 transition-transform duration-300"></div>
                
                <h4 className="text-xl font-bold text-[#201B55] mb-2">
                  <span className="text-[#1D71B8] mr-2">{step.number}.</span>
                  {step.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
