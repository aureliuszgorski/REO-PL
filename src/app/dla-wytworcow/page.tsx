"use client";

import Link from "next/link";
import { ChevronRight, Zap, CheckCircle2, Factory, Wind, Sun, Leaf, HelpCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DlaWytworcowPage() {
  const benefits = [
    "Możliwość sprzedaży wyprodukowanej energii na bardzo atrakcyjnych warunkach",
    "Atrakcyjne warunki rozliczania energii na potrzeby własne",
    "Szybkie i bezproblemowe przeprowadzenie procesu zmiany sprzedawcy",
    "Reo.pl realizuje raporty REMIT, SOGL oraz ZRSA w imieniu wytwórców",
    "Możliwość sprzedaży Gwarancji Pochodzenia",
    "Wszystkie formalności załatwią nasi Doradcy"
  ];

  const faq = [
    {
      q: "Jakie warunki powinieneś spełnić żeby sprzedawać energię elektryczną na Reo.pl?",
      a: "Powinieneś posiadać status Wytwórcy energii elektrycznej i mieć zarejestrowaną działalność gospodarczą. Odkup energii będzie możliwy jeśli posiadasz licznik jednokierunkowy. Jeśli masz licznik dwukierunkowy - zawrzemy z Tobą umowę na zakup i sprzedaż energii elektrycznej."
    },
    {
      q: "Jak wygląda proces podpisania umowy z wytwórcą energii?",
      a: "Po rezerwacji oferty otrzymasz e-mail z potwierdzeniem. W ciągu 24h (w dni robocze) nasz Doradca przekaże szczegóły i prześle umowę elektroniczną, podpisywaną profilu zaufanego, podpisu kwalifikowanego lub Autenti. Na odesłanie umowy masz 48h."
    },
    {
      q: "Jak będzie rozliczana sprzedaż wyprodukowanej przeze mnie energii?",
      a: "Energia z OZE wprowadzana do sieci będzie rozliczana po cenie rynkowej lub po cenie z wybranej oferty na platformie Reo.pl."
    },
    {
      q: "Co jeśli wyprodukuję mniejszy wolumen energii niż zadeklarowałem w kontrakcie?",
      a: "Wytwórca rozliczany jest według rzeczywistej produkcji przy zastosowaniu cen z Umowy. W razie różnic, to Reo.pl odpowiada za zbilansowanie ich na rynku."
    },
    {
      q: "Co jeśli wyprodukuję większy wolumen energii?",
      a: "Nadwyżka wyprodukowanej energii będzie rozliczana po ustalonej cenie. Jako Reo.pl gwarantujemy w 100% zbilansowanie Twojego kontraktu."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 relative w-full pt-[120px] pb-24 md:pb-32 flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40"></div>
        </div>
        
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-green/20 rounded-2xl mb-8 border border-brand-green/30 backdrop-blur-md">
            <Zap className="w-8 h-8 text-brand-green" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-[900px] mx-auto">
            Jesteś wytwórcą energii <span className="text-brand-green">z OZE?</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-[800px] mx-auto mb-10 leading-relaxed">
            Sprzedaj energię elektryczną bezpośrednio do odbiorców, 
            na korzystnych warunkach rynkowych i bez zbędnych formalności!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Link href="/kontakt" className="px-8 py-4 bg-brand-green hover:bg-brand-green/90 text-slate-900 font-bold rounded-full transition-all text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Zapytaj o ofertę
             </Link>
             <Link href="/o-nas/platforma-reo-pl" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-full transition-all text-lg backdrop-blur-sm">
                Dowiedz się więcej
             </Link>
          </div>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-slate-900 transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Dla wytwórców</span>
            </nav>
          </div>
        </div>

        {/* Co robimy */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1a3b] mb-6 leading-tight">
                Jesteśmy liderem w odkupie zielonej energii.
              </h2>
              <div className="w-20 h-1 bg-brand-green mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Jesteśmy firmą specjalizującą się w odkupie zielonej energii elektrycznej od producentów OZE. Nasza oferta skierowana jest do wszystkich producentów, niezależnie od mocy wytwarzania czy rodzaju instalacji.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Działamy w sektorze OZE od wielu lat. Nasze usługi są skoncentrowane na profesjonalnej i kompleksowej obsłudze klienta biznesowego, zapewniając pełne wsparcie od momentu przyłączenia nowych instalacji, aż do regularnego wprowadzenie energii do sieci.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200">
                <h3 className="text-xl font-bold text-[#1e1a3b] mb-8">Poznaj korzyści ze współpracy z Reo.pl</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                       <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                       <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Źródła */}
        <section className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Atrakcyjna oferta dla wszystkich instalacji
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Skupujemy energię ze wszystkich odnawialnych źródeł produkcyjnych, minimalizując Twoje koszty i wspierając OZE.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Elektrownie wiatrowe", icon: Wind },
                { title: "Farmy fotowoltaiczne", icon: Sun },
                { title: "Biogazownie", icon: Leaf },
                { title: "Elektrownie wodne", icon: Factory },
              ].map((item, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors text-center group cursor-default">
                    <div className="w-16 h-16 mx-auto bg-brand-green/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <item.icon className="w-8 h-8 text-brand-green" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-green transition-colors">{item.title}</h3>
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modele i Zbilansowanie */}
        <section className="py-20 md:py-32 bg-slate-50">
           <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-[#1e1a3b] mb-6">Modele współpracy dopasowane do Ciebie</h3>
                 <p className="text-slate-600 mb-8">Oferujemy naszym partnerom możliwość sprzedaży energii wyprodukowanej z OZE w różnorodnych, elastycznych modelach rynkowych:</p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                       <div className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-dark flex items-center justify-center font-bold">1</div>
                       <span className="font-medium text-slate-700">W cenie stałej, niezależnie od ilości</span>
                    </li>
                    <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                       <div className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-dark flex items-center justify-center font-bold">2</div>
                       <span className="font-medium text-slate-700">W cenie elastycznej, ze zmiennymi wariantami rozliczeń</span>
                    </li>
                    <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                       <div className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-dark flex items-center justify-center font-bold">3</div>
                       <span className="font-medium text-slate-700">W modelu mix, łączącym cenę stałą i elastyczną</span>
                    </li>
                 </ul>
              </div>
              <div className="bg-brand-green rounded-3xl p-10 shadow-sm flex flex-col justify-center text-brand-dark">
                 <h3 className="text-2xl font-bold mb-6">0 kosztów zbilansowania handlowego. Jak to działa?</h3>
                 <p className="text-brand-dark mb-6 text-lg font-medium opacity-90">
                   Koszt Zbilansowania Kontraktu to w uproszczeniu koszty wynikające z różnic między krzywymi produkcji i poboru występujących w każdej godzinie na rynku.
                 </p>
                 <p className="text-brand-dark/80 font-medium">
                   W wielu modelach, jeśli wyprodukujesz mniej w danym momencie, płacisz za deficyt. W Reo.pl, przy stałych współpracach zapewniamy stałość i przejmujemy proces zbilansowania - co oznacza znacznie mniejsze ryzyko operacyjne dla Ciebie jako producenta OZE.
                 </p>
              </div>
           </div>
        </section>

        {/* FAQ - Wytwórcy */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-brand-green/10 rounded-2xl mb-6">
                <HelpCircle className="w-8 h-8 text-brand-green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1a3b] mb-4">Często zadawane pytania</h2>
              <p className="text-lg text-slate-600">Rozwiewamy wątpliwości dla przyszłych partnerów OZE</p>
            </div>

            <div className="flex flex-col gap-6">
              {faq.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-brand-green/50 transition-colors">
                  <h3 className="text-xl font-bold text-[#1e1a3b] mb-3">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/kontakt" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all text-lg">
                Masz więcej pytań? Pisz do nas! <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
