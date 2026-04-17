import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Księga Znaku (Brand Book) | Reo.pl',
  description: 'Wizualne źródło prawdy o designie i wytyczne marki Reo.pl',
};

export default function BrandBookPage() {
  const logoColors = [
    { name: "Reo Navy", hex: "#201B55", desc: "Podstawowy, najciemniejszy kolor logotypu (napis reo.pl). Używany w dominujących tłach." },
    { name: "Reo Core Blue", hex: "#1D71B8", desc: "Zasadniczy błękit wypełniający zewnętrzny kontur listka w sygnecie." },
    { name: "Reo Mint Green", hex: "#A9E8CB", desc: "Jasny, pastelowy zielony wypełniający lewy listek sygnetu." },
  ];

  const tailwindColors = [
    { name: "brand-dark", hex: "#201B55", desc: "Zaaplikowany, cieplejszy ujednolicony granat do przestrzeni interfejsowych (UI)." },
    { name: "brand-green", hex: "#1D71B8", desc: "Ciemna reo-zieleń do CTA i statusów sukcesu (solid green)." },
    { name: "brand-neon", hex: "#A9E8CB", desc: "Jasna, jaskrawa zieleń do highlightów i podświetleń (cyfrowy sznyt)." },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Header />
      
      <main className="flex-1 w-full pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#A9E8CB] mb-2">Source of Truth</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#201B55] leading-tight mb-4">
              Księga Znaku <br className="hidden md:block" />(Brand Book)
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Zbiór fundamentalnych wytycznych projektowych dla platformy Reo.pl. 
              Dokument określa dokładną kolorystykę zaczerpniętą z logotypu oraz definiuje cyfrowe odpowiedniki (UI Palette).
            </p>
          </div>

          <hr className="border-slate-200 mb-12" />

          {/* SEKCJA: Logo Colors */}
          <section className="mb-16">
             <h2 className="text-2xl font-bold text-[#201B55] mb-8">1. Kolory bazowe (z wektora logotypu)</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {logoColors.map(color => (
                 <div key={color.hex} className="group rounded-3xl overflow-hidden shadow-sm border border-slate-200 bg-white transition-all hover:shadow-md">
                   <div className="h-32 w-full flex items-center justify-center transition-transform group-hover:scale-105" style={{ backgroundColor: color.hex }}>
                     <span className="bg-white/90 text-slate-900 font-mono text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                       {color.hex}
                     </span>
                   </div>
                   <div className="p-6">
                     <h3 className="font-bold text-lg mb-1">{color.name}</h3>
                     <p className="font-mono text-sm text-[#1D71B8] mb-3">{color.hex}</p>
                     <p className="text-sm text-slate-600 leading-relaxed">{color.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </section>

          {/* SEKCJA: UI Colors */}
          <section className="mb-16">
             <h2 className="text-2xl font-bold text-[#201B55] mb-8">2. Cyfrowa Paleta UI (Tailwind)</h2>
             <p className="text-slate-600 mb-8 max-w-2xl leading-relaxed">
               Cyfrowe odcienie wykraczają nieco poza wektor, dopasowując się do wymagań nowoczesnych interfejsów webowych, jednak zachowują ścisłą wierność oryginalnemu odczuciu Reo (Granat, Głęboka Zieleń, Cyfrowy Neon).
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {tailwindColors.map(color => (
                 <div key={color.hex} className="group rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(45,47,93,0.05)] border border-slate-100 bg-white transition-all hover:-translate-y-1">
                   <div className="h-32 w-full flex items-center justify-center border-b border-black/5" style={{ backgroundColor: color.hex }}>
                     <span className="bg-black/20 text-white font-mono text-sm px-3 py-1 rounded-full shadow-inner opacity-0 group-hover:opacity-100 transition-opacity">
                       {color.hex}
                     </span>
                   </div>
                   <div className="p-6">
                     <h3 className="font-bold text-lg mb-1">{color.name}</h3>
                     <p className="font-mono text-sm text-[#1D71B8] mb-3">{color.hex}</p>
                     <p className="text-sm text-slate-600 leading-relaxed">{color.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </section>

          {/* SEKCJA: Typografia */}
          <section>
             <h2 className="text-2xl font-bold text-[#201B55] mb-8">3. Architektura Typograficzna</h2>
             <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                <div className="mb-8">
                  <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Główny Font</div>
                  <h3 className="text-5xl font-extrabold text-[#201B55] mb-2 tracking-tight">Montserrat</h3>
                  <p className="text-slate-600">Prosty, geometryczny krój bezszeryfowy dający poczucie bezpieczeństwa B2B (Zaufanie), a jednocześnie silnie "executive" w grubych odmianach (Extrabold).</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-3 items-center border-b border-slate-100 pb-4">
                     <div className="col-span-1 text-sm text-slate-500">Nagłówki (H1-H2)</div>
                     <div className="col-span-2 font-extrabold text-3xl text-[#201B55] tracking-tight">Extrabold / 800</div>
                  </div>
                  <div className="grid grid-cols-3 items-center border-b border-slate-100 pb-4">
                     <div className="col-span-1 text-sm text-slate-500">Tytuły kart (H3-H4)</div>
                     <div className="col-span-2 font-bold text-xl text-[#201B55]">Bold / 700</div>
                  </div>
                  <div className="grid grid-cols-3 items-center border-b border-slate-100 pb-4">
                     <div className="col-span-1 text-sm text-slate-500">CTA (Przyciski)</div>
                     <div className="col-span-2 font-semibold text-base text-[#A9E8CB]">Semibold / 600</div>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                     <div className="col-span-1 text-sm text-slate-500">Linia Tekstu (P)</div>
                     <div className="col-span-2 font-medium text-base text-slate-600">Medium / 500</div>
                  </div>
                </div>
             </div>
          </section>

          {/* SEKCJA: Design Language */}
          <section className="mb-24">
             <h2 className="text-2xl font-bold text-[#201B55] mb-8">4. Język Wizualny i Geometria (Design Language)</h2>
             
             <div className="space-y-8">
                {/* Geometria Organiczna */}
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(45,47,93,0.05)] border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                   <div className="w-32 h-32 bg-[#201B55] rounded-[40px] rounded-br-none relative flex-shrink-0">
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-white rounded-tl-[24px] translate-x-px translate-y-px"></div>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-[#201B55] mb-3">Organiczne Wycięcia (Notches & Cutouts)</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Najbardziej unikalną cechą Reo.pl są zaokrąglone elementy, które nawzajem się przenikają, tworząc kształty "puzzli" lub "folderów". Moduły nie są zwykłymi prostokątami – posiadają agresywne zaokrąglenia (rzędu <code className="bg-slate-100 text-[#A9E8CB] px-2 py-0.5 rounded">40px</code>) oraz wcięcia ratunkowe (concave corners), które umożliwiają zagnieżdżanie w nich innych elementów (np. logo nakładające się na stopkę, lub ikony strzałek "wchodzące" w obrazy).
                      </p>
                   </div>
                </div>

                {/* Pill Buttons & Softness */}
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(45,47,93,0.05)] border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                   <div className="flex-shrink-0 flex items-center justify-center w-32">
                      <div className="px-6 py-3 bg-[#A9E8CB] rounded-full text-[#201B55] font-bold text-sm tracking-wide shadow-sm">
                         Pill Button
                      </div>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-[#201B55] mb-3">Miękkość i Przyjazność (Soft UI)</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Design unika ostrych kątów. Przyciski Call-to-Action przyjmują formę w pełni zaokrąglonych "pigułek" (pill-shaped, <code className="bg-slate-100 text-[#A9E8CB] px-2 py-0.5 rounded">rounded-full</code>). Klawisze i tagi są tłem dla głębokiego granatu, a ich miękka zieleń i owalne kształty tworzą przyjazny, "ludzki" i ekologiczny odbiór marki, łagodząc twardy B2B-owy charakter branży energetycznej.
                      </p>
                   </div>
                </div>

                {/* Duża Typografia */}
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(45,47,93,0.05)] border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                   <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
                      <span className="text-[80px] font-extrabold text-[#1D71B8] leading-none tracking-tighter">Aa</span>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-[#201B55] mb-3">Masywny Krój i Wyrazistość</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Zamiast chować się w drobnych opisach, Reo.pl używa ciężkich, bardzo pogrubionych krojów pisma (Extrabold) dla wszystkich nagłówków sekcji. Typografia wypełnia przestrzeń. Docelowo sprawdzimy dokładny krój bazowy w kodzie produkcji (często uważa się, że to Poppins, Gilroy lub zindywidualizowany Montserrat), aby uzyskać idealne 1:1 spójności formy liter, szczególnie charakterystycznych okrągłych kropli w literze "a" oraz geometrycznego "e".
                      </p>
                   </div>
                </div>
             </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
