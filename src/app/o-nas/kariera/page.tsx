"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight, Zap, Target, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KarieraPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Target Banner */}
      <section className="bg-slate-900 relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-slate-300 mb-6 uppercase tracking-wider backdrop-blur-sm">
            KARIERA
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Dołącz do <span className="text-brand-green">Reo.pl</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            Stań się kluczowym elementem energetycznej rewolucji na rynku zielonej energii w Polsce.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-slate-900 transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/o-nas/rynek-energii-odnawialnej" className="hover:text-slate-900 transition-colors">O nas</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Kariera</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-6">Budujemy zespół napędzany zieloną energią</h2>
                <p className="text-slate-600 mb-6">
                  Dołącz do zespołu Reo.pl i stań się kolejnym, kluczowym Pracownikiem mającym czynny udział w energetycznej rewolucji na rynku OZE. Jako cześć Grupy Kapitałowej (Polska Grupa Biogazowa i Enerco) oferujemy stabilne zatrudnienie i ogromne perspektywy rozwoju w najszybciej rozwijającej się branży dekady.
                </p>
              </div>

              {/* Kultura Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-green-50 text-brand-green rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Ambitne projekty</h3>
                  <p className="text-slate-600 text-sm">Realizujemy unikalne modele umów PPA, bilansowanie grup OZE oraz handel platformowy P2P.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Szybki rozwój</h3>
                  <p className="text-slate-600 text-sm">Inwestujemy w wiedzę zespołu. Dynamiczne otoczenie giełdowe wymaga ciągłego podnoszenia kompetencji.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Współpraca</h3>
                  <p className="text-slate-600 text-sm">Głaska hierarchia zarządcza. Doceniamy dobre pomysły niezależnie od tego, stanowiska je zgłaszającego.</p>
                </div>
              </div>

              {/* Open Positions */}
              <h2 className="text-2xl font-extrabold text-[#1e1a3b] mb-8">Aktualne oferty pracy</h2>
              
              <div className="bg-slate-100 rounded-3xl p-12 text-center border border-dashed border-slate-300">
                <p className="text-slate-500 font-medium text-lg mb-4">
                  Obecnie nie prowadzimy ukierunkowanych rekrutacji, ale zawsze szukamy talentów.
                </p>
                <p className="text-slate-600 text-sm max-w-xl mx-auto mb-8">
                  Niezależnie od prowadzonych rekrutacji, prosimy o przesłanie CV. Z chęcią rozpatrzymy Twoją aplikację i skontaktujemy się z Tobą w momencie uruchomienia rekrutacji w interesującym Cię obszarze. W aplikacji prosimy o zawarcie klauzuli RODO.
                </p>
                <a href="mailto:rekrutacja@reo.pl" className="inline-flex items-center gap-2 bg-brand-green hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                  Wyślij CV (rekrutacja@reo.pl) <ArrowRight className="w-5 h-5" />
                </a>
              </div>

            </article>

            {/* Sidebar B2B */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Poznaj nas bliżej</h3>
                <ul className="space-y-3 mb-6">
                  <li>
                    <Link href="/o-nas/rynek-energii-odnawialnej" className="text-sm text-slate-600 hover:text-brand-green transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Reo.pl
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-nas/cele-i-wartosci" className="text-sm text-slate-600 hover:text-brand-green transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Cele i Wartości
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-nas/platforma-reo-pl" className="text-sm text-slate-600 hover:text-brand-green transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Platforma Reo.pl
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-nas/najczesciej-zadawane-pytania" className="text-sm text-slate-600 hover:text-brand-green transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-nas/zarzad-spolki" className="text-sm text-slate-600 hover:text-brand-green transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> Zarząd Spółki
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
