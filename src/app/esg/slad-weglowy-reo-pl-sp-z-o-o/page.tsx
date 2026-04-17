"use client";

import Link from "next/link";
import { ChevronRight, CloudFog, Cloud, Car, Factory, Building2, BatteryCharging, Factory as FactoryIcon, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SladWeglowyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Target Banner */}
      <section className="bg-slate-900 relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-slate-300 mb-6 uppercase tracking-wider backdrop-blur-sm">
            Strategia ESG Reo.pl
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Ślad węglowy <span className="text-brand-green">Reo.pl</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            Precyzyjne raportowanie emisji gazów cieplarnianych według standardu GHG Protocol (Zakres 1 i 2).
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-slate-900 transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/esg/zrownowazony-rozwoj" className="hover:text-slate-900 transition-colors">ESG</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Ślad węglowy Reo.pl</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium leading-relaxed">
                  Dostarczamy naszym klientom wyłącznie w <strong>100% zieloną energię elektryczną</strong>, aktywnie przyczyniając się do ochrony środowiska. Odpowiedzialność za planetę zaczynamy od nas samych, dlatego obliczyliśmy i monitorujemy własne emisje w Zakresach 1 i 2 zgodnie z rygorem GHG Protocol.
                </p>
              </div>

              {/* Definica Śladu */}
              <div className="bg-white p-8 md:p-12 rounded-3xl mb-16 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h2 className="text-2xl font-extrabold text-[#1e1a3b] mb-6 flex items-center gap-3">
                  <CloudFog className="w-8 h-8 text-slate-400" /> 
                  Standard GHG Protocol
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <Factory className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-slate-800 mb-1">Zakres 1 (Scope 1)</strong>
                      <p className="text-sm text-slate-600">Emisje bezpośrednie generowane we własnych obiektach oraz z paliw spalanych w naszej flocie samochodowej.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <BatteryCharging className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                    <div>
                      <strong className="block text-slate-800 mb-1">Zakres 2 (Scope 2)</strong>
                      <p className="text-sm text-slate-600">Emisje pośrednie związane z popytem na energię. W Reo.pl nasza konsumpcja energii to <strong>100% OZE</strong>. Uwzględniamy tu także energię cieplną zużywaną w budynkach biurowych.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <Building2 className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-slate-800 mb-1">Zakres 3 (Scope 3)</strong>
                      <p className="text-sm text-slate-600">Emisje w łańcuchu dostaw, dojazdy pracowników i odpady. (Stopniowo audytowane w kolejnych etapach strategii).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wyniki Reo.pl */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Nasz własny audyt (2024 / 2025)</h2>
              <p className="text-slate-600 mb-8 max-w-3xl">
                Rozwój i ekspansja na nowe rynki (wzrost zatrudnienia, nowe biura) powodowały chwilowe wahania naszych emisji, co stanowi naturalny proces rozwoju kapitałowego. Jesteśmy w 100% transparentni odnośnie tych metryk. 
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Car className="w-5 h-5 text-slate-400" /> Wahania floty rezerwowej
                  </h4>
                  <p className="text-sm text-slate-600">
                    W minionym roku na emisje Scope 1 wpłynęła poważna awaria jednego z naszych dedykowanych aut elektrycznych (EV), co zmusiło inżynierów do użycia aut spalinowych w terenie inwestycyjnym. Monitorujemy i redukujemy ten współczynnik.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-l-brand-green shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-brand-green" /> OZE dla biura i infrastruktury
                  </h4>
                  <p className="text-sm text-slate-600">
                    Pobieramy zieloną energię do utrzymania naszej platformy TGE i biura zarządu. Metodologia (market-based vs location-based) wykazuje, że nasza decyzja ucieczki ze struktury ogólnopolskiej drastycznie zniwelowała ślad zarządczy.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-slate-100 p-8 md:p-12 rounded-3xl relative overflow-hidden">
                <h3 className="text-2xl font-extrabold text-[#1e1a3b] mb-4">Ty też możesz drastycznie ograniczyć emisję</h3>
                <p className="text-slate-600 mb-8">
                  Zakup Zielonej Energii (PPA) z gwarancjami pochodzenia (OZE) to najszybszy krok w stronę poprawy Twojego wyniku Scope 2 na potrzeby audytu Dyrektywy CSRD. To zmiana niemalże logistycznie natychmiastowa.
                </p>
                <div className="flex gap-4">
                  <Link href="/oferta/umowy-dlugoterminowe-ppa" className="bg-brand-dark hover:bg-black text-white font-bold px-6 py-3 rounded-xl transition-colors">
                    Sprawdź zieloną ofertę
                  </Link>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">ESG w Reo.pl</h3>
                <ul className="space-y-3 mb-6">
                  <li>
                    <Link href="/esg/zrownowazony-rozwoj" className="text-sm text-slate-600 hover:text-brand-green flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Zrównoważony rozwój
                    </Link>
                  </li>
                  <li>
                    <Link href="/esg/matryca-istotnosci" className="text-sm text-slate-600 hover:text-brand-green flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Matryca istotności
                    </Link>
                  </li>
                  <li>
                    <Link href="/esg/reopl-i-envirly-partnerstwo" className="text-sm text-slate-600 hover:text-brand-green flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Partnerstwo Envirly
                    </Link>
                  </li>
                  <li>
                    <Link href="/esg/strategia-esg-reopl-na-lata-2025-2027" className="text-sm text-slate-600 hover:text-brand-green flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Strategia 2025-2027
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
