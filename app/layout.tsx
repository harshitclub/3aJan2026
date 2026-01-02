import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/global/navbar/Navbar";
import Footer from "@/components/global/footer/Footer";

const myFont = localFont({ src: "../fonts/AeonikTRIAL-Regular.otf" });

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://3alearningsolutions.com",
    title: "3a Learning Solutions: Training & Consulting",
    description:
      "Empower your workforce with 3a. We offer high-quality, customized training & consulting solutions to help you succeed.",
    siteName: "3a Learning Solutions",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "3a Learning Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3a Learning Solutions: Training & Consulting",
    description:
      "Empower your workforce with 3a. We offer high-quality, customized training & consulting solutions to help you succeed.",
    creator: "@harshitclub",
  },
  icons: {
    icon: "/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
