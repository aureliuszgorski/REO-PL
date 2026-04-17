"use client";

import Link from "next/link";
import { ChevronRight, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const faqs = [
    {
      q: "Jak kupować i sprzedawać energię na Reo.pl?",
      a: "Aby rozpocząć kupowanie lub sprzedawanie energii, należy założyć konto na Reo.pl, zarejestrować się jako odbiorca lub wytwórca, a następnie przeglądać dostępne oferty w sekcji Giełda. Możesz wystawiać własne zapytania ofertowe lub rezerwować wybrane zlecenia od zarejestrowanych wytwórców OZE."
    },
    {
      q: "Co oznacza Koszt Zbilansowania Kontraktu?",
      a: "„Koszt Zbilansowania Kontraktu” – koszty bilansowania handlowego i fizycznego realizacji kontraktów zawartych między wytwórcami i odbiorcami, wynikające z różnic między krzywymi produkcji i poboru występujących w każdej godzinie, każdego okresu trwania kontraktu."
    },
    {
      q: "Jak będzie rozliczany zakup energii na Reo.pl?",
      a: "Rozliczenia za pobraną energię elektryczną dokonywane są na podstawie wskazań układów pomiarowo-rozliczeniowych, dostarczonych przez OSD, w przyjętym okresie rozliczeniowym lub według prognozowanego zużycia energii elektrycznej dla Odbiorcy."
    },
    {
      q: "Czym jest opłata kogeneracyjna i OZE?",
      a: "Opłata kogeneracyjna oraz OZE to części opłaty dystrybucyjnej, niezwiązane z samym zakupem energii elektrycznej. Środki te są przeznaczane na wsparcie wysokosprawnej kogeneracji oraz odnawialnych źródeł energii."
    },
    {
      q: "Jak podpisujemy umowy z Klientami?",
      a: "Umowy z klientami podpisujemy w 100% elektronicznie. Do wyboru masz trzy możliwości: kwalifikowany podpis elektroniczny, podpisanie dokumentu przez profil zaufany lub przez platformę Autenti."
    },
    {
      q: "Co to jest cena RDN na TGE?",
      a: "Rynek Dnia Następnego (RDN) to segment Towarowej Giełdy Energii (TGE) służący fizycznej dostawie energii na dzień następny. Notowania realizowane są poprzez tzw. fixing."
    },
    {
      q: "Co to jest cena RB?",
      a: "Rynek Bilansujący (RB) jest technicznym rynkiem prowadzonym przez Polskie Sieci Elektroenergetyczne (PSE), który służy do ostatecznego zbilansowania podaży i popytu energii w każdej godzinie działania systemu."
    },
    {
      q: "Jakie warunki spełnić żeby sprzedawać energię na Reo.pl?",
      a: "Powinieneś posiadać status Wytwórcy energii elektrycznej i aktywną działalność gospodarczą. Sprzedaż energii w modelu P2P możliwa jest z liczników jednokierunkowych (dedykowanych instalacji wytwórczych)."
    },
    {
      q: "Czym jest umowa PPA (Power Purchase Agreement)?",
      a: "Umowa PPA to wieloletni, bezpośredni kontrakt zabezpieczający cenę energii pomiędzy wytwórcą OZE a ostatecznym korporacyjnym odbiorcą, redukujący ryzyko cenowe i pozwalający trwale ograniczyć ślad węglowy Scope 2."
    }
  ];

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
            Często zadawane <span className="text-brand-green">pytania</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-medium">
            Masz pytania dotyczące procesu sprzedaży lub zakupu energii z OZE? Tutaj znajdziesz na nie odpowiedzi.
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
              <span className="text-brand-green font-bold">FAQ</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-4">
                      <HelpCircle className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">{faq.q}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support block */}
              <div className="bg-slate-100 rounded-3xl p-8 md:p-12 mt-16 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-[#1e1a3b] mb-4">Nie znalazłeś odpowiedzi?</h3>
                <p className="text-slate-600 mb-8 max-w-lg">
                  Nasi doradcy energetyczni są gotowi, aby odpowiedzieć na wszystkie Twoje pytania i pomóc w optymalizacji kosztów energii.
                </p>
                <Link href="/kontakt" className="bg-[#1e1a3b] hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                  Skontaktuj się z nami
                </Link>
              </div>

            </article>

            {/* Sidebar O NAS */}
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
                    <Link href="/o-nas/najczesciej-zadawane-pytania" className="text-sm text-brand-green font-bold flex items-center gap-2">
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
