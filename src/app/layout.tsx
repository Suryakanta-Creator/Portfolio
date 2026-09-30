import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/context/MotionContext";
import { ThemeProvider } from "@/context/ThemeContext";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#111114" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.fullName} — ${portfolioConfig.personal.role}`,
  description: `${portfolioConfig.personal.shortIntro} Explore full-stack, AI, and interactive projects.`,
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
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden font-sans antialiased">
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
