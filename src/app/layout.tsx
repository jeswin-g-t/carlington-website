import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlington | Legacy Series CT 9999",
  description: "Modern, high-end e-commerce product detail page for the Carlington Legacy Series Watch (CT 9999).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white max-w-[100vw]">
        {children}
      </body>
    </html>
  );
}
