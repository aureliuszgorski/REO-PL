"use client";

import Link from "next/link";
import { ChevronRight, ChevronDown, Handshake, Leaf, SlidersHorizontal, Users, Zap } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlatformaP2PPage() {
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
      q: "Jak wygląda faktura prosumenta / wytwórcy i jak odczytać informacje na fakturze?",
      a: "Przykładowa faktura zostanie dostarczona przez Twojego dedykowanego opiekuna wraz z dokładną instrukcją czytania poszczególnych pozycji bilansowych."
    },
    {
      q: "Jak podpisujemy umowy z Klientami?",
      a: "Umowy z klientami podpisujemy elektronicznie. Do wyboru: kwalifikowany podpis elektroniczny, podpisanie przez profil zaufany lub platformę Autenti."
    },
    {
      q: "Gdzie uzyskam informacje dotyczące moich płatności?",
      a: "Informację o płatnościach otrzymasz drogą mailową, a także po zalogowaniu na Koncie Klienta Reo.pl."
    },
    {
      q: "Jak wygląda proces podpisania umowy z wytwórcą energii?",
      a: "Po rezerwacji oferty w Tabeli, w ciągu 24h kontaktuje się Doradca. Przesyła umowę elektroniczną z czasem na podpis max 48h."
    },
    {
      q: "Jak będzie rozliczana sprzedaż wyprodukowanej przeze mnie energii?",
      a: "Zostanie rozliczona po cenie rynkowej lub po gwarantowanej cenie z wybranej oferty zawartej na platformie Reo.pl."
    },
    {
      q: "Co jeśli wyprodukuję mniejszy wolumen energii niż zadeklarowałem w kontrakcie?",
      a: "Wytwórca rozliczany jest według rzeczywistej produkcji. Reo.pl zbilansuje powstałą różnicę automatycznie."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Banner */}
      <section className="bg-brand-dark relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-green mb-6 uppercase tracking-wider">
            Innowacja Reo.pl
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Platforma <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-green">Peer-to-Peer</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Handel partnerski P2P. Poznaj cyfrową platformę handlową, która umożliwia zawieranie transakcji bezpośrednio między samymi uczestnikami giełdy.
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
              <span className="text-brand-green font-bold">Platforma Peer-to-Peer</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium mb-8">
                  W modelu Peer-to-Peer (P2P) sprzedawcy i odbiorcy energii elektrycznej bezpośrednio ustalają między sobą warunki cenowe. W ten sposób pomijasz potężne, przestarzałe korporacyjne struktury pośredników.
                </p>
                <div className="bg-white border-l-4 border-brand-green p-6 rounded-r-xl shadow-sm">
                  <p className="text-slate-600 m-0">
                    W rezultacie wolumeny energii elektrycznej, które są przedmiotem handlu na platformie i wprowadzane do publicznej sieci, nie podlegają tradycyjnym mechanizmom handlowym. Rozliczanie transakcji i skomplikowane bilansowanie (oraz profilaktyka dobowo-godzinowa) odbywają się w 100% za pośrednictwem operatora platformy Reo.pl.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-brand-green/30 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Handshake className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Bezpośredni handel energią</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nasza platforma umożliwia bezpośredni handel energią pomiędzy producentami a konsumentami, całkowicie eliminując pośredników i dramatycznie zmniejszając koszty transakcyjne na każdej jednostce energii.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-brand-green/30 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-emerald-50 text-brand-green rounded-xl flex items-center justify-center mb-6">
                    <Leaf className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Zielona energia na 1. miejscu</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Platforma skupia jedynie producentów i odbiorców energii elektrycznej z odnawialnych źródeł (OZE). Klienci kupujący mogą świadomie wybierać unikalne instalacje zielonej energii.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-brand-green/30 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mb-6">
                    <SlidersHorizontal className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">Indywidualna kontrola</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Klienci mają pełną kontrolę nad swoim zużyciem energii. Dzięki intuicyjnym, panelowym narzędziom zarządzania mogą monitorować swoje prognozy i planować opłacalne pakiety handlowe.
                  </p>
                </div>

                <div className="bg-[#1e1a3b] p-8 rounded-2xl shadow-xl flex flex-col justify-center items-start text-white relative overflow-hidden transition-all hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green rounded-full blur-[60px] opacity-40"></div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Dołącz do rewolucji</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                    Przyłącz się do potężnej inteligentnej społeczności, która aktywnie wspiera odnawialne źródła energii w sposób nieszablonowy.
                  </p>
                  <Link href="/kontakt" className="bg-brand-neon hover:bg-brand-green text-white font-bold px-6 py-3 rounded-lg transition-colors relative z-10">
                    Kontakt z konsultantem
                  </Link>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8 border-t border-slate-200 pt-16">Pytania techniczne (FAQ)</h2>
              <div className="space-y-3">
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
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Weryfikacja P2P</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Zastanawiasz się, jak wdrożyć system wielostronnej wymiany P2P w swojej grupie przedsiębiorstw? Zostaw nam wiadomość, zrobimy analizę i wdrożymy model bezkosztowo.
                </p>
                <Link href="/kontakt" className="block w-full bg-[#1e1a3b] hover:bg-black text-white text-center py-3 rounded-xl font-semibold transition-colors mb-3">
                  Poproś o audyt
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
