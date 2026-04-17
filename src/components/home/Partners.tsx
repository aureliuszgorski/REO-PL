"use client";

import Link from "next/link";

export default function Partners() {
  const partners = [
    { src: "/images/enerconet-bialy 1.png", alt: "Enerco Net", invert: true },
    { src: "/images/mcx 1.svg", alt: "MCX", invert: false },
    { src: "/images/enerco 1.svg", alt: "Enerco", invert: false },
    { src: "/images/enercogrid 1.svg", alt: "Enerco Grid", invert: false },
  ];

  return (
    <section className="py-12 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-16 w-full">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#201B55] whitespace-nowrap lg:pr-10">
            Partnerzy
          </h3>
          
          <div className="flex flex-wrap items-center justify-between w-full flex-1 gap-6">
            {partners.map((partner, idx) => (
              <Link 
                href={`#${partner.alt.toLowerCase().replace(/\s+/g, '-')}`}
                key={idx} 
                className="relative w-[130px] md:w-[150px] lg:w-[160px] h-[60px] md:h-[70px] flex items-center justify-center shrink-0"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  style={partner.invert ? { filter: "invert(1) brightness(0)" } : {}}
                  className={`max-w-full max-h-full object-contain filter opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-opacity duration-300 drop-shadow-sm`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
