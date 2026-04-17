import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const reoLinks = [
  { name: "Reo.pl", href: "/o-nas/rynek-energii-odnawialnej" },
  { name: "Platforma Reo.pl", href: "/o-nas/platforma-reo-pl" },
  { name: "Informacje", href: "/informacje" },
  { name: "Mapa witryny", href: "/rynek-energii-odnawialnej/mapa-witryny" },
  { name: "Księga Znaku (Brand Book)", href: "/ksiega-znaku" },
];

const ofertaLinks = [
  { name: "Umowy długoterminowe PPA", href: "/oferta/umowy-dlugoterminowe-ppa" },
  { name: "Grupy biznesowe", href: "/oferta/grupy-biznesowe" },
  { name: "Tabela ofert", href: "/oferta/tabela-ofert" },
  { name: "Platforma Peer-to-Peer", href: "/oferta/platforma-peer-to-peer" },
];

const dokumentyLinks = [
  { name: "Polityka prywatności", href: "/dokumenty/polityka-prywatnosci" },
  { name: "Regulamin Platformy Reo.pl", href: "/dokumenty/regulamin-platformy-reo" },
  { name: "Koncesja", href: "https://reo.pl/storage/ure-decyzja-dla-reopl-z-dnia-8-03-2022r-815_0b486d7a.pdf", external: true },
  { name: "Struktura paliw", href: "https://reo.pl/pl/file/826/37e88684/Struktura+paliw+2025+r.pdf", external: true },
  { name: "Dokumenty do pobrania", href: "/dokumenty/dokumenty-do-pobrania" },
];

export default function Footer() {
  return (
    <footer className="w-full font-sans mt-auto bg-slate-50 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative">
        
        {/* Main Footer Rounded Card */}
        <div className="bg-[#201B55] rounded-[40px] rounded-tl-none pt-20 md:pt-16 pb-12 text-white relative shadow-[0_30px_60px_rgba(45,47,93,0.15)]">
          
          {/* Faux Cutout for Logo (Top Left) */}
          <div className="absolute top-0 left-0 w-48 h-16 bg-slate-50 rounded-br-[32px] z-10 pointer-events-none -translate-x-[1px] -translate-y-[1px]"></div>
          
          {/* Logo Container placed inside the cutout illusion */}
          <div className="absolute top-0 left-0 z-20 bg-white p-4 items-center justify-center rounded-br-[32px] shadow-sm flex -translate-x-[1px] -translate-y-[1px] w-48">
            <img src="https://reo.pl/images/reo-logo.svg" alt="Reo.pl" className="h-8 w-auto relative z-10" />
          </div>

          <div className="px-6 lg:px-16">
            {/* Top Header Row of Footer */}
            <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-8 mb-8">
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <small className="hidden lg:block text-slate-300 text-sm font-medium">
                  Reo.pl należy do Grupy <a href="https://www.enerconet.com/" target="_blank" className="font-bold underline text-white hover:text-[#A9E8CB] transition-colors">EnercoNet</a>
                </small>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/RynekEnergiiOdnawialnej" target="_blank" className="w-10 h-10 rounded-full bg-[#A9E8CB] text-[#201B55] flex items-center justify-center hover:bg-[#A9E8CB] transition-transform shadow-sm hover:scale-110 active:scale-95">
                  <Facebook className="w-5 h-5 fill-current stroke-none" />
                </a>
                <a href="https://www.linkedin.com/company/reo-pl-platforma-handlu-zielon%C4%85-energi%C4%85/about/" target="_blank" className="w-10 h-10 rounded-full bg-[#A9E8CB] text-[#201B55] flex items-center justify-center hover:bg-[#A9E8CB] transition-transform shadow-sm hover:scale-110 active:scale-95">
                  <Linkedin className="w-5 h-5 fill-current stroke-none" />
                </a>
                <a href="https://x.com/pl_reo" target="_blank" className="w-10 h-10 rounded-full bg-[#A9E8CB] text-[#201B55] flex items-center justify-center hover:bg-[#A9E8CB] transition-transform shadow-sm hover:scale-110 active:scale-95">
                  <Twitter className="w-5 h-5 fill-current stroke-none" />
                </a>
              </div>
            </div>
        
            <small className="block lg:hidden text-center text-slate-300 text-sm font-medium mb-10 mt-8">
              Reo.pl należy do Grupy <a href="https://www.enerconet.com/" target="_blank" className="font-bold underline text-white hover:text-[#A9E8CB]">EnercoNet</a>
            </small>

            {/* Main Grid Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-8">
          
          {/* Kontakt Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-4 text-white">Kontakt</h4>
            <div className="text-slate-300 text-[15px] leading-relaxed mb-6">
                <p>Reo.pl Sp. z o.o.<br />ul. Gotarda 9<br />02-683 Warszawa<br />tel. + 48 22 548 48 29<br />e-mail: sprzedaz@reo.pl</p>
              </div>
              <a href="mailto:media@reo.pl" className="font-bold text-white hover:text-[#A9E8CB] transition-colors text-[15px]">
                Kontakt dla Mediów
              </a>
            </div>

          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Reo Column */}
            <div className="flex flex-col">
              <h4 className="font-bold text-[16px] mb-4 text-white">Reo</h4>
              <ul className="flex flex-col gap-[10px]">
                {reoLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white hover:text-slate-200 transition-colors text-[15px]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Oferta Column */}
            <div className="flex flex-col">
              <h4 className="font-bold text-[16px] mb-4 text-white">Oferta</h4>
              <ul className="flex flex-col gap-[10px]">
                {ofertaLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white hover:text-slate-200 transition-colors text-[15px]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dokumenty for Klientów Column */}
            <div className="flex flex-col">
              <h4 className="font-bold text-[16px] mb-4 text-white">Dokumenty dla Klientów</h4>
              <ul className="flex flex-col gap-[10px]">
                {dokumentyLinks.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-200 transition-colors text-[15px]">
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-white hover:text-slate-200 transition-colors text-[15px]">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
          </div>
        </div>

        </div>
      </div>
    </footer>
  );
}
