"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export type FormatCardItem = {
  eyebrow: string;
  title: string;
  copy: string;
  imageSrc: string;
  imageAlt: string;
  ctaHref: string;
  ctaLabel: string;
};

type Props = {
  cards: FormatCardItem[];
};

export function FormatCardsGrid({ cards }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid) return;

      const ctx = gsap.context(() => {
        const articles = gsap.utils.toArray<HTMLElement>(
          grid.querySelectorAll("article"),
        );
        if (!articles.length) return;

        const allLines = articles.flatMap((article) =>
          Array.from(
            article.querySelectorAll<HTMLElement>("[data-format-animate]"),
          ),
        );

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          gsap.set(articles, { opacity: 1, y: 0 });
          gsap.set(allLines, { opacity: 1, y: 0 });
          return;
        }

        gsap.set(articles, { opacity: 0, y: 56 });
        gsap.set(allLines, { opacity: 0, y: 14 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          })
          .to(articles, {
            opacity: 1,
            y: 0,
            duration: 0.78,
            stagger: { each: 0.14, from: "start" },
            ease: "power2.out",
            overwrite: "auto",
          })
          .to(
            allLines,
            {
              opacity: 1,
              y: 0,
              duration: 0.48,
              stagger: 0.09,
              ease: "power2.out",
            },
            "-=0.42",
          );
      }, grid);

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(refresh);

      const imgs = grid.querySelectorAll("img");
      imgs.forEach((img) => {
        if (img.complete) return;
        img.addEventListener("load", refresh, { once: true });
      });

      return () => ctx.revert();
    },
    { dependencies: [] },
  );

  return (
    <div ref={gridRef} className="mt-12 grid gap-6 lg:grid-cols-2">
      {cards.map((item) => (
        <article
          key={item.title}
          className="group relative overflow-hidden rounded-2xl border border-white/10"
        >
          <div className="relative aspect-[5/4] w-full sm:aspect-[16/10]">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-[1.02]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/30"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent"
              aria-hidden
            />
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 sm:p-10">
              <div className="max-w-lg">
                <p
                  data-format-animate
                  className="text-xs uppercase tracking-[0.25em] text-amber-200/90"
                >
                  {item.eyebrow}
                </p>
                <h3
                  data-format-animate
                  className="mt-3 text-2xl font-semibold text-white"
                >
                  {item.title}
                </h3>
                <p data-format-animate className="mt-4 text-neutral-200">
                  {item.copy}
                </p>
                <Link
                  data-format-animate
                  href={item.ctaHref}
                  className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-white/90 hover:text-white"
                >
                  {item.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
