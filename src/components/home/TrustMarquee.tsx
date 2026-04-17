"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "/storage/cm-damiana_604f2631.png", alt: "Damiana" },
  { src: "/storage/medicover_acef0387.png", alt: "Medicover" },
  { src: "/storage/wellfitness-logo-1_bd1d90cf.png", alt: "Well Fitness" },
  { src: "/storage/projekt-bez-nazwy-76_f8774a1d.png", alt: "Just Gym" },
  { src: "/storage/mc-fit_ce898ad9.png", alt: "McFIT" },
  { src: "/storage/synevo_645dc7ac.png", alt: "Synevo" },
  // Enerconet with white logo might not be visible on white bg, applying inverted filter or using original
  { src: "/images/enerconet-bialy 1.png", alt: "Enerconet", invert: true },
  { src: "/images/mcx 1.svg", alt: "MCX" },
];

export default function TrustMarquee() {
  return (
    <section className="py-12 bg-white border-b border-black/5 overflow-hidden">
      <div className="flex relative items-center">
        {/* Gradient Fades for Smooth Enter/Exit */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24 px-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' /* standard CSS fallback if framer doesn't easily pause without custom hook */ }}
          // Note: Native Framer Motion pause-on-hover requires more complex state mapping. 
          // We will rely on continuous smooth scroll for now to avoid stuttering.
        >
           {/* Duplicate the array twice seamlessly to create an infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="w-[80px] md:w-[110px] h-[30px] md:h-[40px] flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer ${logo.invert ? "invert brightness-0" : ""}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
