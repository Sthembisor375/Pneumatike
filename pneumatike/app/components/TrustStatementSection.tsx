export type TrustStatementSectionProps = {
  title: string;
  body: string;
};

export function TrustStatementSection({
  title,
  body,
}: TrustStatementSectionProps) {
  return (
    <section className="bg-neutral-100 py-20 text-neutral-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 text-lg leading-relaxed text-neutral-600">
          {body}
        </p>
      </div>
    </section>
  );
}
