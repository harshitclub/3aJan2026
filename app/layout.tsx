import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/navbar/Navbar";
import Footer from "@/components/global/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://3alearningsolutions.com"),
  title: "3a Learning Solutions: Training & Consulting",
  description:
    "Empower your workforce with 3a. We offer high-quality, customized training & consulting solutions to help you succeed.",
  keywords: [
    "3a Learning Solutions",
    "3a Learning Solutions India Pvt. Ltd",
    "3a",
    "Training",
    "Consulting",
    "Training & Consulting",
  ],
  creator: "3a Learning Solutions",
  alternates: {
    canonical: "https://3alearningsolutions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
