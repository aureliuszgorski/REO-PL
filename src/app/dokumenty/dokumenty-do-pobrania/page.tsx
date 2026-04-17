"use client";

import Link from "next/link";
import { ChevronRight, FileText, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DokumentyDoPobraniaPage() {
  const documents = [
    {
      category: "Dokumenty dla klientów",
      files: [
        { name: "Ogólne Warunki Umowy - Reo.pl", size: "1.2 MB", format: "PDF" },
        { name: "Załącznik nr 1 do OWU - Definicje", size: "450 KB", format: "PDF" },
        { name: "Pełnomocnictwo do zmiany sprzedawcy", size: "320 KB", format: "PDF" },
      ]
    },
    {
      category: "Oferta sprzedaży energii OZE",
      files: [
        { name: "Cennik standardowy dla grup biznesowych", size: "2.5 MB", format: "PDF" },
        { name: "Umowa PPA - wzór dokumentu", size: "1.8 MB", format: "PDF" },
      ]
    },
    {
      category: "Inne dokumenty",
      files: [
        { name: "Tabela opłat dodatkowych", size: "850 KB", format: "PDF" },
        { name: "Wzór odstąpienia od umowy", size: "120 KB", format: "DOCX" },
      ]
    }
  ];

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
            Dokumenty <span className="text-brand-green">do pobrania</span>
          </h1>
          <p className="text-lg text-slate-400 font-medium">
            Zbiór istotnych dokumentów, takich jak raporty, formularze i przewodniki.
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
              <span className="text-brand-green font-bold">Dokumenty do pobrania</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-col gap-12">
            
            {documents.map((group, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                 <div className="bg-slate-50/50 border-b border-slate-200 px-8 py-5">
                    <h3 className="text-xl font-bold text-[#1e1a3b]">{group.category}</h3>
                 </div>
                 <div className="flex flex-col divide-y divide-slate-100">
                    {group.files.map((file, fileIdx) => (
                        <div key={fileIdx} className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 hover:bg-emerald-50/30 transition-colors gap-4">
                           <div className="flex items-start gap-4">
                              <div className="mt-1 bg-brand-green/10 text-brand-green p-2 rounded-lg">
                                <FileText className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-bold text-[#1e1a3b] group-hover:text-brand-green transition-colors text-lg mb-1">{file.name}</h4>
                                <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                                   <span className="uppercase bg-slate-100 px-2 pl-2 rounded text-xs">{file.format}</span>
                                   <span>Rozmiar: {file.size}</span>
                                </div>
                              </div>
                           </div>
                           
                           <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-brand-green text-white text-sm font-bold rounded-xl transition-all self-start sm:self-auto shrink-0 w-full sm:w-auto">
                              <Download className="w-4 h-4" /> Pobierz
                           </button>
                        </div>
                    ))}
                 </div>
              </div>
            ))}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
