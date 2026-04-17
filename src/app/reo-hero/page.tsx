import React from 'react';

export default function ReoHeroAnimation() {
  const sources = [
    { id: 's1', label: 'Wielkoskalowe OZE', detail: 'Profil Generacji', path: 'M 180 180 C 350 180, 350 360, 500 360', x: 180, y: 180 },
    { id: 's2', label: 'Farmy Wiatrowe', detail: 'Wolumen i Gwarancje', path: 'M 150 360 C 350 360, 350 360, 500 360', x: 150, y: 360 },
    { id: 's3', label: 'Magazynowanie', detail: 'Bilansowanie On-site', path: 'M 180 540 C 350 540, 350 360, 500 360', x: 180, y: 540 }
  ];

  const buyers = [
    { id: 'b1', label: 'Zarządcy Nieruchomości', detail: 'Zagregowane Zużycie', path: 'M 500 360 C 650 360, 650 180, 820 180', x: 820, y: 180 },
    { id: 'b2', label: 'Sieci Handlowe', detail: 'Multi-Site Demand', path: 'M 500 360 C 650 360, 650 360, 850 360', x: 850, y: 360 },
    { id: 'b3', label: 'Zakłady Przemysłowe', detail: 'Kontrakty BASE Load', path: 'M 500 360 C 650 360, 650 540, 820 540', x: 820, y: 540 }
  ];

  const outcomes = [
    { title: 'Zabezpieczenie Cen (Hedging)', desc: 'Długoterminowa przewidywalność kosztów w ramach zabezpieczonych kontraktów cPPA.' },
    { title: 'Maksymalizacja Rentowności OZE', desc: 'Wyższa wartość wyprodukowanego wolumenu dzięki inteligentnemu dopasowywaniu profilu (matching).' },
    { title: 'Granularne Raportowanie ESG', desc: 'Zautomatyzowany strumień transparentnych danych dotyczących śladu węglowego i gwarancji pochodzenia (GoO).' },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col font-sans text-white bg-[#030712] selection:bg-emerald-500/30">
      
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
      
      <div className="flex-1 w-full max-w-[1440px] mx-auto grid lg:grid-cols-[440px_1fr] items-center gap-12 px-6 lg:px-12 pt-24 pb-12">
        
        {/* LEWA STRONA - Profesjonalna Typografia */}
        <div className="relative z-10 w-full max-w-[500px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 text-[10px] font-medium tracking-widest text-slate-400 uppercase">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
            Silnik Centralny platformy
          </div>
          
          <h1 className="mt-8 text-[44px] leading-[1.05] tracking-tight font-light text-white sm:text-5xl lg:text-6xl">
            Infrastruktura <span className="font-medium text-emerald-400">nowego rynku</span><br />
            zielonej energii.
          </h1>
          
          <p className="mt-6 text-base font-light leading-relaxed text-slate-400 md:text-lg">
            Zintegrowany ekosystem cyfrowy. reo.pl to potężne narzędzie, zdejmujące z barków biznesu chaos rozliczeń. Podaż OZE i popyt spotykają się w jednym centralnym punkcie inteligentnego obrotu, bilansowania rynkowego i dokumentacji ESG.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-8 py-3.5 text-[13px] font-medium text-slate-950 transition-opacity hover:opacity-90">
              Poznaj funkcjonowanie
            </button>
            <button className="rounded-full border border-white/10 px-8 py-3.5 text-[13px] font-medium text-white transition-colors hover:bg-white/5">
              Porozmawiaj z ekspertem
            </button>
          </div>
        </div>

        {/* PRAWA STRONA - Jednolity SVG układ abstrakcyjnej sieci OZE */}
        <div className="relative w-full h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center overflow-visible">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <svg viewBox="0 0 1000 720" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="lineIn" x1="150" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(52,211,153,0.0)" />
                <stop offset="80%" stopColor="rgba(52,211,153,0.4)" />
                <stop offset="100%" stopColor="rgba(52,211,153,0.7)" />
              </linearGradient>
              
              <linearGradient id="lineOut" x1="500" y1="0" x2="850" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(52,211,153,0.7)" />
                <stop offset="20%" stopColor="rgba(52,211,153,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
              </linearGradient>
              
              {/* x,y -50 width 200% prevents clipping for glowing fast paths */}
              <filter id="svgGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="glow"/>
                <feMerge>
                  <feMergeNode in="glow"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {sources.map(n => <path key={n.id+'base'} d={n.path} fill="none" stroke="url(#lineIn)" strokeWidth="1" className="opacity-20" />)}
            {buyers.map(n => <path key={n.id+'base'} d={n.path} fill="none" stroke="url(#lineOut)" strokeWidth="1" className="opacity-20" />)}

            {sources.map((node, i) => (
              <circle key={node.id+'dot'} r="2" fill="#34d399" filter="url(#svgGlow)">
                <animateMotion dur={`${5 + i*0.8}s`} repeatCount="indefinite" path={node.path} />
              </circle>
            ))}
            {buyers.map((node, i) => (
              <circle key={node.id+'dot'} r="2" fill="#f8fafc" filter="url(#svgGlow)">
                <animateMotion dur={`${4.5 + i*0.8}s`} repeatCount="indefinite" path={node.path} />
              </circle>
            ))}

            {/* ZRODLA (LEWA) */}
            {sources.map((node, i) => (
              <g key={node.id}>
                <circle cx={node.x} cy={node.y} r="16" fill="rgba(52,211,153,0.08)" className="animate-pulse" style={{ animationDelay: `${i*0.4}s`, animationDuration: '3s' }} />
                <circle cx={node.x} cy={node.y} r="4" fill="#030712" stroke="#34d399" strokeWidth="1.5" />
                
                <text x={node.x - 24} y={node.y - 4} fill="#e2e8f0" fontSize="13" fontWeight="300" textAnchor="end" className="tracking-wide">
                  {node.label}
                </text>
                <text x={node.x - 24} y={node.y + 12} fill="#64748b" fontSize="9" fontWeight="500" textAnchor="end" className="uppercase tracking-[0.2em]">
                  {node.detail}
                </text>
              </g>
            ))}

            {/* ODBIORCY (PRAWA) */}
            {buyers.map((node, i) => (
              <g key={node.id}>
                <circle cx={node.x} cy={node.y} r="16" fill="rgba(255,255,255,0.03)" className="animate-pulse" style={{ animationDelay: `${i*0.4}s`, animationDuration: '3s' }} />
                <circle cx={node.x} cy={node.y} r="4" fill="#030712" stroke="#cbd5e1" strokeWidth="1.5" />
                
                <text x={node.x + 24} y={node.y - 4} fill="#e2e8f0" fontSize="13" fontWeight="300" textAnchor="start" className="tracking-wide">
                  {node.label}
                </text>
                <text x={node.x + 24} y={node.y + 12} fill="#64748b" fontSize="9" fontWeight="500" textAnchor="start" className="uppercase tracking-[0.2em]">
                  {node.detail}
                </text>
              </g>
            ))}

            {/* CORE ORCHESTRATION SILNIK */}
            <g className="core">
              <circle cx="500" cy="360" r="76" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="1" strokeDasharray="2 8" className="animate-spin-slow" style={{ transformOrigin: "500px 360px" }} />
              <circle cx="500" cy="360" r="62" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 4" className="animate-spin-reverse" style={{ transformOrigin: "500px 360px" }} />
              
              <circle cx="500" cy="360" r="42" fill="rgba(3,7,18,0.9)" stroke="rgba(52,211,153,0.4)" strokeWidth="1" filter="url(#svgGlow)" />
              <circle cx="500" cy="360" r="42" fill="rgba(3,7,18,0.95)" />
              
              <text x="500" y="365" fill="#ffffff" fontSize="18" fontWeight="300" textAnchor="middle" className="tracking-widest">
                reo<tspan fill="#a7f3d0">.</tspan>pl
              </text>
              
              {/* Pill Górny */}
              <g transform="translate(0, -75)">
                <rect x="420" y="350" width="160" height="22" rx="11" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.15)" strokeWidth="1" />
                <circle cx="432" cy="361" r="2.5" fill="#34d399" />
                <text x="506" y="364" fill="#34d399" fontSize="8" fontWeight="500" textAnchor="middle" className="uppercase tracking-[0.2em]">
                  Inteligentny Matching
                </text>
              </g>

              {/* Pill Dolny */}
              <g transform="translate(0, 75)">
                <rect x="410" y="348" width="180" height="22" rx="11" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="422" cy="359" r="2.5" fill="#cbd5e1" />
                <text x="506" y="362" fill="#cbd5e1" fontSize="8" fontWeight="500" textAnchor="middle" className="uppercase tracking-[0.2em]">
                  Certyfikacja i Raportowanie ESG
                </text>
              </g>

            </g>
          </svg>
        </div>
      </div>

      <div className="w-full mt-auto relative bg-[#030712]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {outcomes.map((item, i) => (
              <div key={i} className="flex flex-col gap-2 relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[14px] font-medium tracking-wide text-white/90">{item.title}</div>
                </div>
                <div className="text-[13px] font-light leading-relaxed text-slate-400 pl-8">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
