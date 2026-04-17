import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reo.pl | Infrastruktura Rynku Zielonej Energii",
  description: "Zintegrowany ekosystem cyfrowy. Reo.pl to potężne narzędzie, zdejmujące z barków biznesu chaos rozliczeń. Podaż OZE i popyt spotykają się w jednym centralnym punkcie inteligentnego obrotu i bilansowania rynku.",
  keywords: ["OZE", "zielona energia", "PPA", "handel energią", "platforma energetyczna", "ESG"],
  authors: [{ name: "Reo.pl" }],
  icons: {
    icon: [
      { url: "https://reo.pl/images/favicon.ico" },
      { url: "https://reo.pl/images/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "https://reo.pl/images/favicon.png" }
    ],
  },
  openGraph: {
    title: "Reo.pl | Infrastruktura Rynku Zielonej Energii",
    description: "Zintegrowany ekosystem cyfrowy ułatwiający obrót i bilansowanie na rynku zielonej energii.",
    url: "https://reo.pl",
    siteName: "Reo.pl",
    images: [
      {
        url: "https://reo.pl/images/reo-logo.svg",
        width: 1200,
        height: 630,
        alt: "Reo.pl",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="bg-brand-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
