"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Hero background uses position:fixed + clip-path on the section so the photo
 * stays visually stationary against the viewport while hero copy scrolls over it
 * (same idea as background-attachment: fixed, works with next/image).
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const blocks = introRef.current?.children;
      if (!blocks?.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(blocks, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(blocks, {
        opacity: 0,
        y: 28,
        duration: 1.35,
        stagger: 0.22,
        ease: "power2.out",
        delay: 0.25,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[78vh] overflow-hidden px-4 pt-16 pb-24 text-neutral-100 [clip-path:inset(0)] [-webkit-clip-path:inset(0)] sm:px-6 lg:px-8 lg:pb-28"
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full"
        aria-hidden
      >
        <Image
          src="/iwaria-inc-Q6KzWe-lq9Y-unsplash.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-neutral-950/60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 25%, rgba(255,255,255,0.08), transparent 55%), linear-gradient(165deg, rgba(10,10,10,0.85) 0%, rgba(26,20,16,0.5) 45%, rgba(12,12,12,0.88) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 z-[1] h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 z-[1] h-80 w-80 rounded-full bg-orange-700/15 blur-3xl"
        aria-hidden
      />

      <div
        ref={introRef}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <Image
          src="/Pneumatike%20logo%20text.svg"
          alt="Pneumatike"
          width={384}
          height={256}
          priority
          className="mx-auto h-auto w-full max-w-[16rem] sm:max-w-[20rem] lg:max-w-[24rem]"
        />
        <p
          id="about"
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl"
        >
          Pastoral care for individuals and families—mentorship, training, and
          guidance for whatever season you are in. This is the first place to
          learn how we might work together, wherever you are in the world.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-950 shadow-sm transition hover:bg-neutral-100"
          >
            Begin a conversation
          </Link>
          <Link
            href="#services"
            className="inline-flex rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-50 transition hover:border-white/55 hover:bg-white/5"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
