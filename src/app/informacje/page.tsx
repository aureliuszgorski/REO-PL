"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, Search, FileText, ArrowRight, X, LayoutGrid, Briefcase, BookOpen, Newspaper, Scale, Leaf, Megaphone, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, categories } from "@/data/articles";

export default function InformacjePage() {
  const [activeCategory, setActiveCategory] = useState("wszystkie");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchCategory = activeCategory === "wszystkie" || 
                            (activeCategory === "case-studies" && article.category === "Case Studies") ||
                            (activeCategory === "zielona-encyklopedia" && article.category === "Zielona encyklopedia") ||
                            (activeCategory === "green-news" && article.category === "Green news") ||
                            (activeCategory === "biznes-i-prawo" && article.category === "Biznes i prawo") ||
                            (activeCategory === "ekoporady" && article.category === "Ekoporady") ||
                            (activeCategory === "media-o-nas" && article.category === "Media o nas") ||
                            (activeCategory === "podcasty" && article.category === "Podcasty");
      const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Hero Content Hub */}
      <section className="bg-slate-900 relative w-full pt-[160px] pb-24 md:pb-32 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/90"></div>
        </div>
        
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Centrum <span className="text-brand-green">Wiedzy Reo</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium mb-12">
              Analizy, case studies, wiadomości z rynku oraz kompendium wiedzy o obrocie zieloną energią.
            </p>

            {/* Smart Search Bar */}
            <div className="relative max-w-2xl mx-auto flex items-center group">
               <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                 <Search className="h-5 w-5 text-slate-400 group-focus-within:text-brand-green transition-colors" />
               </div>
               <input 
                 type="text" 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="block w-full pl-12 pr-12 py-5 border-none rounded-2xl leading-5 bg-white/10 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 focus:ring-2 focus:ring-brand-green/50 transition-all font-medium text-lg shadow-2xl" 
                 placeholder="Znajdź artykuł, np. ustawa, magazyny energii..." 
               />
               {searchQuery && (
                 <button 
                   onClick={() => setSearchQuery("")}
                   className="absolute inset-y-0 right-0 pr-5 flex items-center text-slate-400 hover:text-white transition-colors"
                 >
                    <X className="h-5 w-5" />
                 </button>
               )}
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 w-full relative z-20 -mt-8">
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
           {/* Filters */}
           <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] mb-12 p-2 overflow-x-auto hide-scrollbar flex items-center gap-1 border border-slate-100 relative">
             <div className="flex w-max min-w-full">
               {(categories || []).map((cat) => {
                 const getCatIcon = (id: string) => {
                   switch (id) {
                     case "wszystkie": return <LayoutGrid className="w-5 h-5 mb-1.5" />;
                     case "case-studies": return <Briefcase className="w-5 h-5 mb-1.5" />;
                     case "zielona-encyklopedia": return <BookOpen className="w-5 h-5 mb-1.5" />;
                     case "green-news": return <Newspaper className="w-5 h-5 mb-1.5" />;
                     case "biznes-i-prawo": return <Scale className="w-5 h-5 mb-1.5" />;
                     case "ekoporady": return <Leaf className="w-5 h-5 mb-1.5" />;
                     case "media-o-nas": return <Megaphone className="w-5 h-5 mb-1.5" />;
                     case "podcasty": return <Headphones className="w-5 h-5 mb-1.5" />;
                     default: return <FileText className="w-5 h-5 mb-1.5" />;
                   }
                 };

                 return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center flex-1 min-w-[110px] ${
                      activeCategory === cat.id 
                        ? "text-brand-dark" 
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {activeCategory === cat.id && (
                      <motion.div 
                        layoutId="active-pill" 
                        className="absolute inset-0 bg-brand-green/20 border border-brand-green/40 rounded-xl z-0"
                         transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10 flex flex-col items-center text-center">
                      {getCatIcon(cat.id)}
                      <span className="whitespace-normal leading-tight">{cat.label}</span>
                    </span>
                  </button>
                 );
               })}
             </div>
           </div>

           {/* Results Header */}
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#1e1a3b]">
                 {searchQuery ? `Wyniki wyszukiwania (${filteredArticles.length})` : (categories.find(c => c.id === activeCategory)?.label || "Wszystkie")}
              </h2>
           </div>

           {/* Articles Grid (Bento/Masonry like) */}
           {filteredArticles.length > 0 ? (
             <motion.div 
               layout
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
             >
               <AnimatePresence>
                 {filteredArticles.map((article, idx) => (
                   <motion.div
                     key={article.id}
                     layout
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 0.3, delay: idx * 0.05 }}
                     className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer"
                   >
                     {/* Image Wrapper */}
                     <div className="relative h-56 w-full overflow-hidden">
                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                           {article.category}
                        </div>
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                     </div>
                     
                     <div className="p-8 flex flex-col flex-1 relative">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-4 tracking-wide">
                          <span>{article.date}</span>
                          <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded-md">{article.readTime} czytania</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#1e1a3b] mb-4 leading-snug group-hover:text-brand-green transition-colors">
                           <Link href={`/informacje/${article.slug}`}>
                              <span className="absolute inset-0"></span>
                              {article.title}
                           </Link>
                        </h3>
                        <p className="text-slate-600 font-medium line-clamp-3 mb-6">
                           {article.excerpt}
                        </p>
                        
                        <div className="mt-auto pt-4 flex items-center text-sm font-bold text-slate-900 group-hover:text-brand-green transition-colors uppercase tracking-wider gap-2">
                           Czytaj dalej <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                     </div>
                   </motion.div>
                 ))}
               </AnimatePresence>
             </motion.div>
           ) : (
              <div className="py-24 text-center">
                 <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-slate-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Brak wyników</h3>
                 <p className="text-slate-500">
                    Nie znaleźliśmy artykułów pasujących do zapytania "{searchQuery}". Spróbuj innych słów kluczowych lub zmień kategorię.
                 </p>
              </div>
           )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
