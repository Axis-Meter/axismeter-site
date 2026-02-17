import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axis Meter Solutions — Submetering Built by Investors, for Investors",
  description:
    "Transform your property's utility management with $0 upfront submetering. Free leak detection included. Serving US & Canada. Talk to a real person today.",
  openGraph: {
    title: "Axis Meter Solutions — Submetering Built by Investors, for Investors",
    description:
      "Transform your property's utility management with $0 upfront submetering. Free leak detection included. Serving US & Canada.",
    type: "website",
    url: "https://axismeter.com",
    images: [{ url: "/images/logo-blue.png", width: 1280, height: 400 }],
  },
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
