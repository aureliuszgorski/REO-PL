"use client";

import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegulaminPlatformyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <section className="bg-slate-900 relative w-full h-[250px] md:h-[350px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900"></div>
        
        <div className="max-w-[1000px] w-full mx-auto px-6 md:px-12 relative z-10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-slate-300 mb-6 uppercase tracking-wider backdrop-blur-sm">
            DOKUMENTY
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Regulamin <span className="text-brand-green">Platformy</span>
          </h1>
          <p className="text-lg text-slate-400 font-medium">
            Zasady i warunki korzystania z platformy handlu zieloną energią Reo.pl
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-slate-900 transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/dokumenty/dokumenty-do-pobrania" className="hover:text-slate-900 transition-colors">Dokumenty</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Regulamin</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-[#1e1a3b] prose-a:text-brand-green hover:prose-a:text-brand-dark">
            <p className="lead text-lg text-slate-600 mb-8">
              Poniższy dokument określa warunki świadczenia usług drogą elektroniczną w ramach Platformy Reo.pl. Przez rejestrację Konta Klienta Użytkownik akceptuje niniejszy Regulamin.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> §1 Definicje</h3>
            <ul>
              <li><strong>Operator</strong> – Reo.pl Sp. z o.o., ul. Gotarda 9, 02-683 Warszawa, wpisana do rejestru przedsiębiorców pod numerem KRS 0000953880.</li>
              <li><strong>Platforma</strong> – system informatyczny dostępny pod adresem reo.pl do zawierania i zarządzania umowami PPA oraz obsługi obrotu energią.</li>
              <li><strong>Użytkownik</strong> – podmiot prawa korzystający z funkcji i usług świadczonych na Platformie.</li>
            </ul>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> §2 Ogólne warunki świadczenia usług</h3>
            <p>
              1. Wymagania techniczne: do korzystania z Platformy niezbędne jest urządzenie z dostępem do sieci Internet i zaktualizowaną przeglądarką internetową.<br/>
              2. Operator zastrzega sobie prawo do przerw technicznych wynikających z konieczności aktualizacji systemów i serwerów.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> §3 Prawa i obowiązki użytkownika</h3>
            <p>
             1. Użytkownik jest zobowiązany do dbania o poufność danych logowania oraz haseł uwierzytelniających do Platformy.<br/>
             2. Zakazane jest udostępnianie Konta Klienta osobom trzecim bez wyraźnego pełnomocnictwa, wprowadzonego wcześniej do bazy Operatora.<br/>
             3. W przypadku podejrzenia naruszenia dostępu, Użytkownik ma obowiązek natychmiastowego poinformowania Operatora.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> §4 Zawieranie umów</h3>
            <p>
              Platforma Reo.pl udostępnia narzędzia do negocjacji oraz do podpisywania wiążących ofert i umów typu PPA. System umożliwia użycie zgodnego z prawem unijnym podpisu elektronicznego. Oferty prezentowane w publicznej strefie serwisu mają charakter informacyjny do momentu złożenia ich dedykowanemu Użytkownikowi wewnątrz Platformy.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> §5 Reklamacje i pomoc techniczna</h3>
            <p>
              Wszelkie usterki oraz reklamacje dotyczące działania systemu należy zgłaszać na adres pomoc@reo.pl. Operator zastrzega czas reakcji do 2 dni roboczych.
            </p>

            <p className="mt-8 text-sm text-slate-500 italic">
               Regulamin wchodzi w życie z dniem jego opublikowania na stronie internetowej Operatora.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
