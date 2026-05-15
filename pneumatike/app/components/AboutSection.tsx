import Image from "next/image";

export type AboutSectionProps = {
  sectionId?: string;
  eyebrow: string;
  title: string;
  lead: string;
  visionHeading: string;
  visionBody: string;
  founderHeading: string;
  founderBody: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
};

export function AboutSection({
  sectionId = "about",
  eyebrow,
  title,
  lead,
  visionHeading,
  visionBody,
  founderHeading,
  founderBody,
  imageSrc,
  imageAlt,
  imageCaption,
}: AboutSectionProps) {
  return (
    <section
      id={sectionId}
      className="relative overflow-hidden bg-[#2a3026] text-neutral-100"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-20%,rgba(210,194,169,0.12),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(0,0,0,0.35)_0%,transparent_45%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl lg:grid-cols-2 lg:items-stretch">
        {/* Copy + cards */}
        <div className="order-2 flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:order-1 lg:px-10 xl:px-14 lg:py-24">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#D2C2A9]">
            {eyebrow}
          </p>

          <h2 className="mt-5 max-w-xl text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl sm:leading-[1.1] xl:text-[2.5rem]">
            {title}
          </h2>

          <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-neutral-400 sm:text-base">
            {lead}
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <article className="group rounded-2xl border border-white/[0.08] bg-white/[0.06] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors hover:bg-white/[0.09]">
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#AC8465] shadow-[0_0_12px_rgba(172,132,101,0.6)]"
                  aria-hidden
                />
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D2C2A9]">
                  {visionHeading}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300">
                {visionBody}
              </p>
            </article>

            <article className="group rounded-2xl border border-white/[0.08] bg-white/[0.06] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors hover:bg-white/[0.09]">
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#636D51] shadow-[0_0_12px_rgba(99,109,81,0.7)]"
                  aria-hidden
                />
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D2C2A9]">
                  {founderHeading}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300">
                {founderBody}
              </p>
            </article>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 min-h-[min(72vw,380px)] sm:min-h-[420px] lg:order-2 lg:min-h-[560px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority={false}
          />
          <div
            className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(to_right,rgb(42_48_38)_0%,rgba(42,48,38,0.5)_10%,transparent_20%)] lg:block"
            aria-hidden
          />
          {imageCaption ? (
            <p className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/30 px-4 py-4 text-[0.6875rem] leading-relaxed text-neutral-400 backdrop-blur-sm sm:px-6 lg:left-auto lg:right-0 lg:max-w-[min(100%,24rem)] lg:rounded-tl-2xl lg:border-l lg:border-white/10">
              {imageCaption}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
