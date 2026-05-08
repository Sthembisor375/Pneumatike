"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#regions", label: "Locations" },
  { href: "#music", label: "Music" },
  { href: "#gatherings", label: "Gatherings" },
  { href: "#stories", label: "Stories" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 text-neutral-100 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-semibold uppercase tracking-[0.2em] text-sm text-neutral-50"
        >
          Pneumatike
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.15em] text-neutral-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#find"
            className="rounded-full border border-white/25 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-neutral-950 transition hover:bg-neutral-100"
          >
            Find a gathering
          </Link>
        </nav>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-neutral-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-neutral-950 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-wider text-neutral-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#find"
              className="mt-2 inline-flex w-fit rounded-full border border-white/25 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950"
              onClick={() => setOpen(false)}
            >
              Find a gathering
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
