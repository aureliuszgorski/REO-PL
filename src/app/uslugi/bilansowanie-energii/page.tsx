"use client";

import Link from "next/link";
import { ChevronRight, ChevronDown, CheckCircle2, TrendingDown, RefreshCcw, Network, BoxSelect } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BilansowanieEnergiiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Co oznacza Koszt Zbilansowania Kontraktu?",
      a: "„Koszt Zbilansowania Kontraktu” – koszty bilansowania handlowego i fizycznego realizacji kontraktów zawartych między wytwórcami i odbiorcami, wynikające z różnic między krzywymi produkcji i poboru występujących w każdej godzinie, każdego okresu trwania kontraktu."
    },
    {
      q: "Jakie warunki powinieneś spełnić żeby sprzedawać energię elektryczną na Reo.pl?",
      a: "Powinieneś posiadać status Wytwórcy energii elektrycznej i mieć zarejestrowaną działalność gospodarczą. Sam odkup energii będzie możliwy jeśli posiadasz licznik jednokierunkowy."
    },
    {
      q: "Jaką energię kupisz i sprzedasz na Reo.pl?",
      a: "Reo.pl to ekspert w obrocie energią pochodzącą w 100% z OZE. Należymy do grupy m.in. wspólnie z Polską Grupą Biogazową i Enerco."
    },
    {
      q: "Jak będzie rozliczana sprzedaż wyprodukowanej przeze mnie energii?",
      a: "Energię, którą wyprodukujesz i wprowadzisz do sieci dystrybucyjnej, zostanie rozliczona po cenie rynkowej lub po cenie z wybranej oferty na platformie Reo.pl."
    },
    {
      q: "Co jeśli wyprodukuję mniejszy wolumen energii niż zadeklarowałem w kontrakcie?",
      a: "Wytwórca rozliczany jest według rzeczywistej produkcji. Należy jak najdokładniej oszacować wolumen. Reo.pl zbilansuje powstałą różnicę automatycznie – pobierając nadmiar z rynku i pokrywając Twojemu podmiotowi braki."
    },
    {
      q: "Co jeśli wyprodukuję większy wolumen energii niż zadeklarowałem w kontrakcie?",
      a: "Jeśli wyprodukujesz większą ilość energii elektrycznej niż wskazałeś w ofercie, to wyprodukowana nadwyżka ulega rozliczeniu po ustalonej cenie i zabezpieczona przez naszą jednostkę bilansującą."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Banner */}
      <section className="bg-brand-dark relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-green mb-6 uppercase tracking-wider">
            Usługi KSE Reo.pl
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Bilansowanie energetyczne <span className="text-brand-green">POB</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Profesjonalne usługi bilansowania fizycznego i handlowego energii wewnątrz algorytmów Krajowego Systemu Elektroenergetycznego.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full bg-slate-50">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-brand-green transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/uslugi/zmiana-sprzedawcy" className="hover:text-brand-green transition-colors">Usługi</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Bilansowanie energii</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1">
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full opacity-50"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e1a3b] mb-6 relative z-10">Zarządzamy stabilnością TGE</h2>
                <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                  Jako uczestnik rynku bilansującego dysponujemy <strong>własną ogromną jednostką grafikową</strong> (autorskim silnikiem bilansującym).
                </p>
                <div className="mt-8 relative z-10 p-6 bg-slate-50 border-l-4 border-brand-green rounded-r-xl">
                  <p className="text-slate-700 font-medium leading-relaxed">
                    Nasza oferta obejmuje nie tylko standardowe bilansowanie handlowe oparte na grafikach 15-minutowych i dobowo-godzinowych, ale również dedykowane i elastyczne formy bilansowania wymagające autorskich profili i krzywych rozliczeniowych.
                  </p>
                </div>
              </div>

              {/* Jak Bilansujemy */}
              <h3 className="text-2xl font-bold text-[#1e1a3b] mb-8">Zakres prowadzonych bilansowań (POB)</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 items-start">
                  <RefreshCcw className="w-8 h-8 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">TGE / Kontrakty Rynkowe</h5>
                    <p className="text-sm text-slate-600">Pełen obrót podmiotów uczestniczących czynnie na rynkach Towarowej Giełdy Energii (TGE/Fixing).</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 items-start">
                  <Network className="w-8 h-8 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Sieci dystrybucyjne OSDn</h5>
                    <p className="text-sm text-slate-600">Obsługa rozliczeniowa operatorów sieci lokalnych OSDn odseparowanych od OSP (PSE).</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 items-start">
                  <BoxSelect className="w-8 h-8 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Klastry i Autokonsumpcje</h5>
                    <p className="text-sm text-slate-600">Modele autokonsumpcji, klastry energetyczne, spółdzielnie z rozproszonymi PPE dla wirtualnych elektrowni (VPP).</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 items-start">
                  <TrendingDown className="w-8 h-8 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Mikroinstalacje bez net-billingu</h5>
                    <p className="text-sm text-slate-600">Alternatywne bilansowanie dla mikroinstalacji OZE (często korzystniejsze i bardziej marżowe niż wadliwy system opustów lub net-billingu rocznego).</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Bar */}
              <div className="bg-brand-green p-8 rounded-2xl shadow-lg text-white mb-16 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Zapytaj o wycenę Kosztu Bilansowania</h3>
                  <p className="text-emerald-50">Przeanalizujemy profile produkcji i poboru z Twoich Punktów (PPE).</p>
                </div>
                <Link href="/kontakt" className="relative z-10 shrink-0 bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                  Zamów konsultację POB <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8 border-t border-slate-200 pt-16">Pytania techniczne (FAQ)</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 focus:outline-none"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-brand-green transition-transform duration-300 shrink-0 ${openFaq === index ? "rotate-180" : ""}`} />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Profil Dopuszczalnej Odchyłki</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Zastanawiasz się, jakie wielkości niedoborów spowodują kary nałożone przez KSE, a na czym zyskasz potężny pasywny dochód arbitrażem? Sprawdzimy to poprzez algorytm Reo POB.
                </p>
                <div className="space-y-3">
                  <a href="mailto:sprzedaz@reo.pl" className="block w-full bg-brand-green hover:bg-brand-dark text-white text-center py-3 rounded-xl font-semibold transition-colors">
                    Napisz o wycenę profilu
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
