import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavin Kumar | Data Analyst Portfolio",

  description:
    "Data Analyst specializing in SQL, Python, Power BI, ETL, data modeling, dashboard development, and business intelligence solutions.",

  keywords: [
    "Data Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Dashboard",
    "Business Intelligence",
    "ETL",
    "Data Analytics",
    "Portfolio",
  ],

  authors: [
    {
      name: "Kavin Kumar",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
