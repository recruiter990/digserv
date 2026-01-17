import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Professional Services | Portfolio Assignments, Computer Projects, PhD Research & More",
  description: "Professional services: Portfolio-ready assignments, Computer projects (mini & major), PhD research & thesis writing, Interview preparation & job landing support, Digital marketing (Meta/Facebook/Instagram Ads), Web development services.",
  keywords: "portfolio assignments, computer projects, PhD research, thesis writing, interview preparation, digital marketing, Facebook ads, Instagram ads, web development, professional services",
  authors: [{ name: "Professional Services" }],
  openGraph: {
    title: "Professional Services | Portfolio Assignments, Computer Projects, PhD Research & More",
    description: "Professional services: Portfolio assignments, Computer projects, PhD research, Interview preparation, Digital marketing, Web development",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased`}>
        <GoogleAnalytics />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}

