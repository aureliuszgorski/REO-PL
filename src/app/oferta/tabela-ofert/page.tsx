"use client";

import Link from "next/link";
import { ChevronRight, Filter, ShoppingCart, Tag, ArrowRightLeft, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TabelaOfertPage() {
  const [activeTab, setActiveTab] = useState<"KUPIC" | "SPRZEDAC">("KUPIC");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Banner */}
      <section className="bg-brand-dark relative w-full h-[250px] md:h-[350px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-neon mb-4 uppercase tracking-wider">
            Giełda Energii
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Tabela <span className="text-brand-green">Ofert</span>
          </h1>
        </div>
      </section>

      <main className="flex-1 w-full">
        {/* Breadcrumbs */}
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-brand-green transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/oferta/umowy-dlugoterminowe-ppa" className="hover:text-brand-green transition-colors">Oferta</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Tabela ofert</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">
          
          {/* Dual Explanations */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-green/30 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[#1e1a3b] mb-4">Czy jesteś odbiorcą zielonej energii?</h2>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                Chcesz dokonać zakupu zielonej energii elektrycznej? Na Reo.pl znajdziesz szeroki wybór atrakcyjnych ofert od sprawdzonych wytwórców OZE.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm"><ShieldCheck className="w-5 h-5 text-brand-green" /> Przejrzystość kontraktu</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm"><Tag className="w-5 h-5 text-brand-green" /> Konkurencyjne ceny</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm"><Zap className="w-5 h-5 text-brand-green" /> Zgodność z wymogami regulacyjnymi ESG</li>
              </ul>
              <p className="text-slate-500 text-sm leading-relaxed">
                Wystarczy, że zalogujesz się na konto użytkownika, gdzie będziesz mógł zarezerwować interesującą Cię ofertę. Eksperci Reo.pl, przeprowadzą Cię przez cały proces zakupu oraz zmiany sprzedawcy. Dołącz do nas!
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-green/30 transition-all group">
              <div className="w-14 h-14 bg-emerald-50 text-brand-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ArrowRightLeft className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[#1e1a3b] mb-4">Czy jesteś wytwórcą zielonej energii?</h2>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                Jeżeli produkujesz zieloną energię ze źródeł odnawialnych, Reo.pl to idealne miejsce, aby dotrzeć do nowych klientów poszukujących ekologicznych rozwiązań.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6 font-medium text-slate-700">
                Zaloguj się na konto użytkownika i wystaw swoją ofertę bezpośrednio w Tabeli Ofert.
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Dzięki nam, Twoja energia trafi do biznesów, które dbają o środowisko i chcą korzystać z odnawialnych źródeł energii w myśl wymogów ESG. Zwiększ swoją widoczność na rynku!
              </p>
              <Link href="/login" className="inline-flex items-center gap-2 font-bold text-white bg-[#1e1a3b] hover:bg-black px-6 py-3 rounded-lg transition-colors">
                Wystaw ofertę
              </Link>
            </div>
          </div>

          {/* Interactive Market Table Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Table Header / Tabs */}
            <div className="flex flex-col sm:flex-row items-center border-b border-slate-100 bg-slate-50">
              <button 
                onClick={() => setActiveTab("KUPIC")}
                className={`flex-1 w-full sm:w-auto py-5 text-center font-bold text-lg transition-colors border-b-2 ${activeTab === "KUPIC" ? "border-blue-500 text-blue-600 bg-white" : "border-transparent text-slate-500 hover:text-slate-700"}`}
              >
                Chcę kupić (Oferty Sprzedaży)
              </button>
              <button 
                onClick={() => setActiveTab("SPRZEDAC")}
                className={`flex-1 w-full sm:w-auto py-5 text-center font-bold text-lg transition-colors border-b-2 ${activeTab === "SPRZEDAC" ? "border-brand-green text-brand-green bg-white" : "border-transparent text-slate-500 hover:text-slate-700"}`}
              >
                Chcę sprzedać (Oferty Zakupu)
              </button>
            </div>

            {/* Table Filters/Actions */}
            <div className="p-6 bg-white border-b border-slate-100 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Filter className="w-5 h-5 text-slate-400" />
                Filtruj oferty rynkowe
              </div>
              <div className="text-sm text-slate-400 bg-slate-50 px-4 py-2 rounded-lg font-medium border border-slate-100">
                Wymagane logowanie do podglądu szczegółów
              </div>
            </div>

            {/* Mock Table Body */}
            <div className="p-12 text-center flex flex-col items-center justify-center min-h-[300px] bg-slate-50/50">
              <ShieldCheck className="w-16 h-16 text-slate-300 mb-6" />
              <h3 className="text-2xl font-bold text-slate-700 mb-2">Dostęp zablokowany</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-8">
                Aby chronić wrażliwe dane rynkowe oraz móc zarezerwować interesującą Cię ofertę w Tabeli Ofert, wymagana jest autoryzacja.
              </p>
              <Link href="/login" className="bg-brand-green hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105">
                Zaloguj się na Konto Klienta
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
