"use client";

import Link from "next/link";
import { ChevronRight, Calculator, PieChart, LineChart, Handshake, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EnvirlyPartnerstwoPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Target Banner */}
      <section className="bg-indigo-950 relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-900/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-indigo-200 mb-6 uppercase tracking-wider backdrop-blur-sm">
            Partnerstwo Strategiczne
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Reo.pl & <span className="text-[#00E5FF]">Envirly</span>
          </h1>
          <p className="text-lg text-indigo-200 max-w-2xl font-medium">
            Połączyliśmy siły z pionierem kalkulatorów emisji. Kompleksowe rozwiązanie: energia OZE + kalkulacja śladu węglowego w jednym miejscu.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/esg/zrownowazony-rozwoj" className="hover:text-indigo-600 transition-colors">ESG</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-indigo-600 font-bold">Partnerstwo Envirly</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm mb-16">
                <div className="flex-1">
                  <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-4">Gwarancja Czystego Łańcucha Dostaw</h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    Dzięki współpracy Reo.pl i Envirly kompleksowe podejście do zrównoważonego rozwoju masz teraz na wyciągnięcie ręki. Z Reo.pl kupujesz w 100% zieloną energię od wytwórców OZE. Z Envirly - mierzysz i raportujesz ten proces (Scope 2) w certyfikowanym narzędziu.
                  </p>
                  <a href="https://platform.envirly.com/register_reo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1e1a3b] hover:bg-black text-white font-bold px-6 py-3 rounded-lg transition-colors">
                    <Calculator className="w-5 h-5" /> Oblicz Ślad Węglowy za darmo
                  </a>
                </div>
                <div className="w-full md:w-1/3 shrink-0 flex justify-center">
                  <div className="w-48 h-48 bg-slate-50 flex items-center justify-center rounded-full border-8 border-indigo-50 shadow-inner">
                    <Handshake className="w-20 h-20 text-slate-300" />
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Dlaczego Envirly by Quantifier?</h2>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">Zgodność z ISO & GHG</h4>
                  <p className="text-sm text-slate-600">Narzędzie zatwierdzone certyfikatami i pełną zbieżnością z dyrektywą CSRD (ESRS) i wytycznymi CBAM.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <PieChart className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">Eliminacja chaosu z Excela</h4>
                  <p className="text-sm text-slate-600">Koniec manualnego zliczania faktur. Zautomatyzowane raportowanie śladu produkcyjnego i biurowego (LCA).</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">Audyt dla łańcucha dostaw</h4>
                  <p className="text-sm text-slate-600">Dostarczasz komponenty dla wielkich koncernów? Raport z Envirly to rynkowa przepustka do kooperacji w B2B.</p>
                </div>
              </div>

            </article>

            {/* Sidebar B2B */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Skontaktuj się ze wsparciem</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Wsparcie Envirly</h4>
                    <p className="text-sm text-slate-600 mb-1">support@envirly.com</p>
                    <p className="text-sm text-slate-600 mb-1">+48 881 197 622</p>
                    <a href="https://envirly.pl" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 font-bold hover:underline">www.envirly.pl</a>
                  </div>
                  <div className="pt-6 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Zakup Energii OZE</h4>
                    <p className="text-sm text-slate-600 mb-1">sprzedaz@reo.pl</p>
                    <p className="text-sm text-slate-600 mb-1">+48 22 548 48 29</p>
                    <Link href="/" className="text-sm text-brand-green font-bold hover:underline">www.reo.pl</Link>
                  </div>
                </div>
              </div>
            </aside>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
