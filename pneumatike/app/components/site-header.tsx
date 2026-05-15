"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#reach", label: "Reach" },
  { href: "#services", label: "Services" },
  { href: "#sessions", label: "Formats" },
  { href: "#next-steps", label: "Start here" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#636D51] text-neutral-100">
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4 sm:h-26 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex shrink-0 items-center">
          <Image
            src="/Pneumatike%20icon.svg"
            alt="Pneumatike"
            width={256}
            height={256}
            priority
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
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
            href="/contact"
            className="rounded-full border border-white/25 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-neutral-950 transition hover:bg-neutral-100"
          >
            Get in touch
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
              href="/contact"
              className="mt-2 inline-flex w-fit rounded-full border border-white/25 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
