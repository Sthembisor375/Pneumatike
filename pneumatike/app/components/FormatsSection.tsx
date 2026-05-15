import { type FormatCardItem, FormatCardsGrid } from "./FormatCardsGrid";

export type FormatsSectionProps = {
  sectionId?: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: FormatCardItem[];
};

export function FormatsSection({
  sectionId,
  eyebrow,
  title,
  intro,
  cards,
}: FormatsSectionProps) {
  return (
    <section id={sectionId} className="bg-neutral-950 py-20 text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl text-[#D2C2A9] font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-white">{intro}</p>
        <FormatCardsGrid cards={cards} />
      </div>
    </section>
  );
}
