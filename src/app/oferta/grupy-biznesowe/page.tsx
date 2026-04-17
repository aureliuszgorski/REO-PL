"use client";

import Link from "next/link";
import { ChevronRight, ChevronDown, CheckCircle2, Factory, Network, Zap, ShieldCheck, Scale, Users, FileSignature, Coins } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GrupyBiznesowePage() {
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
      a: "Powinieneś posiadać status Wytwórcy energii elektrycznej i mieć zarejestrowaną działalność gospodarczą. Sam odkup energii będzie możliwy, jeśli posiadasz licznik jednokierunkowy. Jeśli masz licznik dwukierunkowy sam zakup przez nas energii jest niemożliwy - wtedy zawrzemy umowę na zakup i sprzedaż energii elektrycznej."
    },
    {
      q: "Jaką energię kupisz i sprzedasz na Reo.pl?",
      a: "Reo.pl to ekspert w dziedzinie obrotu energią elektryczną, pochodzącą w 100% z odnawialnych źródeł energii. Należymy do grupy kapitałowej (m.in. Polska Grupa Biogazowa i Enerco), produkującej zieloną energię w oparciu o własne biogazownie, farmy PV i instalacje wiatrowe od 2007 roku."
    },
    {
      q: "Jak wygląda faktura prosumenta / wytwórcy i jak odczytać informacje na fakturze?",
      a: "Po weryfikacji danych, Twój dedykowany opiekun przekaże Ci szczegółowe wytyczne oraz czytelne wzory testowe (Przykładowa faktura prosumenta / wytwórcy)."
    },
    {
      q: "Jak podpisujemy umowy z Klientami?",
      a: "Umowy z klientami podpisujemy elektronicznie. Do wyboru masz trzy możliwości: kwalifikowany podpis elektroniczny, podpisanie dokumentu przez profil zaufany lub przez platformę Autenti."
    },
    {
      q: "Gdzie uzyskam informacje dotyczące moich płatności?",
      a: "Informację o płatnościach i aktualnym saldzie otrzymasz za pośrednictwem poczty e-mail z poziomu Konta Użytkownika. Pytania dotyczące salda prosimy kierować na adres reo@reo.pl"
    },
    {
      q: "Jak wygląda proces podpisania umowy z wytwórcą energii?",
      a: "Po rezerwacji oferty otrzymasz mailowe potwierdzenie. W ciągu 24h skontaktuje się z Tobą Doradca. Prześle umowę elektroniczną do podpisu na Autenti/Profilu Zaufanym (masz na to 48h). Po weryfikacji otrzymasz obustronnie podpisaną umowę elektroniczną."
    },
    {
      q: "Co jeśli wyprodukuję mniejszy lub większy wolumen energii niż zadeklarowałem?",
      a: "Wytwórca rozliczany jest według rzeczywistej produkcji. Reo.pl zbilansuje różnicę w przypadku niedoborów. Jeśli wyprodukujesz więcej, nadwyżka zostanie rozliczona po ustalonej cenie i również zostaniesz w pełni zbilansowany."
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
            Oferta Reo.pl
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Grupy <span className="text-brand-green">Biznesowe</span> Reo.pl
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Zakres współpracy w modelu Grupy biznesowej zakłada sprzedaż i zakup wytworzonej energii z OZE na całkowicie indywidualnych warunkach.
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
              <span className="text-brand-green font-bold">Grupy biznesowe</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full opacity-50"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e1a3b] mb-6 relative z-10">Dołącz do Grup Biznesowych</h2>
                <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                  Współpraca w modelu Grupy biznesowej zakłada sprzedaż wytworzonej przez Wytwórcę OZE energii elektrycznej w ramach utworzonej Grupy, po cenie ustalonej przez członków tej Grupy.
                </p>
                <div className="mt-8 relative z-10 p-6 bg-slate-50 border-l-4 border-brand-green rounded-r-xl">
                  <p className="text-slate-700 font-medium leading-relaxed">
                    <strong>Reo.pl sp. z o.o.</strong> – specjalizująca się w obrocie energią elektryczną pochodzącą w 100% z odnawialnych źródeł energii, pozostaje fizyczną stroną kontraktu, która odpowiedzialna jest za jego całościową obsługę, w tym w szczególności za kluczowe bilansowanie handlowe i rozliczenia.
                  </p>
                </div>
              </div>

              {/* Dla kogo? Target Audience */}
              <h3 className="text-2xl font-bold text-[#1e1a3b] mb-8">Czy to rozwiązanie dla Ciebie?</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center hover:border-brand-green/40 transition-colors">
                  <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
                    <Network className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800">Twój biznes jest powiązany kapitałowo</h4>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center hover:border-brand-green/40 transition-colors">
                  <div className="w-16 h-16 bg-emerald-50 text-brand-green rounded-full flex items-center justify-center mb-6">
                    <Factory className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800">Część biznesu rozproszona w wielu lokalizacjach</h4>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center hover:border-brand-green/40 transition-colors">
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800">Jesteś wytwórcą i odbiorcą energii OZE</h4>
                </div>
              </div>

              {/* Zalety */}
              <h3 className="text-2xl font-bold text-[#1e1a3b] mb-8">Kluczowe korzyści</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Kompleksowość</h5>
                    <p className="text-sm text-slate-600">Pełna obsługa i rozliczenia uczestników Grup przez Reo.pl dzięki innowacyjnym systemom informatycznym.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Bezpieczeństwo</h5>
                    <p className="text-sm text-slate-600">Bezpieczeństwo ekonomiczne – przewidywalność kosztów / przychodów w średnim i długim okresie czasu.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Coins className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Oszczędność</h5>
                    <p className="text-sm text-slate-600">Ograniczenie kosztów bilansowania – techniczny odbiór nadwyżek i pokrycie niedoborów w ramach Grupy.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Network className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Potencjał</h5>
                    <p className="text-sm text-slate-600">Możliwość innowacyjnego nawiązywania potężnej współpracy handlowej bezpośrednio między Grupami.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <FileSignature className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Personalizacja</h5>
                    <p className="text-sm text-slate-600">Ustalanie indywidualnych warunków handlowych bezpośrednio między wytwórcami i odbiorcami na giełdzie.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Scale className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Swoboda</h5>
                    <p className="text-sm text-slate-600">Elastyczność ułożenia pełnych relacji między i wewnątrz uczestnikami Grupy bez barier dystrybutorów.</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Bar */}
              <div className="bg-brand-green p-8 rounded-2xl shadow-lg text-white mb-16 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Zapytaj o ofertę dla Twojej Grupy</h3>
                  <p className="text-emerald-50">Nasi doradcy pomogą skompletować i zaplanować wszystkie węzły.</p>
                </div>
                <Link href="/kontakt" className="relative z-10 shrink-0 bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                  Kontakt z konsultantem <ChevronRight className="w-5 h-5" />
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
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Symulacja Oszczędności</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Zabezpiecz środowisko kosztowe w strukturze wielu firm. Reo udostępnia potężne narzędzie analityczne.
                </p>
                <div className="space-y-3">
                  <Link href="/kalkulator" className="block w-full bg-brand-green hover:bg-brand-dark text-white text-center py-3 rounded-xl font-semibold transition-colors">
                    Sprawdź symulację
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
