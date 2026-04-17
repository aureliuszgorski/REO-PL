"use client";

import Link from "next/link";
import { ChevronRight, Leaf, Shield, LineChart, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReoPlPage() {
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
            Rynek Energii <span className="text-brand-green">Odnawialnej</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            Jesteśmy spółką z polskim kapitałem specjalizującą się w obrocie energią elektryczną pochodzącą w 100% z OZE.
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
              <span className="text-brand-green font-bold">Reo.pl</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-12">
                <p className="lead text-2xl text-slate-700 font-medium leading-relaxed mb-6">
                  Łączymy wytwórców i odbiorców energii OZE, aby w 100% zielona energia mogła trafiać do każdego biznesu!
                </p>
                <p className="text-slate-600 mb-6">
                  Należymy do grupy kapitałowej EnercoNet, która wraz z zrzeszonymi spółkami wytwórczymi ma znaczący, przekraczający 0,7 TWh rocznie, udział w produkcji energii ze źródeł odnawialnych (OZE) w Polsce. Działamy na rynku polskim od 2007 roku. Posiadamy Koncesję na obrót energią elektryczną.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
                    <LineChart className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Co zyskują użytkownicy platformy?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Odbiorcy mają możliwość obniżenia kosztów zużywanej energii elektrycznej. Platforma Reo.pl umożliwia bezpośredni zakup energii elektrycznej od dowolnych wytwórców, na indywidualnie uzgodnionych warunkach handlowych, na dowolny okres. Odbiorcy mogą wybierać pochodzenie energii (woda, wiatr, biomasa, PV).
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Rozliczanie transakcji i bilansowanie odbywają się za pośrednictwem operatora Platformy. W Reo.pl masz <strong>100% gwarancji dostaw zielonej energii</strong>.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Wiedza i doświadczenie</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Reo.pl to unikalna Platforma dla odbiorców i wytwórców do bezpośredniego obrotu energią elektryczną ze źródeł odnawialnych.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Dostarczamy na rynek krajowy i międzynarodowy innowacyjne technologie wspierające produkcję zielonej energii. Jesteśmy dumni z bycia pionierem na polskim rynku cyfrowego obrotu energią P2P (Peer-to-Peer).
                  </p>
                </div>
              </div>

              {/* Stats/Group block */}
              <div className="bg-[#1e1a3b] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden mb-16">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Globe className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                  <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4 block">Grupa EnercoNet</span>
                  <h2 className="text-3xl font-extrabold mb-6">Część silnego ekosystemu OZE</h2>
                  <p className="text-slate-300 max-w-2xl mb-8">
                    Bycie częścią grupy kapitałowej gwarantuje naszym klientom stabilność finansową oraz ciągłość dostaw. Nasze działania są audytowane i opierają się na twardych aktywach wytwórczych w całej Polsce.
                  </p>
                  <div className="flex gap-12">
                    <div>
                      <div className="text-4xl font-extrabold text-white mb-2">2007</div>
                      <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Rok założenia</div>
                    </div>
                    <div>
                      <div className="text-4xl font-extrabold text-white mb-2">&gt; 0.7 <span className="text-xl">TWh</span></div>
                      <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Produkcja roczna grupy</div>
                    </div>
                  </div>
                </div>
              </div>

            </article>

            {/* Sidebar B2B */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Poznaj nas bliżej</h3>
                <ul className="space-y-3 mb-6">
                  <li>
                    <Link href="/o-nas/rynek-energii-odnawialnej" className="text-sm text-brand-green font-bold flex items-center gap-2">
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
