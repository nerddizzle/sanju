import type { Metadata } from "next";
import { Inter, Playfair_Display, Whisper } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const whisper = Whisper({
  variable: "--font-signature",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanju | Visual Artist",
  description: "Portfolio of Sanju, a visual artist specializing in paintings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${whisper.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-foreground`}
      >
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
