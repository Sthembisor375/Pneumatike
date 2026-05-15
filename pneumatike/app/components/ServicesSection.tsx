import {
  type ServiceCardItem,
  ServicesCardsGrid,
} from "./ServicesCardsGrid";

export type ServicesSectionProps = {
  sectionId?: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: ServiceCardItem[];
};

export function ServicesSection({
  sectionId,
  eyebrow,
  title,
  intro,
  cards,
}: ServicesSectionProps) {
  return (
    <section id={sectionId} className="bg-white py-20 text-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-[#AC8465] uppercase tracking-[0.3em]">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#636D51] tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-neutral-600">{intro}</p>
        </div>
        <ServicesCardsGrid cards={cards} />
      </div>
    </section>
  );
}
