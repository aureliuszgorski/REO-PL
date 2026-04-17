"use client";

import Link from "next/link";
import { ChevronRight, Cpu, Network, Briefcase, FileSignature, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlatformaReoPage() {
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
            Platforma <span className="text-brand-green">Reo.pl</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            Innowacyjne, dedykowane rozwiązanie do bezpośredniego obrotu zieloną energią.
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
              <span className="text-brand-green font-bold">Platforma Reo.pl</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e1a3b]">Szybki, bezpośredni obrót OZE</h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Platforma REO to dedykowane rozwiązania dla odbiorców i wytwórców do bezpośredniego obrotu energią elektryczną ze źródeł odnawialnych.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  W oparciu o wieloletnie doświadczenia i wiedzę w zakresie obrotu energią stworzyliśmy unikalną platformę, która <strong>łączy odbiorców energii z wytwórcami z pominięciem giełdy towarowej.</strong>
                </p>
                <div className="bg-brand-green/10 border-l-4 border-brand-green p-6 rounded-r-xl">
                  <p className="text-brand-dark font-medium">
                    Dzięki niej odbiorcy energii OZE mogą zmniejszyć koszty zużywanej energii, a wytwórcy zwiększać swoje przychody bez konieczności zatrudnienia personelu, raportowania czy własnych opłat brokerskich.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-10">Główne Filary Platformy</h2>
              
              <div className="space-y-6 mb-16">
                {/* Grupy Biz */}
                <div className="group bg-white hover:bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-colors cursor-pointer relative overflow-hidden">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e1a3b] mb-3 group-hover:text-brand-green transition-colors">Grupy Biznesowe</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Wytwórca OZE sprzedaje wyprodukowaną energię w obrębie Grupy. Reo.pl pełni rolę kontrahenta, bilansując i rozliczając Twoją grupę operacyjnie.
                      </p>
                      <Link href="/oferta/grupy-biznesowe" className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-green transition-colors">
                        Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* PPA */}
                <div className="group bg-white hover:bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-colors cursor-pointer relative overflow-hidden">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                      <FileSignature className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e1a3b] mb-3 group-hover:text-brand-green transition-colors">Umowy PPA (Power Purchase Agreement)</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Innowacyjne podejście umożliwiające bezpośredni nabytek OZE. Długoterminowe ustalanie stałej ceny, redukujące ryzyko zmienności TGE.
                      </p>
                      <Link href="/oferta/umowy-dlugoterminowe-ppa" className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-green transition-colors">
                        Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Tabela and P2P */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white hover:bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-colors cursor-pointer">
                    <h3 className="text-lg font-bold text-[#1e1a3b] mb-3">Tabela Ofert</h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Miejsce, w którym odbiorcy kupują po niższych cenach a wytwórcy sprzedają po wyższych ze spredkiem zysku niż na TGE.
                    </p>
                    <Link href="/oferta/tabela-ofert" className="text-sm font-bold text-brand-dark hover:text-brand-green transition-colors block mt-auto">
                      Sprawdź tabelę &rarr;
                    </Link>
                  </div>
                  <div className="group bg-white hover:bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <Network className="w-5 h-5 text-indigo-500" />
                      <h3 className="text-lg font-bold text-[#1e1a3b]">Platforma Peer-to-Peer</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                      Handel P2P z ominięciem tradycyjnych mechanizmów na publicznej sieci Krajowej. Wolnostrynkowy obrót energią.
                    </p>
                    <Link href="/oferta/platforma-peer-to-peer" className="text-sm font-bold text-brand-dark hover:text-brand-green transition-colors block mt-auto">
                      Poznaj P2P &rarr;
                    </Link>
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
                    <Link href="/o-nas/platforma-reo-pl" className="text-sm text-brand-green font-bold flex items-center gap-2">
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
