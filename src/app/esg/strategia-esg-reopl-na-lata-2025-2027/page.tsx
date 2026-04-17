"use client";

import Link from "next/link";
import { ChevronRight, FileText, Download, Target, Users, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StrategiaEsgPage() {
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
            Strategia ESG Reo.pl <span className="text-brand-green">2025-2027</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            Nasz formalny przewodnik operacyjny ku dekarbonizacji krajowego rynku energii oraz rozwoju świadomego, etycznego biznesu.
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
              <span className="text-brand-green font-bold">Strategia Opublikowana 2025-2027</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-12">
                <p className="lead text-2xl text-slate-700 font-medium leading-relaxed mb-6">
                  Jako lider z branży giełdowego i brokerskiego obrotu w 100% odnawialnymi źródłami energii, Reo.pl aktywnie wpływa na zrównoważony rozwój Polski. Opracowaliśmy horyzontalną strategię na lata 2025–2027.
                </p>
                <p className="text-slate-600">
                  Dokument ten jest wynikiem m.in. ankietyzacji priorytetów (Matrycy Istotności) Zarządu i naszych interesariuszy. Jest on dostosowany rygorystycznie do 7 wytycznych Celów ONZ (SDGs).
                </p>
              </div>

              {/* Download File Block */}
              <div className="bg-white border text-center md:text-left border-slate-200 shadow-sm p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e1a3b] text-xl">Pełny Raport Strategii (PDF)</h3>
                    <p className="text-slate-500 text-sm">Aktualizacja: Q1 2025, rozmiar ok. 4MB</p>
                  </div>
                </div>
                <a href="https://reo.pl/storage/strategia-esg_4b066830.pdf" target="_blank" rel="noopener noreferrer" className="shrink-0 bg-[#1e1a3b] hover:bg-black text-white px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors">
                  <Download className="w-5 h-5" /> Pobierz dokument PDF
                </a>
              </div>

              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Nasze Zobowiązania (Priorytety)</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Środowisko (E)</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Dążymy do całkowitego zwiększenia wolumenu bezstratnej energii z OZE oddawanej fizycznie w systemie KSE. Rozwijamy POB, obsługę magazynów BESS i inwestujemy w optymalizatory redukujące "straty węglowe".</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Społeczeństwo (S)</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Wspieramy setki podmiotów MŚP we wdrażaniu do certyfikacji proekologicznej m.in za pomocą edukacji PPA i darmowej wymiany wiedzy z naszymi inżynierami w terenie ratując ich miejsca pracy w związku z ustawami klimatycznymi.</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Ład Korporacyjny (G)</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Stawiamy na najwyższy nadzór KNF z uwagi na podmioty uczestniczące z nami w P2P, przeciwdziałanie praniu kapitału, radykalną przejrzystość księgową (zgodność IFRS/MSSF) oraz anonimizację i ochronę danych TGE w systemach Reo.pl.</p>
                  </div>
                </div>
              </div>

            </article>

            {/* Sidebar B2B */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Więcej na temat ESG w Reo</h3>
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
                    <Link href="/esg/slad-weglowy-reo-pl-sp-z-o-o" className="text-sm text-slate-600 hover:text-brand-green flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Ślad Węglowy Reo.pl
                    </Link>
                  </li>
                  <li>
                    <Link href="/esg/reopl-i-envirly-partnerstwo" className="text-sm text-slate-600 hover:text-brand-green flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Partnerstwo z Envirly
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
