"use client";

import Link from "next/link";
import { ChevronRight, ChevronDown, Zap, Globe, Leaf, Target, ShieldCheck, Factory, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PPA_Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Co oznacza Koszt Zbilansowania Kontraktu?",
      a: "„Koszt Zbilansowania Kontraktu” – koszty realizacji przyjętej Oferty wynikające z różnicy pomiędzy wytwarzaniem energii elektrycznej w danej Instalacji OZE, a zużyciem energii elektrycznej przez danego Odbiorcę, w danym okresie."
    },
    {
      q: "Gdzie sprawdzić jaka jest obecnie cena na RB i TGE?",
      a: "Ceny Rynku Bilansującego (RB) można sprawdzić na stronie internetowej Polskich Sieci Elektroenergetycznych (PSE). Ceny TGE można sprawdzić na stronie Towarowej Giełdy Energii."
    },
    {
      q: "Co to jest cena RDN na TGE?",
      a: "Rynek Dnia Następnego (w skrócie RDN) jest to jeden z rynków funkcjonujących w ramach Towarowej Giełdy Energii. Handel odbywa się głównie pomiędzy wytwórcami energii, a spółkami obrotu lub dużymi odbiorcami na jeden dzień przed fizyczną dostawą."
    },
    {
      q: "Co to jest cena RB?",
      a: "Rynek Bilansujący (w skrócie RB) jest rynkiem technicznym, na którym dokonuje się zbilansowania produkcji i zapotrzebowania oraz zapewnia się fizyczną realizację zawartych przez uczestników umów. Podmiotem odpowiedzialnym za funkcjonowanie RB są Polskie Sieci Elektroenergetyczne."
    },
    {
      q: "Czy cena zmienna oznacza, że sprzedawca będzie mógł dowolnie zmieniać cenę w ciągu roku?",
      a: "Nie, cena zmienna oznacza, że do rozliczenia kontraktu będzie wykorzystana oficjalna cena godzinowa (np. z Rynku Bilansującego lub TGE) powiększona o ustaloną, sztywną marżę i ustawowe koszty. Rozliczenie zawsze zależy od faktycznych notowań rynkowych."
    },
    {
      q: "Czym jest opłata kogeneracyjna i mocowa?",
      a: "Są to ustawowe opłaty dystrybucyjne. Opłata kogeneracyjna finansuje wsparcie wysokosprawnej kogeneracji. Opłata mocowa służy na utrzymanie i rozwój mocy wytwórczych w sieci, a o jej wysokości decyduje URE."
    },
    {
      q: "Jak uzyskam potwierdzenie, że zakupiona przeze mnie energia jest z OZE?",
      a: "Na platformie Reo.pl sprzedajemy wyłącznie zieloną energię. Dodatkowo energia jest dostarczana z gwarancjami pochodzenia OZE, a Reo posiada własny znak jakości, który udostępniamy klientom."
    },
    {
      q: "Do kogo zgłosić awarię po podpisaniu umowy?",
      a: "Gdy podpiszesz umowę, za dostawy fizyczne odpowiada Twój lokalny dystrybutor (OSD). Awarię sieci należy zgłaszać pod bezpłatnym numerem alarmowym 991, czynnym 24/7 na terenie całej Polski."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Premium Banner */}
      <section className="bg-[#1e1a3b] relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a3b] via-[#1e1a3b]/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-green mb-6 uppercase tracking-wider">
            Oferta Reo.pl
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Umowy długoterminowe <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-green">PPA</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Innowacyjne rozwiązanie PPA (Power Purchase Agreement), pozwalające korzystać z zielonej energii w sposób w 100% ekonomiczny i ekologiczny.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full bg-slate-50">
        
        {/* Breadcrumbs */}
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-brand-green transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/oferta/umowy-dlugoterminowe-ppa" className="hover:text-brand-green transition-colors">Oferta</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Umowy długoterminowe PPA</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              {/* Wstęp text */}
              <p className="text-xl leading-relaxed text-slate-600 mb-12">
                Umowy typu PPA (Power Purchase Agreement) to innowacyjne rozwiązanie, które pozwala firmom i instytucjom na korzystanie z energii ze źródeł odnawialnych w sposób ekonomiczny, a przy tym dający wymierny efekt ekologiczny.
              </p>

              {/* cPPA i vPPA Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-brand-green/30 transition-colors">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                    <Factory className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e1a3b] mb-4">Umowy cPPA</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Umowa cPPA dotyczy fizycznych dostaw energii elektrycznej, realizowanych za pośrednictwem krajowego systemu elektroenergetycznego (KSE). W takiej umowie ustalana jest ilość oraz cena energii. Dodatkowym elementem jest zaawansowane bilansowanie dostaw i rozliczenia.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-brand-green/30 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e1a3b] mb-4">Umowy vPPA</h3>
                  <p className="text-slate-600 leading-relaxed">
                    vPPA to kontrakt finansowy powiązany z fizyczną umową sprzedaży, ale nie obejmujący samej fizycznej dostawy. Zapewnia rozliczenie różnicowe, sprowadzające docelową cenę zakupu energii dostarczanej fizycznie z zewnątrz, do poziomu stabilnej ceny uzgodnionej w ramach vPPA.
                  </p>
                </div>
              </div>

              {/* Korzyści */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8">Dlaczego warto?</h2>
              
              <div className="space-y-6 mb-16">
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Target className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Optymalizacja kosztów i bezpieczeństwo</h4>
                    <p className="text-slate-600">Umożliwiają uzyskanie konkurencyjnych stawek za energię odnawialną. Dzięki długoterminowej specyfice zyskujesz gwarancję, że Twoje koszty węglowe są przewidywalne na lata w przód.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Zwiększenie niezależności</h4>
                    <p className="text-slate-600">Zyskujesz pełną niezależność energetyczną poprzez bezpośredni kontrakt ze źródłami odnawialnymi (energia wiatrowa lub słoneczna).</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Leaf className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Realizacja celów ESG i redukcja emisji</h4>
                    <p className="text-slate-600">Możesz dumnie prezentować firmę jako zielonego lidera z pełnym wsparciem w dokumentowaniu wskaźników zrównoważonego rozwoju i znaczącą redukcją gazów cieplarnianych (CO2).</p>
                  </div>
                </div>
              </div>

              {/* Lista korzyści technicznych */}
              <div className="bg-[#1e1a3b] p-8 md:p-10 rounded-2xl shadow-xl text-white mb-16 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-green rounded-full blur-[100px] opacity-20"></div>
                <h3 className="text-2xl font-bold mb-8">PPA w Reo.pl to gwarancja:</h3>
                <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-neon" /> Energia 100% ze źródeł OZE</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-neon" /> Cena indeksowana lub sztywna</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-neon" /> Kontrakty i rozliczenia na 10 - 15 lat</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-neon" /> Precyzyjne bilansowanie</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-neon" /> Kontrakty z uwzględnieniem Euro lub PLN</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-neon" /> Całościowa administracja i obsługa</li>
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/kontakt" className="bg-brand-neon hover:bg-brand-green text-white px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                    Kontakt z konsultantem <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link href="/kalkulator" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-colors inline-block">
                    Sprawdź symulację
                  </Link>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8 border-t border-slate-200 pt-16">Najczęściej zadawane pytania</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-brand-green transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
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

            {/* Sidebar (Optional contextual elements) */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Skonsultuj kontrakt PPA</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Zabezpiecz stabilne koszty energii dla swojego przedsiębiorstwa już dziś. Zespół ekspertów Reo.pl pomoże dobrać odpowiednią strategię oraz strukturę transakcji.
                </p>
                <div className="space-y-3">
                  <Link href="/kontakt" className="block w-full bg-[#1e1a3b] hover:bg-black text-white text-center py-3 rounded-xl font-semibold transition-colors">
                    Napisz do nas
                  </Link>
                  <a href="mailto:sprzedaz@reo.pl" className="block w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-center py-3 rounded-xl font-semibold transition-colors">
                    sprzedaz@reo.pl
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
