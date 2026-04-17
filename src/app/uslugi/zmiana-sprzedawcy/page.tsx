"use client";

import Link from "next/link";
import { ChevronRight, ChevronDown, CheckCircle2, UserPlus, MousePointerClick, FileText, PiggyBank } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ZmianaSprzedawcyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 text-blue-500" />,
      title: "Wypełnij Formularz Online",
      desc: "Odwiedź naszą stronę internetową, wypełnij krótki formularz kontaktowy i poczekaj na telefon od Opiekuna Klienta Reo.pl."
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-500" />,
      title: "Otrzymaj Indywidualną Ofertę",
      desc: "Nasz zespół bezpłatnie przeanalizuje Twoje uwarunkowania i przedstawi spersonalizowaną, korzystną ofertę 100% z OZE."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />,
      title: "Potwierdź Zmianę",
      desc: "Zatwierdź zmianę dostawcy poprzez pełnomocnictwo. My zajmiemy się całą papierologią z OSD u Twojego obecnego dostawcy. Bez przerw w zasilaniu."
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-brand-neon" />,
      title: "Zacznij Oszczędzać",
      desc: "Oszczędzaj na rachunkach za prąd, korzystając z prestiżowej, bezemisyjnej energii i zasilaj biznes wprost z TGE."
    }
  ];

  const faqs = [
    {
      q: "Ile czasu trwa zmiana sprzedawcy?",
      a: "Jeśli zdecydowałeś się dołączyć do nas, musimy zgłosić „procedurę zmiany sprzedawcy” u OSD, która zgodnie z Prawem Energetycznym trwa około 21 dni. Dodatkowo dla wytwórcy przeprowadzimy również zmianę POB. Jeśli natomiast kontynuujesz korzystanie z platformy Reo.pl, Twoja nowa umowa może wejść w życie nazajutrz. Nowe umowy rozpoczynają się zwykle pierwszego dnia następnego miesiąca po udanej procedurze."
    },
    {
      q: "Do kogo mam zgłosić awarię sieci, gdy podpiszę umowę z Reo.pl?",
      a: "Awarię sieci należy zawsze zgłaszać pod ogólnopolskim numerem alarmowym 991. Działa on całą dobę przez 365 dni w roku, bez względu na teren działania Operatora (OSD). Za niedostarczenie energii nigdy nie odpowiada sprzedawca prądu (my), tylko lokalny dystrybutor (właściciel kabli)."
    },
    {
      q: "Kto to jest sprzedawca rezerwowy energii elektrycznej?",
      a: "Jeżeli nagle stracisz swojego obecnego sprzedawcę prądu (np. ogłasza upadłość lub rozwiązujecie umowę), automatycznie wchodzi tzw. sprzedawca rezerwowy. Pamiętaj jednak o ekstremalnie wysokich, nieuregulowanych karach i cenach w ramach sprzedaży rezerwowej, które bywają kilkukrotnie wyższe."
    },
    {
      q: "Czym kierować się przy wyborze nowego sprzedawcy energii?",
      a: "Cena jest kardynalnym czynnikiem wyboru, ale warto postawić na zieloną energię (Świadomość ESG). Wybór Reo.pl oraz Polskiej Grupy Biogazowej, które inwestują w nową infrastrukturę elektrowni, oznacza dla Ciebie twarde i bezcenne gwarancje pochodzenia 100% z OZE, co drastycznie ratuje ślad węglowy Scope 2 u Twoich klientów."
    },
    {
      q: "Czy zmiana jest darmowa i muszę wymieniać licznik?",
      a: "Tak. Zmiana sprzedawcy jest w Polsce zagwarantowanym prawnie procesem całkowicie bezpłatnym. Nie musisz wymieniać domowego lub firmowego okablowania, ani licznika – po kablach popłynie ta sama energia, a zmieni się zaledwie nagłówek i cena na samej fakturze."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Target Banner */}
      <section className="bg-brand-dark relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-neon mb-6 uppercase tracking-wider">
            Zmień Dostawcę
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Zmiana sprzedawcy <span className="text-brand-green">online</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Zastanawiasz się, jak zaoszczędzić na rachunkach za prąd i obniżyć ślad węglowy? Podpisz zieloną Umowę PPA i zleć nam formalności przeniesienia za darmo.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-brand-green transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/uslugi/zmiana-sprzedawcy" className="hover:text-brand-green transition-colors">Usługi</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Zmiana sprzedawcy</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-6">4 kroki do niższych rachunków (i czystszego sumienia)</h2>
            <p className="text-lg text-slate-600">
              Zmiana dostawcy prądu w Polsce budzi wiele negatywnych skojarzeń. W Reo.pl zdigitalizowaliśmy ten proces do maksimum. Wystarczy pełnomocnictwo (GUD-K), a my wyrejestrowujemy Cię od starego monopolisty zupełnie po cichu i bezpiecznie.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-24">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:border-brand-green/30 transition-all hover:shadow-md">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {idx + 1}
                </div>
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1">
              
              <div className="bg-slate-100 p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-brand-neon to-brand-green"></div>
                <h2 className="text-2xl font-extrabold text-[#1e1a3b] mb-6">Dwa najpopularniejsze modele rozliczeń do wyboru</h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-4 h-4 rounded-full bg-brand-green"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Oferta ze stałą ceną (Fixed)</h4>
                      <p className="text-slate-600 text-sm">Zabezpiecza budżet Twojej firmy przed szokami na giełdzie. Umożliwia perfekcyjne przewidywanie i stałe ryczałtowanie opłat we własnym modelu finansowym i dla najemców.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Rozliczanie oparte o Fixing (RDN SPOT)</h4>
                      <p className="text-slate-600 text-sm">Masz możliwość łapania ujemnych i bardzo niskich cen prądu w słoneczne, weekendowe dni na giełdzie TGE. Skierowane dla firm z dużą elastycznością i zmiennym poborem w takcie doby (duże korzyści dla branży chłodniczej).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-8 border-t border-slate-200 pt-16">Pytania odnośnie zmiany sprzedawcy (FAQ)</h2>
              
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

            {/* Sidebar B2B */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserPlus className="w-10 h-10 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Dołącz i rozpocznij proces</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Zostaw swoje namiary. Oddzwonimy w kwadrans, przygotujemy Umowę PPA i od razu zlecimy wymówienie w Energa/Enea/Tauron/PGE w Twoim imieniu.
                </p>
                <Link href="/kontakt" className="block w-full bg-[#1e1a3b] hover:bg-black text-white text-center py-4 rounded-xl font-bold transition-transform hover:scale-105 shadow-md">
                  Przejdź do formularza
                </Link>
                <p className="text-xs text-slate-400 mt-4 text-center">Procedura trwa 21 dni.</p>
              </div>
            </aside>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
