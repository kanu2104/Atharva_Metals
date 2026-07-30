import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { siteDescription, siteName, siteShortName, siteUrl } from "@/lib/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteShortName} & Engineering | Precision Metal Stamping & Assemblies`,
    template: `%s | ${siteShortName}`,
  },
  description: siteDescription,
  applicationName: siteShortName,
  keywords: [
    "Atharva Metals",
    "Atharva Metals & Engineering",
    "metal stamping India",
    "sheet metal components",
    "welded assemblies",
    "IATF 16949",
    "tube bending",
    "precision engineering Pune",
    "progressive stamping",
    "OEM metal components",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteName,
    title: `${siteShortName} & Engineering | Precision Metal Stamping & Assemblies`,
    description:
      "Precision metal stamping & engineered assemblies — from concept to consignment.",
    images: [
      {
        url: "/images/hero/hero-factory.jpg",
        width: 1200,
        height: 630,
        alt: "Atharva Metals manufacturing facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteShortName} & Engineering`,
    description:
      "Precision metal stamping & engineered assemblies — from concept to consignment.",
    images: ["/images/hero/hero-factory.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      <body className="bg-background text-foreground antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
