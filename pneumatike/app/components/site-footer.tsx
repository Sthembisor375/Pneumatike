import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto shrink-0 bg-[#3b4131] py-14 text-neutral-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Pneumatike
          </p>
          <p className="mt-4 max-w-md text-neutral-400">
            Pastoral mentorship, training, and guidance for individuals and
            families—offered with dependence on Christ and respect for your
            story. Reach out to explore whether this is the right season to work
            together.
          </p>
          <p className="mt-6 text-sm text-neutral-500">
            Prefer the full form?{" "}
            <Link
              href="/contact"
              className="font-medium text-neutral-300 underline-offset-4 hover:text-white hover:underline"
            >
              Contact us
            </Link>
            .
          </p>
          <Link
            href="/#reach"
            className="mt-6 inline-flex text-sm font-semibold uppercase tracking-wider text-white hover:underline"
          >
            Review global reach →
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 text-neutral-400">
          <Link
            href="/contact"
            className="text-xs uppercase tracking-[0.2em] hover:text-white"
          >
            Contact
          </Link>
          {["Privacy", "Terms"].map((label) => (
            <span
              key={label}
              className="text-xs uppercase tracking-[0.2em] hover:text-white"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-8 text-xs text-neutral-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Pneumatike. Professional pastoral services
        may be subject to local regulation; visitors are responsible for
        verifying suitability for their situation.
      </div>
    </footer>
  );
}
