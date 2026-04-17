"use client";

import Link from "next/link";
import { ChevronRight, Leaf, Scale, ShieldCheck, TreePine, Globe, Zap, LineChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ZrownowazonyRozwojPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Target Banner */}
      <section className="bg-emerald-900 relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-semibold text-emerald-100 mb-6 uppercase tracking-wider backdrop-blur-sm">
            Strategia ESG w biznesie
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Zrównoważony <span className="text-brand-neon">rozwój</span>
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl font-medium">
            Sprawozdawczość ESG to nie tylko wymóg prawny UE, ale realna korzyść i budowa wizerunku odpowiedzialnego biznesu. Sprawdź, jak możemy pomóc Twojej firmie.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-emerald-600 transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/esg/zrownowazony-rozwoj" className="hover:text-emerald-600 transition-colors">ESG</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-emerald-600 font-bold">Zrównoważony rozwój</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium leading-relaxed">
                  Pod skrótem ESG kryje się określenie <strong>Environmental, Social and Corporate Governance</strong>, które razem składają się na zrównoważony rozwój. Dbanie o strategię to nie tylko zwiększenie przychodów – to złożony ekosystem prawny, który redefiniuje dzisiejszy biznes.
                </p>
              </div>

              {/* Ekosystem Prawny */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Ekosystem Regulacyjny (Compliance)</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:border-emerald-500/30 transition-colors">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Taksonomia UE</h3>
                  <p className="text-slate-600 text-sm flex-1">Precyzyjne kryteria określające, kiedy działalność wnosi zrównoważony wkład dla klimatu i nie wyrządza szkód.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:border-emerald-500/30 transition-colors">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Dyrektywa CSRD</h3>
                  <p className="text-slate-600 text-sm flex-1">Narzucająca od 2024 stopniowy obowiązek szczegółowego raportowania niefinansowego w przedsiębiorstwach.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:border-emerald-500/30 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Dyrektywa CS3D</h3>
                  <p className="text-slate-600 text-sm flex-1">Due Diligence w łańcuchu dostaw, nakazująca weryfikację podwykonawców przez pryzmat praw człowieka i ekologii.</p>
                </div>
              </div>

              {/* Harmonogram Raportowania */}
              <div className="bg-slate-100 p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                <h2 className="text-2xl font-extrabold text-[#1e1a3b] mb-6">Harmonogram wejścia obowiązku CSRD</h2>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
                    <div className="font-black text-2xl text-emerald-600 w-20 shrink-0">2025</div>
                    <div className="text-slate-700 text-sm font-medium">Podmioty składające raporty (NFRD) – spółki interesu publicznego (za rok obrotowy 2024).</div>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
                    <div className="font-black text-2xl text-emerald-600 w-20 shrink-0">2026</div>
                    <div className="text-slate-700 text-sm font-medium">Duzi przedsiębiorcy (zatrudnienie powyżej 250 os., &gt; 50 mln EUR obrotu) – pierwsze raporty za 2025.</div>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
                    <div className="font-black text-2xl text-emerald-600 w-20 shrink-0">2027</div>
                    <div className="text-slate-700 text-sm font-medium">Sektor MSP (Małe i średnie przedsiębiorstwa notowane na giełdzie) – za 2026 r.</div>
                  </div>
                </div>
              </div>

              {/* 3 Filary */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Trzy filary strategii (E, S, G)</h2>
              <div className="space-y-6 mb-16">
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-5">
                  <Leaf className="w-8 h-8 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">E: Środowisko (Environment)</h4>
                    <p className="text-slate-600 text-sm">Zarządzanie zasobami wody, minimalizacja śladu węglowego (Scope 1 i 2), zarządzanie gospodarką odpadową i <strong>wykorzystanie w 100% zielonej energii z OZE (oferta Reo.pl)</strong>.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-5">
                  <TreePine className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">S: Społeczeństwo (Social)</h4>
                    <p className="text-slate-600 text-sm">Godziwe warunki pracy, BHP, równe traktowanie, poszanowanie praw człowieka w firmie oraz w relacjach zewnętrznych i we wszystkich współpracach B2B.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-5">
                  <LineChart className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">G: Ład zarządczy (Governance)</h4>
                    <p className="text-slate-600 text-sm">Przejrzystość struktur zarządzania, zapobieganie korupcji, audyt podatkowy, ochrona sygnalistów (whistleblowing) i niezależność rad nadzorczych.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-emerald-900 p-8 md:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-30"></div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-bold mb-2">Potrzebujesz wsparcia z raportowaniem "E" w ESG?</h3>
                  <p className="text-emerald-100">Przejście na 100% Czystą Energię z Gwarancją Pochodzenia od polskiego Reo.pl natychmiast poprawi Twój bilans Scope 2.</p>
                </div>
                <div className="relative z-10 shrink-0">
                  <Link href="/kontakt" className="bg-brand-neon hover:bg-[#bbf000] text-emerald-950 font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                    Skontaktuj się ze sztabem <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

            </article>

            {/* Sidebar B2B */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Gwarancje Pochodzenia OZE</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Jedynym fizycznym i dającym się ująć w dokumentach dowodem na zakupy zielonej energii są rządowe Gwarancje Pochodzenia. Załatwimy to dla Ciebie.
                </p>
                <Link href="/oferta/umowy-dlugoterminowe-ppa" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 rounded-xl font-bold transition-transform shadow-md">
                  Zobacz ofertę OZE
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
