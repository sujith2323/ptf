import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujith G | Electronics & Embedded Systems Engineer",
  description: "Portfolio of Sujith G - Electronics and Communication Engineering student specializing in embedded systems, automotive electronics, and firmware development.",
  keywords: ["Sujith G", "Electronics Engineer", "Embedded Systems", "STM32", "Automotive Electronics", "PCB Design"],
  authors: [{ name: "Sujith G" }],
  openGraph: {
    title: "Sujith G | Electronics & Embedded Systems Engineer",
    description: "Portfolio showcasing embedded systems, automotive electronics, and firmware development projects.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}