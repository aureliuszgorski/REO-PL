"use client";

import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  invert?: boolean;
}

const logos: Logo[] = [
  { src: "/storage/cm-damiana_604f2631.png", alt: "Damiana" },
  { src: "/storage/medicover_acef0387.png", alt: "Medicover" },
  { src: "/storage/wellfitness-logo-1_bd1d90cf.png", alt: "Well Fitness" },
  { src: "/storage/projekt-bez-nazwy-76_f8774a1d.png", alt: "Just Gym" },
  { src: "/storage/mc-fit_ce898ad9.png", alt: "McFIT" },
  { src: "/storage/synevo_645dc7ac.png", alt: "Synevo" },
  { src: "/storage/mag-logo_c3b26df7.png", alt: "MAG" },
  { src: "/storage/anmal_4d9cf3c2.png", alt: "Anmal" },
  { src: "/storage/bps-grzybowska-81_fa12bf44.png", alt: "BPS Grzybowska 81" },
  { src: "/storage/wmkm_fed987d5.png", alt: "WMKM" },
  { src: "/storage/vortumnus_0af87059.png", alt: "Vortumnus" },
  { src: "/storage/jak-pol_3c039840.png", alt: "Jakpol" },
  { src: "/storage/form-plast_74da02c4.png", alt: "Form-Plast" },
];

export default function ClientsGallery() {
  // Duplikujemy logo, aby stworzyć efekt nieskończonego paska
  const doubleLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-track {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        .scrolling-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h3 className="text-center text-[16px] font-bold text-gray-400 tracking-widest uppercase mb-16">
          Zaufali nam liderzy rynku
        </h3>
      </div>
      
      {/* Marquee Container with fade edges */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left/Right Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="scrolling-track gap-12 md:gap-20 px-8">
          {doubleLogos.map((logo, index) => (
            <div 
              key={index} 
              className="relative flex items-center justify-center w-[220px] md:w-[280px] h-[90px] md:h-[120px] shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-[90%] max-h-[90%] object-contain filter opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-sm scale-110 md:scale-125"
                style={logo.invert ? { filter: "invert(1)" } : {}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
