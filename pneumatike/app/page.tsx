import Image from "next/image";
import Link from "next/link";
import { FormatCardsGrid } from "./components/format-cards-grid";
import { HeroSection } from "./components/hero-section";
import { ServicesCardsGrid } from "./components/services-cards-grid";
import { SiteHeader } from "./components/site-header";

const reachZones = [
  {
    title: "Americas",
    places: [
      "United States & Canada",
      "Latin America",
      "Aligned to your time zone",
    ],
  },
  {
    title: "Europe & UK",
    places: ["United Kingdom & Ireland", "European Union", "Middle East"],
  },
  {
    title: "Asia Pacific",
    places: [
      "East & Southeast Asia",
      "Australia & New Zealand",
      "Pacific islands",
    ],
  },
  {
    title: "Africa",
    places: ["West, East & Southern Africa", "Remote-friendly scheduling"],
  },
  {
    title: "Everywhere",
    places: [
      "Secure video sessions",
      "Phone where appropriate",
      "Follow-up between meetings",
    ],
  },
];

const serviceCards = [
  {
    title: "Pastoral mentorship",
    subtitle:
      "One-to-one space to process life, leadership, and calling with Scripture-shaped wisdom and prayerful support.",
    imageSrc: "/prayer-hands-black-men-brown-green.png",
    imageAlt:
      "Two men seated outdoors having a thoughtful conversation, suggesting mentorship.",
  },
  {
    title: "Training & equipping",
    subtitle:
      "Focused teaching for individuals or small groups—doctrine that meets life, tools you can use next week.",
    imageSrc: "/pexels-leonardodourado-13011294.jpg",
    imageAlt:
      "Person studying with notes and laptop, suggesting focused learning.",
  },
  {
    title: "Family guidance",
    subtitle:
      "Help for marriages, parenting, and multigenerational dynamics rooted in grace, clarity, and healthy boundaries.",
    imageSrc: "/young-black-family-green-nature.png",
    imageAlt:
      "Family spending time together outdoors, suggesting connection and guidance.",
  },
  {
    title: "Guidance & discernment",
    subtitle:
      "Walk through decisions, transitions, and seasons of uncertainty with steady pastoral care and accountability.",
    imageSrc: "/guidance-compass-green.png",
    imageAlt:
      "Quiet contemplative setting by water, suggesting reflection and discernment.",
  },
];

const formatCards = [
  {
    eyebrow: "Focused seasons",
    title: "Intensives & short courses",
    copy: "Compact stretches of mentoring or training—ideal for transitions, crisis points, or preparing for a new chapter of leadership or family life.",
    imageSrc: "/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg",
    imageAlt:
      "Desk with laptop, notebook, and coffee—suggesting focused study or an intensive working session.",
  },
  {
    eyebrow: "Ongoing care",
    title: "Standing mentorship",
    copy: "Regular sessions that hold space for formation over time: discipleship, marriage and parenting, ministry sustainability, and spirit-led discernment.",
    imageSrc: "/dylan-ferreira-HJmxky8Fvmo-unsplash.jpg",
    imageAlt:
      "Person at home on a video call with a laptop—suggesting regular remote mentoring sessions.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <HeroSection />

      {/* Global reach */}
      <section
        id="reach"
        className="border-y border-neutral-200 bg-neutral-50 py-14 text-neutral-900"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-[#AC8465] font-semibold uppercase tracking-[0.3em]">
            Worldwide availability
          </p>
          <h2 className="mt-3 text-center text-2xl text-[#636D51] font-semibold tracking-tight sm:text-3xl">
            Serving families and individuals across regions and time zones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Sessions are arranged to respect your location, language preferences
            where possible, and the rhythms of your household—not only a single
            city or campus.
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {reachZones.map((block) => (
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

      {/* Services */}
      <section id="services" className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#AC8465] uppercase tracking-[0.3em]">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#636D51] tracking-tight sm:text-4xl">
              How we can walk with you
            </h2>
            <p className="mt-4 text-neutral-600">
              Each engagement is shaped to your context—personal faith journey,
              family life, ministry demands, or leadership responsibility.
            </p>
          </div>
          <ServicesCardsGrid cards={serviceCards} />
        </div>
      </section>

      {/* Formats */}
      <section id="sessions" className="bg-neutral-950 py-20 text-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Formats
          </p>
          <h2 className="mt-2 text-3xl text-[#D2C2A9] font-semibold tracking-tight sm:text-4xl">
            Depth when you need it, continuity when it matters
          </h2>
          <p className="mt-4 max-w-2xl text-white">
            From intensive seasons to steady accompaniment—formats are agreed in
            your first conversation so expectations stay clear.
          </p>
          <FormatCardsGrid cards={formatCards} />
        </div>
      </section>

      {/* Training emphasis */}
      <section className="border-y border-neutral-200 bg-white py-20 text-neutral-950">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-lg lg:order-1">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/sincerely-media-dGxOgeXAXm8-unsplash.jpg"
                alt="Woman reading a book in a group setting, suggesting study and training together."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Training
            </p>
            <h2 className="mt-2 text-3xl text-[#636D51] font-semibold tracking-tight sm:text-4xl">
              Equipping that translates into daily life
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Teaching is offered so it sticks—not only information, but wisdom
              you can apply at home, at work, and in community. Content can be
              adapted for individuals, couples, or invited groups when a shared
              learning environment fits your goals.
            </p>
            <Link
              href="#next-steps"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wider underline decoration-neutral-300 underline-offset-8 hover:decoration-neutral-900"
            >
              See how to begin
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-neutral-100 py-20 text-neutral-900">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Faithful care, human pace
          </h2>
          <p className="mx-auto mt-6 text-lg leading-relaxed text-neutral-600">
            Christ-centred mentorship honours both truth and tenderness. You can
            expect respectful listening, biblical fidelity appropriate to your
            questions, and clarity about scope—including referrals when another
            kind of specialist care is the wise next step for you or your
            family..
          </p>
        </div>
      </section>

      {/* First touch / next steps */}
      <section id="next-steps" className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 px-8 py-14 text-center shadow-sm sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              First touch
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us what you are navigating
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
              Share briefly who you are, what you hope for, and any scheduling
              or geographic details. You will receive guidance on fit, possible
              formats, and sensible next steps—including how soon to expect a
              reply.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-neutral-950 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800"
            >
              Continue to contact
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-14 text-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Pneumatike
            </p>
            <p className="mt-4 max-w-md text-neutral-400">
              Pastoral mentorship, training, and guidance for individuals and
              families—offered with dependence on Christ and respect for your
              story. Reach out to explore whether this is the right season to
              work together.
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
              href="#reach"
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
          © {new Date().getFullYear()} Pneumatike. Professional pastoral
          services may be subject to local regulation; visitors are responsible
          for verifying suitability for their situation.
        </div>
      </footer>
    </>
  );
}
