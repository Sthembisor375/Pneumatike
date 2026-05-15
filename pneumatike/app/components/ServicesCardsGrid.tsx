"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export type ServiceCardItem = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  /** Short line shown at the bottom of each card (e.g. link hint). */
  footerLabel: string;
};

type Props = {
  cards: ServiceCardItem[];
};

export function ServicesCardsGrid({ cards }: Props) {
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

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          gsap.set(articles, { opacity: 1, y: 0 });
          return;
        }

        gsap.set(articles, { opacity: 0, y: 56 });

        gsap.to(articles, {
          opacity: 1,
          y: 0,
          duration: 0.78,
          stagger: {
            each: 0.14,
            from: "start",
          },
          ease: "power2.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      }, grid);

      const refreshAfterImages = () => {
        ScrollTrigger.refresh();
      };
      requestAnimationFrame(refreshAfterImages);

      const imgs = grid.querySelectorAll("img");
      imgs.forEach((img) => {
        if (img.complete) return;
        img.addEventListener("load", refreshAfterImages, { once: true });
      });

      return () => {
        ctx.revert();
      };
    },
    { dependencies: [] },
  );

  return (
    <div
      ref={gridRef}
      className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {cards.map((card) => (
        <article
          key={card.title}
          className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-neutral-300 hover:shadow-md"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-[transform] duration-300 ease-out group-hover:scale-[1.03]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/5"
              aria-hidden
            />
            <span className="absolute bottom-4 left-4 right-4 text-xs font-semibold uppercase tracking-[0.2em] text-white drop-shadow-sm">
              {card.title}
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <h3 className="text-lg font-semibold tracking-tight">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              {card.subtitle}
            </p>
            <span className="mt-auto text-xs font-semibold uppercase tracking-wider text-neutral-900">
              {card.footerLabel}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
