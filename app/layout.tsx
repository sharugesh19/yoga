import type { Metadata } from "next";
import { Fraunces, Inter, Alex_Brush } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionBoot from "@/components/MotionBoot";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { site } from "@/lib/content";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"], variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Yoga Studio in Chennai | Mokshaa Yoga, Neelankarai",
    template: "%s | Mokshaa Yoga",
  },
  description:
    "Mokshaa Yoga in Neelankarai, Chennai — ISO 9001 certified, E-RYT 500 instructors. Group, Ladies-only, Prenatal, Kids, Senior, Personal & Online Zoom yoga classes.",
  keywords: ["yoga classes Chennai", "yoga studio Neelankarai", "yoga center near me Chennai", "group yoga Chennai", "prenatal yoga Chennai"],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1600, height: 900, alt: "Mokshaa Yoga studio, Neelankarai Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${inter.variable} ${alexBrush.variable}`}>
      <body>
        <a
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-neutral-bg focus:px-4 focus:py-3 focus:font-bold"
          href="#main"
        >
          Skip to content
        </a>
        <MotionBoot />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
