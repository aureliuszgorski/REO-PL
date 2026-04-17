"use client";

import Link from "next/link";
import { ChevronDown, User, Menu, LogIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 h-[80px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/reo-logo.svg"
            alt="Reo.pl"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-end ml-8 mr-auto h-full pt-4">
          
          {/* Oferta */}
          <div className="relative group h-full flex flex-col justify-end">
            <Link href="/oferta/umowy-dlugoterminowe-ppa" className="flex items-center gap-1 font-semibold text-[17px] text-[#1e1a3b] px-5 py-3 transition-colors border-2 border-transparent border-b-0 rounded-t-lg group-hover:border-[#d6d6e2] group-hover:bg-white z-10 relative">
              Oferta <ChevronDown className="w-[18px] h-[18px] ml-1 opacity-70" />
            </Link>
            <div className="absolute top-[100%] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible min-w-[340px] bg-white border-2 border-[#d6d6e2] rounded-lg rounded-tl-none py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] -mt-[2px] z-0">
              <Link href="/oferta/umowy-dlugoterminowe-ppa" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Umowy długoterminowe PPA</Link>
              <Link href="/oferta/grupy-biznesowe" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Grupy biznesowe</Link>
              <Link href="/oferta/tabela-ofert" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Tabela ofert</Link>
              <Link href="/oferta/platforma-peer-to-peer" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Platforma Peer-to-Peer</Link>
              <Link href="/oferta/zielona-energia-dla-biznesu" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Zielona energia dla biznesu</Link>
              <Link href="/oferta/oferta-oze-dla-hoteli-i-spa" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Zielona energia dla hoteli i SPA</Link>
              <Link href="/oferta/zielona-energia-dla-branzy-automotive" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Zielona energia dla branży automotive</Link>
              <Link href="/oferta/zielona-energia-dla-branzy-spozywczej" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Zielona energia dla branży spożywczej</Link>
              <Link href="/oferta/zielona-energia-dla-branzy-przetworczej" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Zielona energia dla branży przetwórczej</Link>
              <Link href="/oferta/zielona-energia-dla-branzy-nieruchomisci" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Zielona energia dla branży nieruchomości</Link>
              <Link href="/oferta/współpraca-agencyjna-z-reopl" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Współpraca agencyjna z Reo.pl</Link>
            </div>
          </div>

          {/* Usługi */}
          <div className="relative group h-full flex flex-col justify-end">
            <Link href="/uslugi/zmiana-sprzedawcy" className="flex items-center gap-1 font-semibold text-[17px] text-[#1e1a3b] px-5 py-3 transition-colors border-2 border-transparent border-b-0 rounded-t-lg group-hover:border-[#d6d6e2] group-hover:bg-white z-10 relative">
              Usługi <ChevronDown className="w-[18px] h-[18px] ml-1 opacity-70" />
            </Link>
            <div className="absolute top-[100%] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible min-w-[360px] bg-white border-2 border-[#d6d6e2] rounded-lg rounded-tl-none py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] -mt-[2px] z-0">
              <Link href="/uslugi/kompleksowa-obsluga-magazynow-energii" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Kompleksowa obsługa magazynów energii</Link>
              <Link href="/uslugi/bilansowanie-energii" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Bilansowanie energii</Link>
              <Link href="/uslugi/zmiana-sprzedawcy" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Zmiana sprzedawcy</Link>
            </div>
          </div>

          {/* O nas */}
          <div className="relative group h-full flex flex-col justify-end">
            <Link href="/o-nas/platforma-reo-pl" className="flex items-center gap-1 font-semibold text-[17px] text-[#1e1a3b] px-5 py-3 transition-colors border-2 border-transparent border-b-0 rounded-t-lg group-hover:border-[#d6d6e2] group-hover:bg-white z-10 relative">
              O nas <ChevronDown className="w-[18px] h-[18px] ml-1 opacity-70" />
            </Link>
            <div className="absolute top-[100%] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible min-w-[280px] bg-white border-2 border-[#d6d6e2] rounded-lg rounded-tl-none py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] -mt-[2px] z-0">
              <Link href="/o-nas/rynek-energii-odnawialnej" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Reo.pl</Link>
              <Link href="/o-nas/cele-i-wartosci" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Cele i Wartości</Link>
              <Link href="/o-nas/platforma-reo-pl" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Platforma Reo.pl</Link>
              <Link href="/o-nas/najczesciej-zadawane-pytania" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">FAQ</Link>
              <Link href="/o-nas/kariera" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Kariera</Link>
              <Link href="/o-nas/zarzad-spolki" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Zarząd Spółki</Link>
            </div>
          </div>

          {/* Informacje */}
          <div className="h-full flex flex-col justify-end">
            <Link href="/informacje" className="font-semibold text-[17px] text-[#1e1a3b] px-5 py-3 border-2 border-transparent border-b-0 hover:bg-[#f3f3f6] rounded-t-lg transition-colors whitespace-nowrap">
              Informacje
            </Link>
          </div>

          {/* ESG */}
          <div className="relative group h-full flex flex-col justify-end">
            <Link href="/esg/zrownowazony-rozwoj" className="flex items-center gap-1 font-semibold text-[17px] text-[#1e1a3b] px-5 py-3 transition-colors border-2 border-transparent border-b-0 rounded-t-lg group-hover:border-[#d6d6e2] group-hover:bg-white z-10 relative">
              ESG <ChevronDown className="w-[18px] h-[18px] ml-1 opacity-70" />
            </Link>
            <div className="absolute top-[100%] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible min-w-[360px] bg-white border-2 border-[#d6d6e2] rounded-lg rounded-tl-none py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] -mt-[2px] z-0">
              <Link href="/esg/zrownowazony-rozwoj" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Zrównoważony rozwój</Link>
              <Link href="/esg/matryca-istotnosci" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Matryca istotności</Link>
              <Link href="/esg/slad-weglowy-reo-pl-sp-z-o-o" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Ślad węglowy Reo.pl</Link>
              <Link href="/esg/reopl-i-envirly-partnerstwo" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Reo.pl i Envirly - partnerstwo</Link>
              <Link href="/esg/strategia-esg-reopl-na-lata-2025-2027" className="block px-6 py-2 text-[16px] font-medium text-[#111] hover:bg-[#f3f3f6] hover:text-[#1e1a3b] transition-colors">Strategia ESG Reo.pl na lata 2025-2027</Link>
            </div>
          </div>
          
          <div className="h-full flex flex-col justify-end">
            <Link href="/dla-wytworcow" className="font-semibold text-[17px] text-[#1e1a3b] px-5 py-3 border-2 border-transparent border-b-0 hover:bg-[#f3f3f6] rounded-t-lg transition-colors whitespace-nowrap">Dla wytwórców</Link>
          </div>
          <div className="h-full flex flex-col justify-end">
            <Link href="/kontakt" className="font-semibold text-[17px] text-[#1e1a3b] px-5 py-3 border-2 border-transparent border-b-0 hover:bg-[#f3f3f6] rounded-t-lg transition-colors">Kontakt</Link>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {!isLoggedIn ? (
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="flex items-center gap-2 font-semibold text-[16px] text-[#201B55] border-2 border-[#201B55] hover:bg-[#201B55] hover:text-white transition-all duration-300 px-6 py-2.5 rounded-lg focus:outline-none"
            >
              <LogIn className="w-[18px] h-[18px]" />
              Zaloguj się
            </button>
          ) : (
            <div className="relative group">
              <button className="flex items-center gap-2 font-semibold text-[16px] text-white bg-[#1D71B8] hover:bg-[#155994] transition-all duration-300 px-6 py-2.5 rounded-lg shadow-sm hover:shadow focus:outline-none">
                <User className="w-[18px] h-[18px]" />
                Moje konto
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-0 pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white rounded-lg shadow-[0_10px_40px_-10px_rgba(30,26,59,0.15)] border border-slate-100 overflow-hidden">
                  <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                    <p className="font-bold text-[#201B55] text-sm">Aureliusz Górski</p>
                    <p className="text-xs text-slate-500 mt-0.5">aureliusz@reo.pl</p>
                  </div>

                  {/* Dashboard Links */}
                  <div className="p-2 flex flex-col">
                    <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Platforma</div>
                    <Link href="/dashboard" className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#1D71B8] hover:bg-[#1D71B8]/5 rounded-md transition-colors flex items-center justify-between">
                      Panel główny
                    </Link>
                    <Link href="/oferty" className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#1D71B8] hover:bg-[#1D71B8]/5 rounded-md transition-colors flex items-center justify-between">
                      Giełda P2P
                      <span className="bg-[#A9E8CB]/30 text-[#1D71B8] text-[10px] font-bold px-2 py-0.5 rounded-full">Nowość</span>
                    </Link>
                    <Link href="/dashboard" className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#1D71B8] hover:bg-[#1D71B8]/5 rounded-md transition-colors flex items-center justify-between">
                      Moje oferty
                    </Link>
                  </div>

                  {/* Settings Links */}
                  <div className="p-2 border-t border-slate-100 flex flex-col">
                    <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ustawienia Konta</div>
                    <Link href="/settings" className="px-4 py-2.5 text-sm font-semibold text-[#1D71B8] bg-[#1D71B8]/5 rounded-md transition-colors">
                      Zmień hasło
                    </Link>
                    <Link href="/dokumenty" className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-[#1D71B8] hover:bg-slate-50 rounded-md transition-colors flex items-center gap-2">
                      📄 Dokumenty i Regulaminy
                    </Link>
                  </div>

                  <div className="p-2 border-t border-slate-100">
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full text-left px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-md transition-colors flex items-center justify-between focus:outline-none"
                    >
                      Wyloguj się
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-md transition-colors">
          <Menu className="w-6 h-6" />
        </button>

      </div>
    </header>
  );
}
