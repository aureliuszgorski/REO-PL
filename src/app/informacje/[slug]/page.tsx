import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { articles } from "@/data/articles";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- Wygenerowanie ścieżek statycznych dla Next.js ---
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Related articles (top 3 from other categories or same)
  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* 
        NOTE: Since this is an App Router Server Component by default,
        we use CSS grid & static Tailwind classes for animations if we don't declare 'use client'.
        However, for Framer Motion, we would need 'use client'.
        To keep SEO intact but add animations, we can use Tailwind's native `animate-fade-in-up` 
        which we can define or simply use standard Framer Motion by splitting components.
        Let's use a Client Wrapper for the animated parts!
      */}
      
      {/* 1. NATIVE TAILWIND HERO - Super Szybki (Server Rendered for max SEO) */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-end justify-center overflow-hidden pt-[100px]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          {/* Ciemny overlay dla lepszej czytelności tekstu */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 pb-16 animate-[fadeInUp_0.8s_ease-out]">
          <Link href="/informacje" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Wróć do bazy wiedzy
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#A9E8CB] text-[#201B55] text-xs font-bold uppercase tracking-wider rounded-full">
              {article.category}
            </span>
            <span className="text-white/80 text-sm flex items-center font-medium">
              <Calendar className="w-4 h-4 mr-1" /> {article.date}
            </span>
            <span className="text-white/80 text-sm flex items-center font-medium">
              <Clock className="w-4 h-4 mr-1" /> {article.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            {article.title}
          </h1>
        </div>
      </section>

      {/* 2. GŁÓWNY KONTENT ARTYKUŁU */}
      <section className="relative flex-1 w-full max-w-[900px] mx-auto px-6 py-16 -mt-8 bg-white md:rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20 mb-8 rounded-t-3xl">
        
        {/* Intro / Excerpt */}
        <p className="text-xl md:text-2xl text-[#201B55] font-medium leading-relaxed mb-12 border-l-4 border-[#A9E8CB] pl-6 italic">
          {article.excerpt}
        </p>

        {/* Ciało Artykułu z CMS (dangerouslySetInnerHTML) */}
        <article 
          className="max-w-none 
          [&>h2]:text-3xl [&>h2]:font-extrabold [&>h2]:text-[#201B55] [&>h2]:mt-12 [&>h2]:mb-6 
          [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-[#201B55] [&>h3]:mt-10 [&>h3]:mb-4
          [&>p]:text-lg [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-8 
          [&>strong]:font-bold [&>strong]:text-[#201B55]
          [&>a]:text-[#1D71B8] [&>a]:font-medium hover:[&>a]:text-[#201B55] transition-colors"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Sekcja Share */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-sm">
            <Share2 className="w-5 h-5" /> Udostępnij wiedzę
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1D71B8] hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1D71B8] hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1D71B8] hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. RELATED POSTS */}
      <section className="w-full bg-[#f4f7fa] py-20 px-6 mt-12">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-2xl font-extrabold text-[#201B55] mb-10 text-center">
            Poczytaj również w naszej strefie
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => (
              <Link key={rel.id} href={`/informacje/${rel.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-[#201B55] text-[10px] uppercase font-bold tracking-widest rounded-full backdrop-blur-md">
                      {rel.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="font-bold text-[#201B55] mb-3 line-clamp-2 group-hover:text-[#1D71B8] transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <div className="mt-auto flex items-center justify-between text-sm font-medium pt-4">
                    <span className="text-slate-400">{rel.date}</span>
                    <span className="text-[#A9E8CB] text-[#1D71B8] font-bold flex items-center uppercase tracking-wider text-xs">Czytaj <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Tailwind Custom Keyframes dla Server Componentu */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
