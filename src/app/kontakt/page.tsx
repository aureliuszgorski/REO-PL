"use client";

import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Building2, UserCircle, Send, PlusCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <section className="bg-slate-900 relative w-full pt-[120px] pb-16 md:pb-24 flex flex-col justify-end overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
             Formularz <span className="text-brand-green">kontaktowy</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
             Wybierz cel i skontaktuj się z naszymi doradcami ds. zielonej energii. Czas na zmianę!
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-slate-900 transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Kontakt</span>
            </nav>
          </div>
        </div>

        <section className="py-20 bg-white">
           <div className="max-w-[1200px] mx-auto px-6 md:px-12">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                 
                 {/* Kontakt Detale */}
                 <div className="lg:col-span-5 flex flex-col gap-10">
                    <div>
                       <h2 className="text-3xl font-extrabold text-[#1e1a3b] mb-6">Informacje kontaktowe</h2>
                       <p className="text-slate-600 mb-8 leading-relaxed">
                          Reo.pl to wsparcie, na które zasługujesz. Zapraszamy do siedziby głównej w Warszawie lub do kontaktu mailowego z odpowiednim działem.
                       </p>
                    </div>

                    <div className="space-y-8">
                       <div className="flex gap-5 items-start">
                          <div className="w-12 h-12 rounded-xl bg-brand-green/20 text-brand-dark flex flex-col items-center justify-center shrink-0">
                             <Building2 className="w-6 h-6" />
                          </div>
                          <div>
                             <h3 className="font-bold text-[#1e1a3b] text-lg mb-1">Dane spółki</h3>
                             <p className="text-slate-600">Reo.pl Sp. z o.o.<br/>ul. Gotarda 9, 02-683 Warszawa</p>
                          </div>
                       </div>
                       
                       <div className="flex gap-5 items-start">
                          <div className="w-12 h-12 rounded-xl bg-brand-green/20 text-brand-dark flex flex-col items-center justify-center shrink-0">
                             <Mail className="w-6 h-6" />
                          </div>
                          <div>
                             <h3 className="font-bold text-[#1e1a3b] text-lg mb-1">Adresy E-mail</h3>
                             <ul className="text-slate-600 space-y-2">
                                <li><strong>Sprzedaż:</strong> <a href="mailto:sprzedaz@reo.pl" className="hover:text-brand-green transition-colors">sprzedaz@reo.pl</a></li>
                                <li><strong>Zgłoszenia IOD:</strong> <a href="mailto:iod@reo.pl" className="hover:text-brand-green transition-colors">iod@reo.pl</a></li>
                                <li><strong>Dla mediów:</strong> <a href="mailto:media@reo.pl" className="hover:text-brand-green transition-colors">media@reo.pl</a></li>
                             </ul>
                          </div>
                       </div>

                       <div className="flex gap-5 items-start">
                          <div className="w-12 h-12 rounded-xl bg-brand-green/20 text-brand-dark flex flex-col items-center justify-center shrink-0">
                             <Phone className="w-6 h-6" />
                          </div>
                          <div>
                             <h3 className="font-bold text-[#1e1a3b] text-lg mb-1">Telefon</h3>
                             <p className="text-slate-600">
                                <a href="tel:+48225484829" className="hover:text-brand-green transition-colors text-xl font-medium">+48 22 548 48 29</a>
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Formularz Kontaktowy */}
                 <div className="lg:col-span-7">
                    <div className="bg-[#f8fafc] rounded-[40px] rounded-br-none p-8 md:p-12 shadow-[0_20px_50px_rgba(45,47,93,0.05)] border-t border-white relative z-10">
                       <h2 className="text-2xl font-bold text-[#201B55] mb-8">
                          Wyślij wiadomość
                       </h2>
                       
                       <form className="space-y-6">
                         <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                             <label className="text-sm font-semibold text-slate-700">Imię i nazwisko <span className="text-red-500">*</span></label>
                             <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1D71B8] focus:border-transparent transition-all" placeholder="Jan Kowalski" />
                           </div>
                           <div className="space-y-2">
                             <label className="text-sm font-semibold text-slate-700">Firma</label>
                             <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1D71B8] focus:border-transparent transition-all" placeholder="Nazwa Twojej firmy" />
                           </div>
                         </div>
                         
                         <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                             <label className="text-sm font-semibold text-slate-700">Adres e-mail <span className="text-red-500">*</span></label>
                             <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1D71B8] focus:border-transparent transition-all" placeholder="jan@firma.pl" />
                           </div>
                           <div className="space-y-2">
                             <label className="text-sm font-semibold text-slate-700">Telefon</label>
                             <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1D71B8] focus:border-transparent transition-all" placeholder="+48 000 000 000" />
                           </div>
                         </div>

                         <div className="space-y-2">
                           <label className="text-sm font-semibold text-slate-700">Wiadomość <span className="text-red-500">*</span></label>
                           <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1D71B8] focus:border-transparent transition-all resize-none" placeholder="W czym możemy Ci pomóc?"></textarea>
                         </div>

                         <div className="flex items-start gap-3 mt-8">
                           <input type="checkbox" id="zgoda" className="mt-1 w-4 h-4 text-[#1D71B8] border-slate-300 rounded focus:ring-[#1D71B8]" />
                           <label htmlFor="zgoda" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                             Wyrażam zgodę na przetwarzanie podanych w formularzu danych osobowych przez Reo.pl w celu przekazania odpowiedzi na złożone zapytanie.
                           </label>
                         </div>

                         <button type="button" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#201B55] hover:bg-[#1D71B8] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105 active:scale-95 mt-4">
                           <Send className="w-4 h-4" /> Wyślij wiadomość
                         </button>
                       </form>
                    </div>
                 </div>

              </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
