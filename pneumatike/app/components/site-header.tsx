"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#reach", label: "Reach" },
  { href: "/#services", label: "Services" },
  { href: "/#sessions", label: "Formats" },
  { href: "/#next-steps", label: "Start here" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md border border-white/25 p-2 text-neutral-100 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      {/* Mobile: backdrop + slide-in drawer from the right */}
      <div className="md:hidden">
        <div
          role="presentation"
          className={`fixed inset-0 z-[100] bg-neutral-950/55 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-hidden={!open}
          aria-label="Site navigation"
          className={`fixed right-0 top-0 z-[101] flex h-[100dvh] w-[80vw] max-w-sm flex-col border-l border-white/10 bg-[#4a523f] shadow-xl transition-transform duration-300 ease-out ${
            open
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-start border-b border-white/10 px-4 py-3">
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-md p-2 text-neutral-200 transition hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <HamburgerIcon open />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm uppercase tracking-wider text-neutral-200 transition hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mx-3 mt-6 inline-flex w-fit rounded-full border border-white/25 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 transition hover:bg-neutral-100"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
}
