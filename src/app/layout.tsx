import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlugInn - Verified EV Chargers",
  description: "Verified local chargers. Transparent pricing. Book in seconds. Join the future of EV charging.",
  keywords: ["EV charging", "electric vehicle", "charger booking", "verified chargers", "transparent pricing"],
  authors: [{ name: "PlugInn Team" }],
  openGraph: {
    title: "PlugInn - We've Got Your Back",
    description: "Verified local chargers. Transparent pricing. Book in seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
