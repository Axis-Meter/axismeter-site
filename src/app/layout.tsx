import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://axismeter.com'),
  title: "Axis Meter Solutions — Utility Submetering Services in US and Canada",
  description:
    "Transform your property's utility management with $0 upfront submetering. Free leak detection included. Serving US & Canada. Talk to a real person today.",
  openGraph: {
    title: "Axis Meter Solutions — Utility Submetering Services in US and Canada",
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
        <OrganizationSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
