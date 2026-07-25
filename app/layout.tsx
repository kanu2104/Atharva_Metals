import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Atharva Metals & Engineering | Precision Metal Stamping & Assemblies",
  description:
    "Atharva Metals & Engineering Pvt. Ltd. — IATF 16949:2016 certified manufacturer of precision stamped metal components and welded assemblies for global OEMs in white goods, automotive and off-road vehicles.",
  keywords: [
    "metal stamping",
    "sheet metal components",
    "welded assemblies",
    "IATF 16949",
    "tube bending",
    "Atharva Metals",
    "precision engineering India",
  ],
  openGraph: {
    title: "Atharva Metals & Engineering",
    description:
      "Precision metal stamping & engineered assemblies — from concept to consignment.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
