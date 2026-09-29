import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/context/MotionContext";
import { portfolioConfig } from "@/data/portfolio.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.fullName} — ${portfolioConfig.personal.role}`,
  description: `${portfolioConfig.personal.shortIntro} Explore projects in AgriTech, AI Study synthesis, Computer Vision verification, and Interactive Physics.`,
  keywords: [
    "Suryakanta Bala",
    "Surya Bala",
    "Full-Stack Developer",
    "AI Applications",
    "DRIEMS University",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: portfolioConfig.personal.fullName }],
  creator: portfolioConfig.personal.fullName,
  openGraph: {
    title: `${portfolioConfig.personal.fullName} — Portfolio`,
    description: portfolioConfig.personal.shortIntro,
    url: "https://suryakanta-portfolio.vercel.app",
    siteName: `${portfolioConfig.personal.fullName} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.personal.fullName} — Portfolio`,
    description: portfolioConfig.personal.shortIntro,
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-charcoal-950 text-warmWhite font-sans antialiased min-h-screen flex flex-col selection:bg-aqua-400/20 selection:text-white">
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
