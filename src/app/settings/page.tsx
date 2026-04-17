"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function SettingsPage() {
  const settingsLinks = [
    "Zmień hasło",
    "Regulamin Platformy Reo",
    "Umowa dla kupujących energię i marże",
    "Umowa dla sprzedających energię i marże",
    "Regulamin Platformy Reo i marże (arch. do 03.11.2022)",
    "Wyloguj"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-[5%] max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#383665] mb-12">
          Ustawienia konta
        </h1>

        <div className="flex flex-wrap gap-4">
          {settingsLinks.map((link) => (
            <button 
              key={link}
              className={`px-6 py-4 border rounded-sm font-semibold text-center transition-colors
                ${link === "Wyloguj" ? "border-red-200 text-[#383665] hover:bg-red-50" : "border-emerald-200 text-[#383665] hover:bg-emerald-50 hover:border-emerald-300"}
              `}
            >
              {link}
            </button>
          ))}
        </div>

      </main>
    </div>
  );
}
