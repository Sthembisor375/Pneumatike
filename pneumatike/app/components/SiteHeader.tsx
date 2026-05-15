"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "@/lib/gsap";

const SECTION_IDS = [
  "about",
  "reach",
  "services",
  "sessions",
  "next-steps",
] as const;

type SectionId = (typeof SECTION_IDS)[number];
type NavHighlightId = SectionId | "contact";

const navLinks: readonly {
  href: string;
  label: string;
  sectionId: SectionId;
}[] = [
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#reach", label: "Reach", sectionId: "reach" },
  { href: "/#services", label: "Services", sectionId: "services" },
  { href: "/#sessions", label: "Formats", sectionId: "sessions" },
  { href: "/#next-steps", label: "Start here", sectionId: "next-steps" },
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

function computeActiveSection(headerHeight: number): SectionId {
  const line = headerHeight + 6;
  let current: SectionId = "about";
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= line) {
      current = id;
    }
  }
  return current;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<SectionId>("about");

  const headerRef = useRef<HTMLElement>(null);
  const navTrackRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const underlineTweenRef = useRef<gsap.core.Animation | null>(null);
  const skipResizeObserverRef = useRef(true);
  const linkRefs = useRef<Partial<Record<NavHighlightId, HTMLAnchorElement | null>>>(
    {},
  );

  const navHighlight: NavHighlightId | null =
    pathname === "/contact" ? "contact" : pathname === "/" ? activeSectionId : null;

  const animateUnderline = useCallback(
    (mode: "jump" | "quick" | "hide") => {
      const el = underlineRef.current;
      const track = navTrackRef.current;
      if (!el) return;

      underlineTweenRef.current?.kill();
      underlineTweenRef.current = null;

      if (mode === "hide" || navHighlight === null || !track) {
        underlineTweenRef.current = gsap.to(el, {
          opacity: 0,
          duration: 0.22,
          ease: "power2.out",
          overwrite: true,
        });
        return;
      }

      const link = linkRefs.current[navHighlight];
      if (!link) {
        underlineTweenRef.current = gsap.to(el, {
          opacity: 0,
          duration: 0.22,
          ease: "power2.out",
          overwrite: true,
        });
        return;
      }

      const tRect = track.getBoundingClientRect();
      const lRect = link.getBoundingClientRect();
      const left = lRect.left - tRect.left + track.scrollLeft;
      const width = lRect.width;
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        underlineTweenRef.current = gsap.to(el, {
          x: left,
          width,
          opacity: 1,
          scaleY: 1,
          duration: 0.2,
          ease: "power2.out",
          transformOrigin: "50% 100%",
          overwrite: true,
        });
        return;
      }

      if (mode === "quick") {
        underlineTweenRef.current = gsap.to(el, {
          x: left,
          width,
          opacity: 1,
          scaleY: 1,
          duration: 0.36,
          ease: "back.out(1.75)",
          transformOrigin: "50% 100%",
          overwrite: true,
        });
        return;
      }

      const tl = gsap.timeline({ overwrite: true });
      underlineTweenRef.current = tl;

      tl.to(el, {
        scaleY: 1.6,
        duration: 0.1,
        ease: "power2.out",
        transformOrigin: "50% 100%",
      }).to(
        el,
        {
          x: left,
          width,
          scaleY: 1,
          opacity: 1,
          duration: 0.52,
          ease: "back.out(1.92)",
        },
        "<0.02",
      );
    },
    [navHighlight],
  );

  const scrollTick = useCallback(() => {
    if (pathname !== "/") return;
    const h = headerRef.current?.offsetHeight ?? 96;
    setActiveSectionId(computeActiveSection(h));
  }, [pathname]);

  useEffect(() => {
    scrollTick();
  }, [pathname, scrollTick]);

  useEffect(() => {
    if (pathname !== "/") return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scrollTick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname, scrollTick]);

  useLayoutEffect(() => {
    const el = underlineRef.current;
    if (!el) return;
    if (navHighlight === null) {
      animateUnderline("hide");
      return;
    }
    animateUnderline("jump");
    requestAnimationFrame(() => {
      skipResizeObserverRef.current = false;
    });
  }, [navHighlight, pathname, open, animateUnderline]);

  useEffect(() => {
    const track = navTrackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(() => {
      if (skipResizeObserverRef.current) return;
      animateUnderline("quick");
    });
    ro.observe(track);
    return () => ro.disconnect();
  }, [animateUnderline]);

  useEffect(() => {
    return () => {
      if (underlineRef.current) {
        gsap.killTweensOf(underlineRef.current);
      }
    };
  }, []);

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

  const linkIsActive = (sectionId: SectionId) =>
    pathname === "/" && activeSectionId === sectionId;
  const contactIsActive = pathname === "/contact";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#636D51] text-neutral-100"
    >
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
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <div ref={navTrackRef} className="relative flex items-center gap-8">
            <span
              ref={underlineRef}
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 origin-bottom rounded-full bg-white opacity-0 will-change-transform"
            />
            {navLinks.map((item) => (
              <Link
                key={item.href}
                ref={(el) => {
                  linkRefs.current[item.sectionId] = el;
                }}
                href={item.href}
                aria-current={linkIsActive(item.sectionId) ? "true" : undefined}
                className={`relative z-10 text-xs uppercase tracking-[0.15em] transition-colors ${
                  linkIsActive(item.sectionId)
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              ref={(el) => {
                linkRefs.current.contact = el;
              }}
              href="/contact"
              aria-current={contactIsActive ? "page" : undefined}
              className="relative z-10 rounded-full border border-white/25 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-neutral-950 transition hover:bg-neutral-100"
            >
              Get in touch
            </Link>
          </div>
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
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none translate-x-full"
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
                aria-current={linkIsActive(item.sectionId) ? "true" : undefined}
                className={`rounded-lg border-l-2 px-3 py-3 text-sm uppercase tracking-wider transition ${
                  linkIsActive(item.sectionId)
                    ? "border-white bg-white/10 text-white"
                    : "border-transparent text-neutral-200 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              aria-current={contactIsActive ? "page" : undefined}
              className={`mx-3 mt-6 inline-flex w-fit rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition ${
                contactIsActive
                  ? "border-white bg-white text-neutral-950"
                  : "border-white/25 bg-white text-neutral-950 hover:bg-neutral-100"
              }`}
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
