"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ZarzadSpolkiPage() {
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
            Zarząd <span className="text-brand-green">Spółki</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            Liderzy rynkowi kierujący rozwojem platformy obrotu zieloną energią.
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
              <span className="text-brand-green font-bold">Zarząd Spółki</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              
              <div className="space-y-8">
                
                {/* Grzegorz Tomasik */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-dark font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                        Prezes Zarządu
                      </div>
                      <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-4">Grzegorz Tomasik</h2>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        Lider w obrocie zieloną energią i cyfrowych rozwiązaniach dla rynku OZE. Odpowiada za strategię, rozwój innowacji oraz zarządzanie operacyjne w dynamicznie rosnącym sektorze energetyki odnawialnej.
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        <li className="flex gap-3 text-slate-600 bg-slate-50 px-4 py-3 border border-slate-100 rounded-lg text-sm">
                          <span className="text-brand-green font-bold">&bull;</span>
                          Pierwsza w Polsce platforma obrotu zieloną energią
                        </li>
                        <li className="flex gap-3 text-slate-600 bg-slate-50 px-4 py-3 border border-slate-100 rounded-lg text-sm">
                          <span className="text-brand-green font-bold">&bull;</span>
                          Projektowanie i implementacja mechanizmów rynkowych w obszarze energii elektrycznej z OZE
                        </li>
                        <li className="flex gap-3 text-slate-600 bg-slate-50 px-4 py-3 border border-slate-100 rounded-lg text-sm">
                          <span className="text-brand-green font-bold">&bull;</span>
                          Innowacyjne projekty energetyczne o zasięgu międzynarodowym
                        </li>
                      </ul>
                      
                      <Link href="/o-nas/grzegorz-tomasik" className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-green transition-colors text-sm uppercase tracking-wide">
                        Czytaj Pełne Bio <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Tomasz Morawski */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-[#1e1a3b]/10 text-[#1e1a3b] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                        Wiceprezes Zarządu
                      </div>
                      <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-4">Tomasz Morawski</h2>
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Menadżer z blisko 25 letnim doświadczeniem w sektorze energetycznym. Odpowiada za rozwój i realizację strategii obrotu energią elektryczną w tym za procesy związane z Rynkiem Bilansującym oraz optymalizację kosztów i zysków w obszarze zielonej energii.
                      </p>
                      
                      <Link href="/o-nas/tomasz-morawski" className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-green transition-colors text-sm uppercase tracking-wide">
                        Czytaj Pełne Bio <ArrowRight className="w-4 h-4" />
                      </Link>
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
                    <Link href="/o-nas/zarzad-spolki" className="text-sm text-brand-green font-bold flex items-center gap-2">
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
