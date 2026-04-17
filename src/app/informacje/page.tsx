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
    <div className="min-h-screen bg-slate-50 flex flex-col relative">
      <Header />
{/* Wind farm illustration */}
<img src="/Users/aureliuszgorski/.gemini/antigravity/brain/355c8421-83b9-4204-b5c5-3d8d590a5feb/wind_farm_mockup_1776447332070.png" alt="Wind farm illustration" className="absolute top-40 right-8 w-48 h-48 object-cover rounded-lg shadow-lg" />

      {/* Prosty Nagłówek Bazy Wiedzy */}
      <section className="pt-[160px] pb-6 w-full bg-slate-50 relative z-10 px-6 md:px-12 max-w-[1200px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 shadow-sm rounded-full text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">
          <BookOpen className="w-4 h-4" /> Baza wiedzy reo.pl
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#201B55] tracking-tight">
          Baza Wiedzy <br className="md:hidden" />
        </h1>
      </section>

      <main id="baza-wiedzy" className="flex-1 w-full relative z-20">

        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] mb-12 p-2 overflow-x-auto hide-scrollbar flex flex-nowrap items-center gap-1 border border-slate-100 relative">
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
                    className={`relative px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center flex-1 min-w-[110px] ${activeCategory === cat.id
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
