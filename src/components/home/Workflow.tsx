"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Darmowa Konsultacja",
    description: "Skontaktuj się z nami na bezpłatną konsultację. Przeanalizujemy Twój profil zużycia i przedstawimy korzyści wynikające z zakupu zielonej energii elektrycznej.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Oferta i Oszczędności",
    description: "Przedstawimy Ci szczegółową ofertę, w której znajdziesz informacje o kosztach, oszczędnościach i korzyściach środowiskowych.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Bezpieczna Umowa",
    description: "Po zaakceptowaniu oferty podpiszemy umowę, która szczegółowo określi warunki współpracy.",
    icon: Handshake,
  },
];

export default function Workflow() {
  return (
    <section className="py-24 px-6 md:px-[5%] bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#201B55]"
          >
            Jak to działa i co zyskujesz
          </motion.h2>
        </div>

        <div className="relative">
          {/* Main Timeline Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#A9E8CB]/50 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-5 h-5 bg-[#201B55] border-[4px] border-[#A9E8CB] rounded-full -translate-x-1/2 -translate-y-1/2 z-20"></div>

                  {/* Horizontal Connector Line (Desktop) */}
                  <div className={`hidden md:block absolute top-1/2 h-[3px] bg-[#A9E8CB]/50 -translate-y-1/2 z-0 ${
                    isEven 
                      ? 'right-1/2 w-14' 
                      : 'left-1/2 w-14'
                  }`}></div>

                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`w-full md:w-[50%] pl-24 md:pl-0 ${isEven ? 'md:pr-14' : 'md:pl-14'} relative`}
                  >

                    <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative group z-10">
                      
                      <h4 className={`text-2xl font-bold text-[#201B55] mb-4 flex items-center gap-4 ${
                        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                      }`}>
                        <span className="text-[#1D71B8] bg-[#1D71B8]/10 px-4 py-1.5 rounded-xl text-lg tracking-wider font-extrabold shadow-sm isolate">
                          {step.number}
                        </span>
                        <span className={isEven ? 'md:text-right' : 'md:text-left'}>{step.title}</span>
                      </h4>
                      <p className={`text-slate-500 leading-relaxed text-[1.05rem] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
