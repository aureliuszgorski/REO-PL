"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, EyeOff, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "Jan Kowalski",
    company: "Kowalski Sp. z o.o.",
    email: "jak.kowalski@gmail.com",
    phone: "+48 500 000 000",
    password: "••••••••••••",
    passwordConfirm: "••••••••••••",
  });

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-20 px-4 pt-32">
      
      <h1 className="text-4xl font-extrabold text-[#383665] mb-12">
        Zarejestruj się
      </h1>

      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.03)] relative">
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* Imię i nazwisko */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-[#383665] font-bold text-sm">
              Imię i nazwisko <span className="text-orange-500">*</span>
            </label>
            <input 
              type="text" 
              readOnly
              value={formData.name}
              className="w-full h-12 px-4 border border-emerald-200 rounded-full text-slate-800 bg-white focus:outline-none focus:border-brand-neon pr-12"
            />
            <Check className="w-5 h-5 text-emerald-300 absolute right-4 top-10" />
          </div>

          {/* Nazwa firmy */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-[#383665] font-bold text-sm">
              Nazwa firmy <span className="text-orange-500">*</span>
            </label>
            <input 
              type="text" 
              readOnly
              value={formData.company}
              className="w-full h-12 px-4 border border-emerald-200 rounded-full text-slate-800 bg-white focus:outline-none focus:border-brand-neon pr-12"
            />
            <Check className="w-5 h-5 text-emerald-300 absolute right-4 top-10" />
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-[#383665] font-bold text-sm">
              E-mail <span className="text-orange-500">*</span>
            </label>
            <input 
              type="email" 
              readOnly
              value={formData.email}
              className="w-full h-12 px-4 border border-emerald-200 rounded-full text-slate-800 bg-white focus:outline-none focus:border-brand-neon pr-12"
            />
            <Check className="w-5 h-5 text-emerald-300 absolute right-4 top-10" />
          </div>

          {/* Numer telefonu */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-[#383665] font-bold text-sm">
              Numer telefonu <span className="text-orange-500">*</span>
            </label>
            <input 
              type="tel" 
              readOnly
              value={formData.phone}
              className="w-full h-12 px-4 border border-emerald-200 rounded-full text-slate-800 bg-white focus:outline-none focus:border-brand-neon pr-12"
            />
            <Check className="w-5 h-5 text-emerald-300 absolute right-4 top-10" />
          </div>

          {/* Hasło */}
          <div className="flex flex-col gap-2 relative md:col-span-2">
            <label className="text-[#383665] font-bold text-sm">
              Hasło <span className="text-orange-500">*</span>
            </label>
            <input 
              type="password" 
              readOnly
              value={formData.password}
              className="w-full h-12 px-4 border border-emerald-200 rounded-full text-slate-800 bg-white focus:outline-none focus:border-brand-neon pr-20 tracking-widest text-lg"
            />
            <div className="absolute right-4 top-10 flex items-center gap-2">
               <Check className="w-5 h-5 text-emerald-300" />
               <EyeOff className="w-5 h-5 text-slate-400 cursor-pointer" />
            </div>
            <p className="text-xs text-slate-400 mt-1 pl-2">Minimum 8 znaków, cyfra, mała litera, wielka litera, znak specjalny</p>
          </div>

          {/* Hasło Powtórz */}
          <div className="flex flex-col gap-2 relative md:col-span-2">
            <label className="text-[#383665] font-bold text-sm">
              Hasło (powtórz) <span className="text-orange-500">*</span>
            </label>
            <input 
              type="password" 
              readOnly
              value={formData.passwordConfirm}
              className="w-full h-12 px-4 border border-emerald-200 rounded-full text-slate-800 bg-white focus:outline-none focus:border-brand-neon pr-20 tracking-widest text-lg"
            />
            <div className="absolute right-4 top-10 flex items-center gap-2">
               <Check className="w-5 h-5 text-emerald-300" />
               <EyeOff className="w-5 h-5 text-slate-400 cursor-pointer" />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="md:col-span-2 mt-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#383665] rounded flex items-center justify-center">
                 <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-[#383665] text-sm">Akceptuję wszystkie zgody.</span>
              <button type="button" className="text-slate-500 text-sm underline hover:text-[#383665]">rozwiń</button>
            </div>
            
            <button type="button" className="text-slate-500 text-sm underline hover:text-[#383665]">
              Pełna informacja dotycząca polityki prywatności
            </button>
          </div>

        </form>

        {/* Floating Submit Button exactly mapping the design */}
        <div className="absolute -bottom-6 -right-6 md:-bottom-2 md:-right-2 w-full flex justify-end pointer-events-none">
           <Link href="/dashboard" className="pointer-events-auto bg-[#A7E8C8] hover:bg-[#8cdcb3] text-[#383665] font-bold py-4 px-8 rounded-full rounded-tr-none md:rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-emerald-200/50">
             Rejestracja <ArrowRight className="w-5 h-5" />
           </Link>
           {/* In the design, the border cuts inward around the button, but absolute positioning creates a similar visual pop-out effect on the container. */}
        </div>
      </div>

    </div>
  );
}
