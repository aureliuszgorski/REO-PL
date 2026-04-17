"use client";

import Link from "next/link";
import { ChevronRight, Lightbulb, Users, Leaf, HeartHandshake, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CeleWartosciPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Target Banner */}
      <section className="bg-slate-900 relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-slate-300 mb-6 uppercase tracking-wider backdrop-blur-sm">
            O NAS
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Wartości i <span className="text-brand-green">Cele</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            Ekologia, Innowacyjność, Ludzie. Poznaj uniwersalne wartości, które stanowią fundament naszego działania w sektorze OZE.
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
              <span className="text-brand-green font-bold">Cele i Wartości</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium leading-relaxed mb-6">
                  Reo.pl to miejsce pierwszego wyboru dla realizacji potrzeb w zakresie pozyskiwania i sprzedaży zielonej energii. Wspólnie z naszymi partnerami tworzymy bezpieczną przyszłość.
                </p>

                <h2 className="text-3xl font-extrabold text-[#1e1a3b] mt-12 mb-6">Reo.pl - Idea zmian na lepsze</h2>
                <p className="text-slate-600 mb-6">
                  Zrównoważony rozwój to przede wszystkim transformacja energetyczna, przeciwdziałanie zmianom klimatycznym i zielona rewolucja przemysłowa. Przyszłość możesz współtworzyć razem z nami.
                </p>
                <p className="text-slate-600 mb-6">
                  Reo.pl to nasza historia o dążeniu do zmieniania świata na lepsze. Jako pasjonaci i innowatorzy w dziedzinie OZE, opierając się na swoim wieloletnim doświadczeniu i wiedzy, współtworzymy zieloną przyszłość naszej planety wierząc, że w ten sposób zmieniamy również reguły gry w branży energetycznej. Każdy może przyłączyć się do tej inicjatywy.
                </p>
              </div>

              {/* Wartości Grid */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Nasze Wartości</h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-16">
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Innowacyjność i rozwój</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Identyfikujemy się z nieustającym postępem technologicznym. Stale się rozwijamy tworząc nowoczesne i ekologiczne rozwiązania. Innowacyjność jest kluczem do tworzenia przyszłości, w której energia będzie czysta i efektywnie wykorzystana.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Dzielenie się wiedzą</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Robimy to w relacjach z partnerami i w naszym zespole. Tworzymy atmosferę szacunku, równości w miejscu pracy oraz zaangażowania. W centrum naszej kultury zawsze stoi człowiek – klient, pracownik, partner w biznesie.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                  <div className="w-12 h-12 bg-emerald-50 text-brand-green rounded-xl flex items-center justify-center mb-6 shrink-0">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Ekologia na rwszym miejscu</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To daje nam autentyczność. Biologiczna różnorodność otaczającego nas świata to nasz kapitał. Chronimy środowisko, działając z troską o planetę, promując technologie ograniczające niekorzystny wpływ na klimat.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Blisko Klienta</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Potrzeby odbiorców, wnikliwe słuchanie to nasza zasada. Dotrzymujemy obietnic, stawiając na rozwiązania dogasowane do potrzeb i czasu. W ten sposób każdego dnia budujemy markę przeszłości – Reo.pl
                  </p>
                </div>
              </div>

              {/* Cele List */}
              <div className="bg-slate-100 rounded-3xl p-8 md:p-12 mb-16">
                <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Nasze Główne Cele</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">Ekologiczny, nowoczesny produkt</h4>
                      <p className="text-slate-600 text-sm">Nieustanne poszerzanie oferty produktowej, by sprostać wymaganiom rynku i klientów. Innowacje są kluczem do wdrażania zrównoważonej energetyki.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">Odpowiedzialny pracodawca</h4>
                      <p className="text-slate-600 text-sm">Chcemy być wzorowym pracodawcą, oferując inspirujące środowisko pracy. Pasja, zaangażowanie i entuzjazm są dla nas kluczowe.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">Satysfakcja Klienta</h4>
                      <p className="text-slate-600 text-sm">Dbałość o klienta i jego satysfakcję to priorytet. Wraz z Reo obniżysz koszty dzięki w 100% z OZE, co napędza naszą misję.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">Zrównoważony rozwój</h4>
                      <p className="text-slate-600 text-sm">To nie tylko biznes. Dążymy do pozytywnych zmian planetarnych, wdrażając cenne inicjatywy w tkankę miejską i przemysłową.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambicja CTA */}
              <div className="bg-[#1e1a3b] text-white rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-extrabold mb-4">Nasza Ambicja</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Naszą ambicją jest stworzenie globalnego ekosystemu, który pozwala równoważyć zapotrzebowanie na energię z jej produkcją w oparciu wyłącznie o OZE. Nasza inteligentna infrastruktura to algorytmy automatyzujące obrót w czasie rzeczywistym.
                </p>
                <Link href="/kontakt" className="inline-block bg-brand-green hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                  Dołącz do nas
                </Link>
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
                    <Link href="/o-nas/cele-i-wartosci" className="text-sm text-brand-green font-bold flex items-center gap-2">
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
