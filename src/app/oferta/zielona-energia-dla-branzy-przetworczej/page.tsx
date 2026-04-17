"use client";

import Link from "next/link";
import { ChevronRight, Leaf, Zap, Building2, CheckCircle2, Factory } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ZielonaEnergiaDlaPrzetworczejPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <section className="bg-slate-800 relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-neon mb-6 uppercase tracking-wider">
            Reo.pl B2B Ciężkie Przetwórstwo
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Zielona energia dla branży <span className="text-cyan-400">Przetwórczej</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Przemysł ciężki, huty, zakłady chemiczne i papiernie emitują najwięcej zanieczyszczeń w kraju i zużywają TWh prądu. Pomożemy Wam przejść bezboleśnie przez transformację energetyczną.
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
              <span className="text-brand-green font-bold">Zielona energia dla branży przetwórczej</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium">
                  Twoja huta produkcyjna i obróbka CNC zużywa za dużo energii z węglowych źródeł, powodując wysokie cła eksportowe? Czas na rewolucję wskaźnika ESG poprzez czyste PPA z Reo.pl.
                </p>
              </div>

              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Wyzwania i Korzyści Przemysłu</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:border-cyan-500/30 transition-colors">
                  <Zap className="w-8 h-8 text-cyan-500 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Potężne Wolumeny cPPA</h3>
                    <p className="text-slate-600 text-sm">Gwarantujemy ciągłość energetyczną na najwyższym gigawatowym poziomie operacyjnym łącząc dla Was całe portfele elektrowni solarnych i wiatrowych z grupy.</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:border-cyan-500/30 transition-colors">
                  <Leaf className="w-8 h-8 text-cyan-500 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Ucieczka przed Cłem</h3>
                    <p className="text-slate-600 text-sm">Zielona energia ratuje firmy przed rygorystycznymi dyrektywami unijnymi dot. podatków granicznych CBAM nakładanych na "brudną stal" i materiały.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-cyan-600"></div>
                <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-4">Dlaczego OZE od Reo.pl?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">Weryfikacje Wolumenowe</strong>
                      <span className="text-slate-600 text-sm">Reo to nie tylko platforma, to struktura inżynierska dopasowująca potężne moce przyłączeniowe pod indywidualne profile wielkich fabryk.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-700 p-8 md:p-12 rounded-3xl text-white shadow-xl flex flex-col items-center text-center">
                <Factory className="w-16 h-16 text-cyan-200 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Skontaktuj się ze sztabem kryzysowym ds. Energii</h3>
                <Link href="/kalkulator" className="bg-[#1e1a3b] hover:bg-black text-white font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                  Przejdź do formularza <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </article>

            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Ekspert Przemysłowy</h3>
                <Link href="/kontakt" className="block w-full bg-[#1e1a3b] hover:bg-black text-white text-center py-3 rounded-xl font-semibold transition-colors">
                  Napisz do eksperta
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
