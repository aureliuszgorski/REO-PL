"use client";

import Link from "next/link";
import { ChevronRight, Target, Users, Zap, Briefcase, FlaskConical, Recycle, ThumbsUp, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MatrycaIstotnosciPage() {
  const onzGoals = [
    { num: 7, title: "Czysta i dostępna energia", icon: <Zap className="w-6 h-6 text-yellow-500" /> },
    { num: 8, title: "Wzrost gospodarczy i godna praca", icon: <Briefcase className="w-6 h-6 text-red-500" /> },
    { num: 9, title: "Innowacyjność, przemysł, infrastruktura", icon: <FlaskConical className="w-6 h-6 text-orange-500" /> },
    { num: 12, title: "Odpowiedzialna konsumpcja i produkcja", icon: <Recycle className="w-6 h-6 text-amber-600" /> },
    { num: 13, title: "Działania w dziedzinie klimatu", icon: <Target className="w-6 h-6 text-green-600" /> },
    { num: 15, title: "Życie na lądzie", icon: <ThumbsUp className="w-6 h-6 text-emerald-500" /> },
    { num: 16, title: "Pokój, sprawiedliwość i silne instytucje", icon: <Scale className="w-6 h-6 text-blue-600" /> }
  ];

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
            Matryca <span className="text-brand-green">istotności</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            Badanie priorytetów strategicznych zarządu i pracowników w odniesieniu do ramowych Celów Zrównoważonego Rozwoju ONZ.
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
              <span className="text-brand-green font-bold">Matryca istotności</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium leading-relaxed">
                  W ramach prac nad własną strategią ESG firmy Reo.pl Sp. z o.o. przeprowadziliśmy wewnętrzny audyt i ankietyzację, której celem była ocena istotności konkretnych inicjatyw związanych ze zrównoważonym rozwojem, posiłkując się agendą ONZ.
                </p>
              </div>

              <div className="bg-white border-l-4 border-emerald-500 p-8 rounded-r-2xl shadow-sm mb-16">
                <p className="text-slate-700 font-medium text-lg m-0 flex items-center gap-4">
                  <Users className="w-8 h-8 text-emerald-500 shrink-0" />
                  <span>
                    Na podstawie średnich ocen <strong>Zarządu (4,30)</strong> i <strong>pracowników/interesariuszy (4,47)</strong>, wyłoniliśmy 15 kluczowych zadań uznanych za krytyczne.
                  </span>
                </p>
              </div>

              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Wybrane Cele ONZ</h2>
              <p className="text-slate-600 mb-8 max-w-3xl">
                Spośród 17 Celów Zrównoważonego Rozwoju ONZ, Reo.pl obrało 7 najważniejszych, które ściśle odzwierciedlają profil naszej spółki, misję handlu zieloną energią i rozwój środowiska w Polsce.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-16">
                {onzGoals.map((g, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-slate-300 transition-colors">
                    <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                      {g.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Cel {g.num}</span>
                      <h4 className="font-bold text-slate-800">{g.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 p-8 md:p-12 rounded-3xl mb-16">
                <h2 className="text-2xl font-extrabold text-[#1e1a3b] mb-4">Wyniki Matrycy Istotności</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  W matrycy istotności zagadnienia, które znalazły się w górnej prawej ćwiartce wykresu (wysoki priorytet Zarządu oraz wysoki priorytet interesariuszy) stały się formalną osią działalności Reo.pl w ramach dbałości o ekosystem.
                </p>
                <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                  <p className="text-sm font-medium text-slate-500 italic">
                    [Wykres Matrycy Istotności Reo.pl dostępny jest w pełnym raporcie ESG Spółki, który publikujemy cyklicznie.]
                  </p>
                </div>
              </div>

            </article>

            {/* Sidebar B2B */}
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
                    <Link href="/esg/slad-weglowy-reo-pl-sp-z-o-o" className="text-sm text-slate-600 hover:text-brand-green flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Ślad Węglowy Reo.pl
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
