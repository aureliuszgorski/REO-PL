"use client";

import Link from "next/link";
import { ChevronRight, Leaf, ShieldCheck, Zap, Handshake, LeafyGreen, Building2, CheckCircle2, Car } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ZielonaEnergiaDlaAutomotivePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Target Banner */}
      <section className="bg-slate-900 relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-green mb-6 uppercase tracking-wider">
            Reo.pl B2B dla Przemysłu
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Zielona energia dla <span className="text-brand-green">Automotive</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Sektor Automotive i elektromobilność to czołówka innowacji. Zasilaj stacje ładowania EV i fabryki wyłącznie czystą, w 100% odnawialną energią elektryczną z platformy Reo.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-brand-green transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/oferta/umowy-dlugoterminowe-ppa" className="hover:text-brand-green transition-colors">Oferta</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Zielona energia dla branży automotive</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium">
                  Trudno wyobrazić sobie rewolucję aut elektrycznych napędzanych węglem. Zasilaj sieci dealerów, warsztatów, parków maszyn i flot firmowych energią w 100% z OZE. Zbuduj autentyczny obraz lidera ekologii.
                </p>
              </div>

              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Wyzwania i Korzyści Automotive</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:border-brand-green/30 transition-colors">
                  <Zap className="w-8 h-8 text-brand-green shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Ładowanie Flot EV</h3>
                    <p className="text-slate-600 text-sm">Zagwarantuj stabilną cenę energii dla firmowych farm ładowania prądem stałym (DC) i zmiennym (AC).</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:border-brand-green/30 transition-colors">
                  <Leaf className="w-8 h-8 text-brand-green shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Dekomisjonowanie CO2</h3>
                    <p className="text-slate-600 text-sm">Obniżenie wskaźnika emisji węglowych w łańcuchu dostaw produkcji i na linii montażowej.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-indigo-800"></div>
                <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-4">Dlaczego OZE od Reo.pl?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">Autentyczność zmian</strong>
                      <span className="text-slate-600 text-sm">100% z odnawialnych źródeł (biogaz, słońce, wiatr). Gwarancja pochodzenia to ostateczny dowód bycia "zeroemisyjnym" koncernem.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">Modele biznesowe cPPA / vPPA</strong>
                      <span className="text-slate-600 text-sm">Możliwość wejścia w potężne, wirtualne kontrakty PPA na 10 czy 15 lat, idealne dla dużych importerów i producentów aut.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-600 p-8 md:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
                <Car className="w-16 h-16 text-indigo-200 mb-4" />
                <h3 className="text-3xl font-bold mb-4 relative z-10">Zrównoważ produkcję, zoptymalizuj marżę</h3>
                <p className="text-indigo-100 max-w-xl mb-8 relative z-10">
                  Przetestuj nasze symulacje biznesowe i dostosuj ofertę. Sprawdź tabelę dostaw OZE Reo.pl.
                </p>
                <Link href="/kalkulator" className="bg-white hover:bg-slate-100 text-indigo-600 font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                  Przejdź do formularza <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

            </article>

            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Ekspert branży Automotiv</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Duże zapotrzebowanie? Skonstruujemy dedykowaną Umowę PPA dla rygorystycznych reżimów działania Twojej fabryki samochodów 24/7.
                </p>
                <Link href="/kontakt" className="block w-full bg-slate-900 hover:bg-black text-white text-center py-3 rounded-xl font-semibold transition-colors">
                  Umów spotkanie online
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
