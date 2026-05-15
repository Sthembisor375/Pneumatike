import Link from "next/link";

export type FirstTouchCta = {
  href: string;
  label: string;
};

export type FirstTouchCtaSectionProps = {
  sectionId?: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: FirstTouchCta;
};

export function FirstTouchCtaSection({
  sectionId,
  eyebrow,
  title,
  description,
  cta,
}: FirstTouchCtaSectionProps) {
  return (
    <section id={sectionId} className="bg-white py-20 text-neutral-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 px-8 py-14 text-center shadow-sm sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
            {description}
          </p>
          <Link
            href={cta.href}
            className="mt-10 inline-flex rounded-full bg-neutral-950 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
