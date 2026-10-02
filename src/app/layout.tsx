import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MotionProvider } from "@/context/MotionContext";
import { portfolioConfig } from "@/data/portfolio.config";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
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
  description: `${portfolioConfig.personal.shortIntro} Explore my software projects, learning journey, and experiments.`,
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-charcoal-950 text-warmWhite font-sans antialiased min-h-screen flex flex-col selection:bg-aqua-400/20 selection:text-white">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
