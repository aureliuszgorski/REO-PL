"use client";

import Link from "next/link";
import { ChevronRight, BatteryCharging, TrendingUp, BarChart3, Activity, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MagazynyEnergiiPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Target Banner */}
      <section className="bg-brand-dark relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-neon mb-6 uppercase tracking-wider">
            Usługi KSE Reo.pl
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Zarządzanie magazynami <span className="text-brand-green">energii</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Inwestujesz w magazyny energii? Rozwijasz instalacje hybrydowe (np. PV + magazyn)? Gwarantujemy kompleksową obsługę i monetyzację Twoich wielkoskalowych magazynów BESS.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-brand-green transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/uslugi/zmiana-sprzedawcy" className="hover:text-brand-green transition-colors">Usługi</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Kompleksowa obsługa magazynów</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium">
                  Zapewniamy kompleksową obsługę wielkoskalowych magazynów energii. Posiadamy potężną inżynierię OZE oraz status Operatora Rynku, dzięki czemu optymalizujemy zwrot z Twojej inwestycji ładując baterie w najtańszych momentach (ujemne ceny energii) i rozładowując u szczytu popytu.
                </p>
              </div>

              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Nasz udział w cyklu życia BESS</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                
                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-brand-green/30 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Market Access</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Zapewniamy bezpośredni dostęp do wszystkich rynków i rynków usług systemowych. Stajesz się aktywnym uczestnikiem Rynku Mocy OZE i optymalizujesz przychody arbitrażem.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-brand-green/30 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-emerald-50 text-brand-green rounded-xl flex items-center justify-center mb-6">
                    <Activity className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Operator Rynku</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Budujemy i realizujemy całkowicie zautomatyzowane algorytmicznie strategie rynkowe dla poszczególnych instalacji wiatrowych/solarnych.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-brand-green/30 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Operator Pomiarów</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Systemy pomiarowo-rozliczeniowe z walidacją 15-minutową. Przygotowane pod pełną certyfikację i integrację z systemem CSIRE w przyszłości.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-brand-green/30 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Podmiot Odpowiedzialny za Bilansowanie</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Przejmujemy surową odpowiedzialność za bilansowanie (POB), zliczając i wyrównując piki z wykorzystaniem własnej wielkiej jednostki bilansowej.
                  </p>
                </div>

              </div>

              {/* Modele rozliczeń */}
              <div className="bg-slate-100 p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-brand-neon to-brand-green"></div>
                <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-6">Modele Współpracy Zarządczej</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                    <strong className="block text-brand-green font-black text-xl mb-1">Profit Sharing</strong>
                    <span className="text-slate-600 text-sm">Współdzielimy zysk z arbitrażu magazynu – rośniemy tylko wtedy, gdy Twój magazyn generuje najwyższe zyski cenowe.</span>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                    <strong className="block text-brand-green font-black text-xl mb-1">Fixed Fee</strong>
                    <span className="text-slate-600 text-sm">Stała opłata gwarantująca pełne, bezpieczne koszty operacyjne bez niespodzianek na fakturze.</span>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                    <strong className="block text-brand-green font-black text-xl mb-1">Variable Fee</strong>
                    <span className="text-slate-600 text-sm">Skalowalna macierz powiązana z realnym kosztem serwisowym i transakcyjnym systemu na Rynku Mocy.</span>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                    <strong className="block text-brand-green font-black text-xl mb-1">Modele Hybrydowe</strong>
                    <span className="text-slate-600 text-sm">Wspólne połączenie powyższych reżimów inwestycyjnych pod konkretne wymagania funduszu czy banku finansującego (LTV).</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-green p-8 md:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white rounded-full blur-[80px] opacity-20"></div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-bold mb-2">Porozmawiajmy o zwrotach inwestycyjnych</h3>
                  <p className="text-emerald-50">Zarządzamy farmami, które odzyskują gigabajty energii ze słońca i wiatru. Jesteśmy gotowi podłączyć pod nie Twój magazyn.</p>
                </div>
                <div className="relative z-10 shrink-0">
                  <Link href="/kontakt" className="bg-[#1e1a3b] hover:bg-black text-white font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                    Nawiąż współpracę BESS <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

            </article>

            {/* Sidebar B2B */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <BatteryCharging className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Ekspert Rynku (OHT)</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Jesteśmy inżynieryjnym wsparciem jako Twój zewnętrzny Operator Handlowo-Techniczny wspierający rygorystyczne PSE SA.
                </p>
                <div className="space-y-3">
                  <a href="mailto:sprzedaz@reo.pl" className="block w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-center py-3 rounded-xl font-semibold transition-colors">
                    sprzedaz@reo.pl
                  </a>
                  <Link href="/kontakt" className="block w-full bg-[#1e1a3b] hover:bg-black text-white text-center py-3 rounded-xl font-semibold transition-colors">
                    Napisz do inżyniera OHT
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
