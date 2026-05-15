import Image from "next/image";
import Link from "next/link";

export type SplitFeatureLink = {
  href: string;
  label: string;
};

export type SplitFeatureSectionProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  body: string;
  link: SplitFeatureLink;
  /** When true, image column appears first on large screens (default matches training block: image left). */
  imageFirstLg?: boolean;
};

export function SplitFeatureSection({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  body,
  link,
  imageFirstLg = true,
}: SplitFeatureSectionProps) {
  return (
    <section className="border-y border-neutral-200 bg-white py-20 text-neutral-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div
          className={
            imageFirstLg
              ? "order-2 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-lg lg:order-1"
              : "order-2 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-lg lg:order-2"
          }
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div
          className={
            imageFirstLg ? "order-1 lg:order-2" : "order-1 lg:order-1"
          }
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl text-[#636D51] font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {body}
          </p>
          <Link
            href={link.href}
            className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wider underline decoration-neutral-300 underline-offset-8 hover:decoration-neutral-900"
          >
            {link.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
