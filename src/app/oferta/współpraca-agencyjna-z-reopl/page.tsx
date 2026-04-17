"use client";

import Link from "next/link";
import { ChevronRight, Target, Users, BookOpen, Handshake, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WspolpracaAgencyjnaPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Banner */}
      <section className="bg-brand-dark relative w-full h-[300px] md:h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-semibold text-brand-neon mb-6 uppercase tracking-wider">
            Zostań Partnerem
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Współpraca <span className="text-brand-green">Agencyjna</span> z Reo.pl
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl font-medium">
            Dołącz do czołówki branży OZE i rozwijaj swój biznes we współpracy ze stabilnym, krajowym partnerem.
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
              <span className="text-brand-green font-bold">Współpraca agencyjna</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <article className="flex-1">
              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="lead text-2xl text-slate-700 font-medium mb-8">
                  Rynek odnawialnych źródeł energii to obecnie jedna z najszybciej rozwijających się gałęzi polskiej gospodarki, co tworzy absolutnie wyjątkową przestrzeń dla nowoczesnego biznesu sprzedażowego i B2B.
                </p>
                <div className="bg-white border-l-4 border-brand-green p-6 rounded-r-xl shadow-sm mb-6">
                  <p className="text-slate-600 m-0">
                    W Reo.pl stoimy w samym centrum zmiany. Budujemy ogólnopolską sieć Partnerów – ambitnych profesjonalistów, którzy chcą wyjść z innowacyjnymi PPA na rynki lokalne.
                  </p>
                </div>
              </div>

              {/* Boxy Korzyści */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">Konkurencyjny system wynagrodzeń</h3>
                  <p className="text-slate-500 text-sm">Model oparty na jasnych zasadach, profit sharing i pełnej prowizyjnej transparentności.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-50 text-brand-green rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">Dostęp do unikalnego know-how</h3>
                  <p className="text-slate-500 text-sm">Zapewniamy profesjonalne szkolenia PPA produktowe oraz materiały marketingowe.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                    <Handshake className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">Wsparcie grupy kapitałowej Reo.pl</h3>
                  <p className="text-slate-500 text-sm">Dedykowany opiekun pomaga zdobyć dominującą pozycję na rynku doradztwa.</p>
                </div>
              </div>

              <div className="bg-slate-100 p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-brand-neon to-brand-green"></div>
                <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-4">Dla kogo jest nasza współpraca?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">Dla Przedsiębiorców B2B</strong>
                      <span className="text-slate-600 text-sm">Rozszerz dotychczasowe portfolio produktowe o prestiżowe Czyste Energie do ofertowania.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">Dla Ekspertów Energetycznych</strong>
                      <span className="text-slate-600 text-sm">Zwiększ konwersję i daj swoim wielkim stacjonarnym klientom bezpośredni wgląd do giełdy Reo.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                    <div>
                      <strong className="block text-slate-800 font-bold">Dla Stowarzyszeń Cechowych</strong>
                      <span className="text-slate-600 text-sm">Twórz z nami potężne Grupy Biznesowe zrzeszające Izby Gospodarcze w Twoim regionie.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1e1a3b] p-8 md:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-brand-green rounded-full blur-[80px] opacity-40"></div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-bold mb-2">Postaw na rozwój w 100% z OZE</h3>
                  <p className="text-emerald-50">Dołączając do nas, zyskujesz markę i kapitał potężnego konsorcjum. Startujmy.</p>
                </div>
                <div className="relative z-10 shrink-0">
                  <Link href="/kontakt" className="bg-brand-green hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                    Nawiąż współpracę <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

            </article>

            {/* Sidebar B2B */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="sticky top-[160px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-4">Weryfikacja Agencyjna</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Zastanawiasz się, czy Twój obecny portfel klientów MŚP potrafi wygenerować zyski z udziału w Grupie Zakupowej Reo? Napisz.
                </p>
                <div className="space-y-3">
                  <a href="mailto:sprzedaz@reo.pl" className="block w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-center py-3 rounded-xl font-semibold transition-colors">
                    sprzedaz@reo.pl
                  </a>
                  <Link href="/kontakt" className="block w-full bg-[#1e1a3b] hover:bg-brand-green text-white text-center py-3 rounded-xl font-semibold transition-colors">
                    Zostaw namiary B2B
                  </Link>
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
