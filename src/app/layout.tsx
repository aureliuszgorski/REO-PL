import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reo.pl | Premium Green Energy Market",
  description: "Długoterminowe Umowy PPA i Platforma Peer-to-Peer",
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
