"use client";

import Link from "next/link";
import { ArrowRight, Mic, BookOpen, Layers, Newspaper } from "lucide-react";
import { articles } from "@/data/articles";
import { motion } from "framer-motion";

export default function HomeKnowledgeBase() {
   const featuredArticle = articles.find(a => a.featured) || articles[0]; // Bierzemy pierwszy "featured" albo po prostu najnowszy

   return (
      <section className="py-24 px-6 md:px-[5%] bg-slate-50 border-t border-slate-100">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Column: Knowledge Base Description */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="w-full lg:w-1/2 flex flex-col items-start"
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 shadow-sm rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0-2.5 2.5 2.5 0 0 1 2.5-2.5h11" /></svg>
                  Baza Wiedzy Reo.pl
               </div>

               <h2 className="text-4xl md:text-5xl font-extrabold text-[#201B55] mb-6 leading-[1.15]">
                  Edukacja na temat strategii <br />
                  <span className="text-[#1D71B8]">zrównoważonego rozwoju.</span>
               </h2>

               <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl">
                  Odkryj potężną bibliotekę artykułów, raportów i symulacji dotyczących odnawialnych źródeł energii, strategii ESG oraz zmian w prawnym środowisku energetycznym.
               </p>

               {/* Categories */}
               <div className="flex flex-wrap gap-3 mb-10 text-sm font-bold">
                  <span className="bg-white border border-slate-200 text-[#201B55] px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 hover:border-[#1D71B8] hover:text-[#1D71B8] transition-colors cursor-default">
                     <Mic className="w-4 h-4 text-[#1D71B8]" /> Podcasty
                  </span>
                  <span className="bg-white border border-slate-200 text-[#201B55] px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 hover:border-[#1D71B8] hover:text-[#1D71B8] transition-colors cursor-default">
                     <Layers className="w-4 h-4 text-[#1D71B8]" /> Case Studies
                  </span>
                  <span className="bg-white border border-slate-200 text-[#201B55] px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 hover:border-[#1D71B8] hover:text-[#1D71B8] transition-colors cursor-default">
                     <BookOpen className="w-4 h-4 text-[#1D71B8]" /> Encyklopedia
                  </span>
                  <span className="bg-white border border-slate-200 text-[#201B55] px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 hover:border-[#1D71B8] hover:text-[#1D71B8] transition-colors cursor-default">
                     <Newspaper className="w-4 h-4 text-[#1D71B8]" /> Media o nas
                  </span>
               </div>

               <Link href="/informacje" className="inline-flex items-center justify-center gap-3 bg-[#201B55] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1D71B8] hover:shadow-[0_0_20px_rgba(29,113,184,0.4)] transition-all shadow-xl group">
                  Przeglądaj wszystkie
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </Link>
            </motion.div>

            {/* Right Column: Featured Article */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="w-full lg:w-1/2"
            >
               <div className="relative group cursor-pointer block bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(32,27,85,0.1)] transition-all duration-500">

                  {/* Floating Promo Badge */}
                  <div className="absolute top-6 left-6 z-20 flex gap-2">
                     <div className="bg-[#A9E8CB] text-[#201B55] text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                        Nowy Wpis
                     </div>
                     <div className="bg-white/90 backdrop-blur-sm text-[#201B55] text-xs font-bold px-3 py-2 rounded-full uppercase tracking-wider shadow-sm">
                        {featuredArticle.category}
                     </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-72 md:h-80 w-full overflow-hidden">
                     <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  </div>

                  {/* Read button fixed floating */}
                  <Link href={`/informacje/${featuredArticle.slug}`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl border border-white/30 text-white">
                     <div className="w-12 h-12 bg-[#A9E8CB] rounded-full flex items-center justify-center text-[#201B55]">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                     </div>
                  </Link>

                  <div className="p-8 md:p-10 flex flex-col relative bg-white border-t border-slate-100">
                     <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4 tracking-wide uppercase">
                        <span>{featuredArticle.date}</span>
                        <span className="bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
                           {featuredArticle.readTime} czytania
                        </span>
                     </div>

                     <h3 className="text-2xl md:text-3xl font-extrabold text-[#201B55] mb-5 leading-tight group-hover:text-[#1D71B8] transition-colors">
                        <Link href={`/informacje/${featuredArticle.slug}`}>
                           <span className="absolute inset-0 z-10"></span>
                           {featuredArticle.title}
                        </Link>
                     </h3>

                     <p className="text-slate-500 font-medium line-clamp-2 md:line-clamp-3 leading-relaxed">
                        {featuredArticle.excerpt}
                     </p>
                  </div>
               </div>
            </motion.div>

         </div>
      </section>
   );
}
