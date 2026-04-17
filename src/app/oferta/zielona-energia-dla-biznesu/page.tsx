"use client";

import Link from "next/link";
import { ChevronRight, Leaf, ShieldCheck, Zap, Handshake, LeafyGreen, Building2, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ZielonaEnergiaDlaBiznesuPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Target Banner */}
      <section className="bg-[#1e1a3b] relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a3b] via-[#1e1a3b]/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-green mb-6 uppercase tracking-wider">
            Reo.pl B2B
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Zielona energia dla <span className="text-brand-green">Biznesu</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Odkryj korzyści płynące ze 100% odnawialnych źródeł energii. Obniż rynkowe koszty i wspieraj zrównoważony rozwój swojej firmy z Reo.pl.
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
              <span className="text-brand-green font-bold">Zielona energia dla biznesu</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              {/* Wstęp */}
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium">
                  Zmień sprzedawcę na Reo.pl i przekonaj się, że energia pochodząca w 100% ze źródeł odnawialnych to ewidentne korzyści środowiskowe oraz realne obniżenie kosztów w Twoim przedsiębiorstwie.
                </p>
              </div>

              {/* Sekcja: Wymierne Koszty / Korzyści */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Zielona energia to wymierne obniżenie kosztów</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:border-brand-green/30 transition-colors">
                  <Zap className="w-8 h-8 text-brand-green shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Niższe rachunki</h3>
                    <p className="text-slate-600 text-sm">Gwarantowana optymalizacja wydatków za energię elektryczną dzięki kontraktom bazującym bezpośrednio na odnawialnych źródłach energii.</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:border-brand-green/30 transition-colors">
                  <Leaf className="w-8 h-8 text-brand-green shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Zgodność wg ESG</h3>
                    <p className="text-slate-600 text-sm">Pełne wsparcie dla Twojego działu raportowania pozafinansowego w spełnianiu wymagających wskaźników zrównoważonego rozwoju (ESG).</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:border-brand-green/30 transition-colors">
                  <Handshake className="w-8 h-8 text-brand-green shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Wiarygodny wizerunek</h3>
                    <p className="text-slate-600 text-sm">Zbuduj wizerunek firmy jako nowoczesnego, odpowiedzialnego i silnego środowiskowo partnera społeczno-biznesowego.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:border-brand-green/30 transition-colors">
                  <LeafyGreen className="w-8 h-8 text-brand-green shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Redukcja CO2</h3>
                    <p className="text-slate-600 text-sm">Realny wpływ na obniżenie gazów cieplarnianych powiązanych z procesami produkcyjnymi własnej sieci logistycznej.</p>
                  </div>
                </div>
              </div>

              {/* Sekcja: DLACZEGO REO */}
              <div className="bg-slate-100 p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-brand-neon to-brand-green"></div>
                <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-4">Dlaczego OZE od Reo.pl?</h2>
                <p className="text-slate-600 mb-8 max-w-2xl">
                  Wybierz sprawdzonego sprzedawcę i udokumentuj transformację. Otrzymasz certyfikaty i gwarancję pochodzenia od jednej z największych grup OZE na rynku lokalnym (w tym z Polskiej Grupy Biogazowej).
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">Dedykowany konsultant</strong>
                      <span className="text-slate-600 text-sm">Pełne wsparcie od dopasowania umowy po rozliczenia na cały czas życia kontraktu.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">100% energii OZE ze źródeł własnych</strong>
                      <span className="text-slate-600 text-sm">Wyprodukowanej w grupie kapitałowej m.in EnercoNet.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">Zróżnicowane modele PPA</strong>
                      <span className="text-slate-600 text-sm">Rozliczenia cPPA, vPPA bazujące na TGE Fixingu lub cenach sztywnych.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">Zgodność z audytorami</strong>
                      <span className="text-slate-600 text-sm">Otrzymasz formalne potwierdzenie, że Twoja zielona energia pochodzi jedynie ze źródeł odnawialnych. Nie kolorujemy (Greenwashingu).</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kalkulator Teaser */}
              <div className="bg-[#1e1a3b] p-8 md:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-green rounded-full blur-[100px] opacity-30"></div>
                <h3 className="text-3xl font-bold mb-4 relative z-10">Sprawdź, ile możesz zaoszczędzić</h3>
                <p className="text-slate-300 max-w-xl mb-8 relative z-10">
                  Przetestuj zautomatyzowany kalkulator taryf z możliwością wyboru formuły stałej lub elastycznej (indeksowanej) dla Twojego przedsiębiorstwa.
                </p>
                <div className="flex flex-wrap gap-4 relative z-10">
                  <Link href="/kalkulator" className="bg-brand-neon hover:bg-brand-green text-white font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                    Kalkulator Oszczędności <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link href="/kontakt" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-colors inline-block">
                    Zadzwoń do nas
                  </Link>
                </div>
              </div>

            </article>

            {/* Sidebar B2B */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Twój ekspert B2B</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Każdego przedsiębiorcę traktujemy wyjątkowo. Specjalizujemy się w transformacji energetycznej polskich firm na prąd w 100% z OZE.
                </p>
                <div className="space-y-3">
                  <Link href="/kontakt" className="block w-full bg-[#1e1a3b] hover:bg-black text-white text-center py-3 rounded-xl font-semibold transition-colors">
                    Napisz do eksperta
                  </Link>
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
