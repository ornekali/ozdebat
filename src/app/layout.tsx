import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OZDE BAT | Construction & Rénovation en Île-de-France",
    template: "%s | OZDE BAT",
  },
  description:
    "OZDE BAT - Entreprise de construction, rénovation, maçonnerie, carrelage et travaux publics en Île-de-France. Location de matériel BTP. Devis gratuit.",
  keywords: [
    "construction",
    "rénovation",
    "maçonnerie",
    "carrelage",
    "travaux publics",
    "BTP",
    "Île-de-France",
    "Paris",
    "Tremblay-en-France",
    "location matériel",
    "pelleteuse",
    "camion",
    "OZDE BAT",
  ],
  authors: [{ name: "OZDE BAT" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "OZDE BAT",
    title: "OZDE BAT | Construction & Rénovation en Île-de-France",
    description:
      "Maçonnerie, carrelage, travaux publics, construction neuve et location de matériel BTP en Île-de-France.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
