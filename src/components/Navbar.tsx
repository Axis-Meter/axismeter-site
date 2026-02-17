"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const solutions = [
  { name: "Electricity Submetering", href: "/solutions/electricity-submetering" },
  { name: "Water Submetering", href: "/solutions/water-submetering" },
  { name: "Leak & Flood Detection", href: "/solutions/leak-detection" },
];

const markets = [
  { name: "Residential Rentals", href: "/markets/residential-rentals" },
  { name: "Condominiums", href: "/markets/condos" },
  { name: "Commercial", href: "/markets/commercial" },
  { name: "Mixed-Use", href: "/markets/mixed-use" },
  { name: "Student Housing", href: "/markets/student-housing" },
  { name: "Affordable Housing", href: "/markets/affordable-housing" },
];

const resources = [
  { name: "Submetering 101", href: "/resources/submetering-101" },
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
];

function Dropdown({ label, items }: { label: string; items: { name: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="text-gray-300 hover:text-white flex items-center gap-1 py-2">
        {label}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 bg-navy-light border border-navy-lighter rounded-lg shadow-xl py-2 min-w-[220px] z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-navy-lighter transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-navy sticky top-0 z-50 border-b border-navy-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="shrink-0">
            <Image src="/images/logo-green.png" alt="Axis Meter Solutions" width={200} height={50} priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Dropdown label="Solutions" items={solutions} />
            <Dropdown label="Markets" items={markets} />
            <Link href="/how-it-works" className="text-gray-300 hover:text-white">How It Works</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            <Dropdown label="Resources" items={resources} />
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-navy font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-gray-300" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-light border-t border-navy-lighter">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>Home</Link>

            {[
              { label: "Solutions", items: solutions },
              { label: "Markets", items: markets },
              { label: "Resources", items: resources },
            ].map(({ label, items }) => (
              <div key={label}>
                <button
                  className="w-full flex justify-between py-2 text-gray-300 hover:text-white"
                  onClick={() => setMobileDropdown(mobileDropdown === label ? null : label)}
                >
                  {label}
                  <svg className={`w-4 h-4 transition-transform ${mobileDropdown === label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileDropdown === label && (
                  <div className="pl-4 space-y-1">
                    {items.map((item) => (
                      <Link key={item.href} href={item.href} className="block py-1.5 text-gray-400 hover:text-white" onClick={() => setMobileOpen(false)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/how-it-works" className="block py-2 text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>How It Works</Link>
            <Link href="/about" className="block py-2 text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>About</Link>

            <Link
              href="/contact"
              className="block text-center bg-accent hover:bg-accent-dark text-navy font-semibold px-6 py-2.5 rounded-lg mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
