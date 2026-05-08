import Link from "next/link";
import { SiteHeader } from "./components/site-header";

const regions = [
  {
    title: "Asia Pacific",
    places: ["Australia", "Singapore", "Japan", "Philippines", "South Korea"],
  },
  {
    title: "Europe",
    places: ["United Kingdom", "Germany", "France", "Netherlands", "Spain"],
  },
  {
    title: "North America",
    places: ["United States", "Canada"],
  },
  {
    title: "Latin America",
    places: ["Brazil", "Mexico", "Argentina"],
  },
  {
    title: "Africa & Middle East",
    places: ["South Africa", "Kenya", "Nigeria", "Israel"],
  },
  {
    title: "Online",
    places: ["Stream & community"],
  },
];

const musicBlocks = [
  {
    title: "Worship",
    subtitle:
      "Songs that lift up authentic praise, strengthen the Church, and carry hope into everyday life.",
  },
  {
    title: "Chapel sessions",
    subtitle:
      "Stripped-back arrangements built for intimacy—room to linger, pray, and respond.",
  },
  {
    title: "Instrumentals",
    subtitle:
      "Textures for devotion, reflection, and personal prayer without distraction.",
  },
  {
    title: "Families & kids",
    subtitle:
      "Engaging, age-right worship that introduces children to Jesus with joy.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Hero — inspired by large welcome + mission statement overlays */}
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-neutral-950 px-4 pt-16 pb-24 text-neutral-100 sm:px-6 lg:px-8 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-55"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 20%, rgba(255,255,255,0.12), transparent 55%), linear-gradient(165deg, #0a0a0a 0%, #1a1410 40%, #0c0c0c 100%)",
          }}
        />
        <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-orange-700/15 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-200/90">
            Pneumatike
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Welcome home
          </h1>
          <p
            id="about"
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl"
          >
            We’re a church-family centred on Jesus—overflowing with gratitude for
            grace, stirred by wholehearted worship, and committed to the local
            church on mission wherever God sends us.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="#find"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-950 shadow-sm transition hover:bg-neutral-100"
            >
              Find a gathering
            </Link>
            <Link
              href="#music"
              className="inline-flex rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-50 transition hover:border-white/55 hover:bg-white/5"
            >
              Explore worship
            </Link>
          </div>
        </div>
      </section>

      {/* Region strip */}
      <section
        id="regions"
        className="border-y border-neutral-200 bg-neutral-50 py-14 text-neutral-900"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Across the nations
          </p>
          <h2 className="mt-3 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Local expressions. One Spirit.
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((block) => (
              <div key={block.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-950">
                  {block.title}
                </h3>
                <ul className="mt-4 space-y-2 text-neutral-600">
                  {block.places.map((place) => (
                    <li key={place}>
                      <span className="border-b border-neutral-900/15 pb-0.5 hover:border-neutral-900/60">
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

      {/* Music */}
      <section id="music" className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Music
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              The sound of our worship
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {musicBlocks.map((card, i) => (
              <article
                key={card.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-sm transition hover:border-neutral-300 hover:shadow-md"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-neutral-900"
                  style={{
                    backgroundImage:
                      i === 0
                        ? "linear-gradient(135deg,#1f2937,#111827,#422006)"
                        : i === 1
                          ? "linear-gradient(145deg,#0f172a,#1e293b,#334155)"
                          : i === 2
                            ? "linear-gradient(160deg,#18181b,#27272a,#3f3f46)"
                            : "linear-gradient(140deg,#4a044e,#7c3aed,#0ea5e9)",
                  }}
                >
                  <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
                  <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
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
                    Listen →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gatherings / conference-style cards */}
      <section id="gatherings" className="bg-neutral-950 py-20 text-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Gatherings
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Come expectant—we make room for Jesus together
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                eyebrow: "Regional weekend",
                title: "Conference experience",
                copy: "Teaching, ministry, worship nights, and space to reconnect with calling and community.",
              },
              {
                eyebrow: "City nights",
                title: "One-night worship",
                copy: "A concentrated evening of praise and pastoral encouragement open to friends and newcomers.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 sm:p-10"
              >
                <div className="relative z-10 max-w-lg">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200/85">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-neutral-300">{item.copy}</p>
                  <span className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.2em]">
                    Details soon →
                  </span>
                </div>
                <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* College-style band */}
      <section className="border-y border-neutral-200 bg-white py-20 text-neutral-950">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-lg lg:order-1">
            <div
              className="aspect-[4/3] w-full"
              style={{
                backgroundImage:
                  "linear-gradient(125deg,#0ea5e9 0%,#6366f1 45%,#a855f7 100%)",
                opacity: 0.92,
              }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Formation
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find your people. Prepare for purpose.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Training embedded in local-church life—so theology, character, and
              skill grow together through real ministry rhythms, not just
              classrooms.
            </p>
            <Link
              href="#stories"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wider underline decoration-neutral-300 underline-offset-8 hover:decoration-neutral-900"
            >
              Explore pathways
            </Link>
          </div>
        </div>
      </section>

      {/* Belonging */}
      <section className="bg-neutral-100 py-20 text-neutral-900">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Unity and belonging
          </h2>
          <p className="mx-auto mt-6 text-lg leading-relaxed text-neutral-600">
            We’re building a church where every generation and background can
            fully belong—because Jesus prayed for our oneness, the early Church
            showed it was possible, and heaven previews the beauty of nations
            around the throne.
          </p>
        </div>
      </section>

      {/* Stories CTA */}
      <section id="stories" className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 px-8 py-14 text-center shadow-sm sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Our journal
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Stories of faith in real places
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
              Reflections, testimonies, and articles about what Jesus is doing
              through ordinary people faithfully serving their cities.
            </p>
            <Link
              href="#"
              className="mt-10 inline-flex rounded-full bg-neutral-950 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800"
            >
              Start reading
            </Link>
          </div>
        </div>
      </section>

      {/* Find + footer */}
      <footer id="find" className="bg-neutral-950 py-14 text-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Pneumatike
            </p>
            <p className="mt-4 max-w-md text-neutral-400">
              A healthy church partnering with heaven to change lives through
              Christ—as we worship, gather locally, and go with good news.
            </p>
            <Link
              href="#regions"
              className="mt-6 inline-flex text-sm font-semibold uppercase tracking-wider text-white hover:underline"
            >
              Find a gathering →
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-neutral-400">
            {["Social", "Contact", "Care & safety"].map((label) => (
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
          © {new Date().getFullYear()} Pneumatike. Layout inspired by community
          church homepages; assets and copy are original for this project.
        </div>
      </footer>
    </>
  );
}
