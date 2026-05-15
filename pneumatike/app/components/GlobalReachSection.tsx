export type ReachZone = {
  title: string;
  places: string[];
};

export type GlobalReachSectionProps = {
  sectionId?: string;
  eyebrow: string;
  title: string;
  description: string;
  zones: ReachZone[];
};

export function GlobalReachSection({
  sectionId,
  eyebrow,
  title,
  description,
  zones,
}: GlobalReachSectionProps) {
  return (
    <section
      id={sectionId}
      className="border-y border-neutral-200 bg-neutral-50 py-14 text-neutral-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-[#AC8465] font-semibold uppercase tracking-[0.3em]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-center text-2xl text-[#636D51] font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          {description}
        </p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((block) => (
            <div key={block.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-950">
                {block.title}
              </h3>
              <ul className="mt-4 space-y-2 text-neutral-600">
                {block.places.map((place) => (
                  <li key={place}>
                    <span className="border-b border-neutral-900/15 pb-0.5">
                      {place}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
