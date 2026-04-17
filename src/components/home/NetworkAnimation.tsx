"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function NetworkAnimation() {
  const sources = [
    { id: 's1', label: 'Wielkoskalowe OZE', detail: 'Profil Generacji', path: 'M 180 180 C 350 180, 350 360, 500 360', x: 180, y: 180 },
    { id: 's2', label: 'Farmy Wiatrowe', detail: 'Wolumen i Gwarancje', path: 'M 150 360 C 350 360, 350 360, 500 360', x: 150, y: 360 },
    { id: 's3', label: 'Magazyny energii', detail: 'Bilansowanie On-site', path: 'M 180 540 C 350 540, 350 360, 500 360', x: 180, y: 540 }
  ];

  const buyers = [
    { id: 'b1', label: 'Zarządcy Nieruchomości', detail: 'Zagregowane Zużycie', path: 'M 500 360 C 650 360, 650 180, 820 180', x: 820, y: 180 },
    { id: 'b2', label: 'Sieci Handlowe', detail: 'Multi-Site Demand', path: 'M 500 360 C 650 360, 650 360, 850 360', x: 850, y: 360 },
    { id: 'b3', label: 'Zakłady Przemysłowe', detail: 'Kontrakty BASE Load', path: 'M 500 360 C 650 360, 650 540, 820 540', x: 820, y: 540 }
  ];

  return (
    <section className="relative w-full flex flex-col font-sans text-white bg-slate-900 overflow-hidden py-24 border-y border-black/10 shadow-[inset_0_20px_50px_rgba(0,0,0,0.2)]">
      
      <style>{`
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 24s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-slow 32s linear infinite reverse;
        }
      `}</style>
      
      {/* Ciemne tło zgodne z marką Reo (Granat/Slate z odcieniami zieleni) */}
      <div className="absolute inset-0 bg-[#201B55] z-0"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[42%_58%] items-center gap-12 lg:gap-24 px-6 md:px-[5%]">
        
        {/* LEWA STRONA - Profesjonalna Typografia */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <img 
            src="https://reo.pl/images/lider-transformacji-energetycznej.png" 
            alt="Lider transformacji energetycznej" 
            className="h-24 md:h-32 w-auto mb-10 opacity-90 hover:opacity-100 transition-opacity" 
          />
          
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight tracking-tight pb-4">
            Inteligentna infrastruktura rynku <br />
            <motion.span 
              animate={{ 
                backgroundPosition: ["200% center", "0% center"],
                filter: [
                  "brightness(1) drop-shadow(0 0 0px rgba(169,232,203,0))", 
                  "brightness(1.2) drop-shadow(0 0 20px rgba(169,232,203,0.6))", 
                  "brightness(1) drop-shadow(0 0 0px rgba(169,232,203,0))"
                ] 
              }}
              transition={{ 
                backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                filter: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-block pb-2 -mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1D71B8] via-[#A9E8CB] to-[#1D71B8] animate-gradient-x bg-[length:200%_auto]"
            >
              zielonej energii.
            </motion.span>
          </h2>
          
          <p className="mt-8 text-base leading-relaxed text-slate-300 md:text-lg mb-8">
            Reo.pl to potężne narzędzie, zdejmujące z barków biznesu chaos rozliczeń. Podaż OZE i popyt spotykają się w jednym centralnym punkcie inteligentnego obrotu i bilansowania rynku.
          </p>
          
        </motion.div>

        {/* PRAWA STRONA - Jednolity SVG układ abstrakcyjnej sieci OZE */}
        <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center overflow-visible">
          
          {/* Poświata Centralnego Node'a */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#A9E8CB]/10 rounded-full blur-[100px] pointer-events-none" />

          <svg viewBox="0 0 1000 720" className="w-full h-full overflow-visible">
            <defs>
              {/* Gradienty dla ścieżek dopasowane do Brand Green/Neon */}
              <linearGradient id="lineIn" x1="150" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(24,201,145,0.0)" />
                <stop offset="80%" stopColor="rgba(24,201,145,0.5)" />
                <stop offset="100%" stopColor="rgba(24,201,145,0.8)" />
              </linearGradient>
              
              <linearGradient id="lineOut" x1="500" y1="0" x2="850" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(24,201,145,0.8)" />
                <stop offset="20%" stopColor="rgba(24,201,145,0.5)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
              </linearGradient>
              
              <filter id="svgGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="glow"/>
                <feMerge>
                  <feMergeNode in="glow"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {sources.map(n => <path key={n.id+'base'} d={n.path} fill="none" stroke="url(#lineIn)" strokeWidth="2.5" className="opacity-30" />)}
            {buyers.map(n => <path key={n.id+'base'} d={n.path} fill="none" stroke="url(#lineOut)" strokeWidth="2.5" className="opacity-30" />)}

            {sources.map((node, i) => (
              <circle key={node.id+'dot'} r="6" fill="#A9E8CB" filter="url(#svgGlow)">
                <animateMotion dur={`${5 + i*0.8}s`} repeatCount="indefinite" path={node.path} />
              </circle>
            ))}
            {buyers.map((node, i) => (
              <circle key={node.id+'dot'} r="6" fill="#f8fafc" filter="url(#svgGlow)">
                <animateMotion dur={`${4.5 + i*0.8}s`} repeatCount="indefinite" path={node.path} />
              </circle>
            ))}

            {/* ZRODLA (LEWA) */}
            {sources.map((node, i) => (
              <g key={node.id}>
                <circle cx={node.x} cy={node.y} r="16" fill="rgba(24,201,145,0.12)" className="animate-pulse" style={{ animationDelay: `${i*0.4}s`, animationDuration: '3s' }} />
                <circle cx={node.x} cy={node.y} r="4" fill="#201B55" stroke="#A9E8CB" strokeWidth="1.5" />
                
                <text x={node.x - 24} y={node.y - 6} fill="#e2e8f0" fontSize="18" fontWeight="400" textAnchor="end" className="tracking-wide">
                  {node.label}
                </text>
                <text x={node.x - 24} y={node.y + 14} fill="#A6EBC5" fontSize="12" fontWeight="600" textAnchor="end" className="uppercase tracking-widest opacity-70">
                  {node.detail}
                </text>
              </g>
            ))}

            {/* ODBIORCY (PRAWA) */}
            {buyers.map((node, i) => (
              <g key={node.id}>
                <circle cx={node.x} cy={node.y} r="16" fill="rgba(255,255,255,0.05)" className="animate-pulse" style={{ animationDelay: `${i*0.4}s`, animationDuration: '3s' }} />
                <circle cx={node.x} cy={node.y} r="4" fill="#201B55" stroke="#cbd5e1" strokeWidth="1.5" />
                
                <text x={node.x + 24} y={node.y - 6} fill="#e2e8f0" fontSize="18" fontWeight="400" textAnchor="start" className="tracking-wide">
                  {node.label}
                </text>
                <text x={node.x + 24} y={node.y + 14} fill="#cbd5e1" fontSize="12" fontWeight="600" textAnchor="start" className="uppercase tracking-widest opacity-60">
                  {node.detail}
                </text>
              </g>
            ))}

            {/* CORE ORCHESTRATION SILNIK */}
            <g className="core">
              {/* Dynamiczne linie (orbity/pierścienie) zamiast kulek */}
              <circle cx="500" cy="360" r="82" fill="none" stroke="rgba(24,201,145,0.2)" strokeWidth="1.5" strokeDasharray="15 30 45 30" className="animate-spin-slow" style={{ transformOrigin: "500px 360px" }} />
              <circle cx="500" cy="360" r="76" fill="none" stroke="rgba(24,201,145,0.4)" strokeWidth="1" strokeDasharray="60 40 10 20" className="animate-spin-reverse" style={{ transformOrigin: "500px 360px", animationDuration: "18s" }} />
              <circle cx="500" cy="360" r="62" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 8" className="animate-spin-slow" style={{ transformOrigin: "500px 360px", animationDuration: "12s" }} />
              
              {/* Główny przycisk centralny Reo.pl */}
              <circle cx="500" cy="360" r="42" fill="rgba(45,47,93,0.9)" stroke="rgba(24,201,145,0.6)" strokeWidth="1.5" filter="url(#svgGlow)" />
              <circle cx="500" cy="360" r="42" fill="rgba(45,47,93,0.95)" />
              
              <text x="500" y="365" fill="#ffffff" fontSize="20" fontWeight="600" textAnchor="middle" className="tracking-widest">
                Reo<tspan fill="#A9E8CB">.</tspan>pl
              </text>
              
              {/* Pill Górny */}
              <g transform="translate(0, -75)">
                {/* Estetyczne Paczki Danych (Pieniądze) */}
                <g opacity="0">
                  <rect x="435" y="323" width="56" height="22" rx="11" fill="rgba(24,201,145,0.1)" stroke="rgba(24,201,145,0.3)" strokeWidth="0.5" />
                  <text x="463" y="338" fill="#A9E8CB" fontSize="10" fontWeight="700" className="tracking-widest" textAnchor="middle">+ PLN</text>
                  <animate attributeName="opacity" values="0; 0; 1; 0" keyTimes="0; 0.1; 0.8; 1" dur="4s" begin="0s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="translate" values="0,0; -10,-25; -15,-45" dur="4s" begin="0s" repeatCount="indefinite" />
                </g>
                <g opacity="0">
                  <rect x="510" y="323" width="62" height="22" rx="11" fill="rgba(29,113,184,0.15)" stroke="rgba(29,113,184,0.4)" strokeWidth="0.5" />
                  <text x="541" y="338" fill="#60A5FA" fontSize="10" fontWeight="700" className="tracking-widest" textAnchor="middle">+ ZYSK</text>
                  <animate attributeName="opacity" values="0; 0; 1; 0" keyTimes="0; 0.1; 0.8; 1" dur="4.6s" begin="1.5s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="translate" values="0,0; 10,-30; 15,-55" dur="4.6s" begin="1.5s" repeatCount="indefinite" />
                </g>
                <g opacity="0">
                  <rect x="470" y="316" width="60" height="22" rx="11" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                  <circle cx="481" cy="327" r="2.5" fill="#fff" filter="url(#svgGlow)"/>
                  <text x="504" y="331" fill="#ffffff" fontSize="10" fontWeight="700" className="tracking-widest" textAnchor="middle">MARŻA</text>
                  <animate attributeName="opacity" values="0; 0; 1; 0" keyTimes="0; 0.1; 0.8; 1" dur="5.2s" begin="2.8s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="translate" values="0,0; 0,-35; 0,-70" dur="5.2s" begin="2.8s" repeatCount="indefinite" />
                </g>

                <rect x="385" y="348" width="230" height="28" rx="14" fill="rgba(24,201,145,0.1)" stroke="rgba(24,201,145,0.2)" strokeWidth="1" />
                <circle cx="400" cy="362" r="3.5" fill="#A9E8CB" />
                <text x="508" y="366" fill="#A9E8CB" fontSize="10.5" fontWeight="600" textAnchor="middle" className="uppercase tracking-widest">
                  Inteligentny Matching
                </text>
              </g>

              {/* Pill Dolny */}
              <g transform="translate(0, 75)">
                <rect x="370" y="348" width="260" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <circle cx="385" cy="362" r="3.5" fill="#cbd5e1" />
                <text x="508" y="366" fill="#cbd5e1" fontSize="10.5" fontWeight="600" textAnchor="middle" className="uppercase tracking-widest">
                  Certyfikacja i Raportowanie
                </text>

                {/* Estetyczne Paczki Danych (Raporty) */}
                <g opacity="0">
                  <rect x="440" y="373" width="50" height="22" rx="11" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                  <text x="465" y="388" fill="#e2e8f0" fontSize="10" fontWeight="700" className="tracking-widest" textAnchor="middle">ESG</text>
                  <animate attributeName="opacity" values="0; 0; 1; 0" keyTimes="0; 0.1; 0.8; 1" dur="4.2s" begin="0.5s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="translate" values="0,0; -10,30; -20,55" dur="4.2s" begin="0.5s" repeatCount="indefinite" />
                </g>
                <g opacity="0">
                  <rect x="500" y="373" width="66" height="22" rx="11" fill="rgba(24,201,145,0.1)" stroke="rgba(24,201,145,0.3)" strokeWidth="0.5" />
                  <circle cx="511" cy="384" r="2.5" fill="#A9E8CB" filter="url(#svgGlow)"/>
                  <text x="536" y="388" fill="#A9E8CB" fontSize="10" fontWeight="700" className="tracking-widest" textAnchor="middle">RAPORT</text>
                  <animate attributeName="opacity" values="0; 0; 1; 0" keyTimes="0; 0.1; 0.8; 1" dur="4.8s" begin="2s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="translate" values="0,0; 12,35; 20,60" dur="4.8s" begin="2s" repeatCount="indefinite" />
                </g>
                <g opacity="0">
                  <rect x="460" y="380" width="80" height="22" rx="11" fill="rgba(148,163,184,0.05)" stroke="rgba(148,163,184,0.2)" strokeWidth="0.5" />
                  <text x="500" y="395" fill="#cbd5e1" fontSize="10" fontWeight="700" className="tracking-widest" textAnchor="middle">-30% CO2</text>
                  <animate attributeName="opacity" values="0; 0; 1; 0" keyTimes="0; 0.1; 0.8; 1" dur="5.5s" begin="3.2s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="translate" values="0,0; 0,35; 0,70" dur="5.5s" begin="3.2s" repeatCount="indefinite" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
