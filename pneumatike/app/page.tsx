import { AboutSection } from "./components/AboutSection";
import { FirstTouchCtaSection } from "./components/FirstTouchCtaSection";
import { type FormatCardItem } from "./components/FormatCardsGrid";
import { FormatsSection } from "./components/FormatsSection";
import {
  GlobalReachSection,
  type ReachZone,
} from "./components/GlobalReachSection";
import { HeroSection } from "./components/HeroSection";
import { type ServiceCardItem } from "./components/ServicesCardsGrid";
import { ServicesSection } from "./components/ServicesSection";
import { SiteHeader } from "./components/SiteHeader";
import { SplitFeatureSection } from "./components/SplitFeatureSection";
import { TrustStatementSection } from "./components/TrustStatementSection";

const heroContent = {
  backgroundSrc: "/iwaria-inc-Q6KzWe-lq9Y-unsplash.jpg",
  backgroundAlt: "",
  logoSrc: "/Pneumatike%20logo%20text.svg",
  logoAlt: "Pneumatike",
  logoWidth: 384,
  logoHeight: 256,
  introText:
    "Pastoral care for individuals and families—mentorship, training, and guidance for whatever season you are in. This is the first place to learn how we might work together, wherever you are in the world.",
  ctas: [
    {
      href: "/contact",
      label: "Begin a conversation",
      variant: "primary" as const,
    },
    {
      href: "#services",
      label: "Explore services",
      variant: "outline" as const,
    },
  ],
};

const aboutContent = {
  eyebrow: "About",
  title: "Presence-centred pastoral care for real life, wherever you are",
  lead: "Pneumatike exists so individuals and households can pursue formation, clarity, and hope without pretending that distance or demanding seasons make faithful care impossible.",
  visionHeading: "The vision",
  visionBody:
    "We imagine a disciplined, gentle companionship anchored in Scripture and prayer: a platform shaped around listening well, pacing with discernment, and offering teaching that bends toward obedience and joy—not quick fixes or performance. Relationships stay human; technology only serves trust, rhythm, and follow-through between conversations.",
  founderHeading: "The founder",
  founderBody:
    "This work is led by a pastor-teacher drawn to mentorship at the intersections of ministry, marriage, parenting, and leadership fatigue. Formal biography and portraits will arrive here soon; until then this space holds the conviction that Christ-shaped care should be geographically available, culturally attentive, and unhurried enough to honour your story.",
  imageSrc: "/lawrence-crayton-cVb7BGt9FiQ-unsplash.jpg",
  imageAlt:
    "Temporary placeholder photograph for the About section—warm light and organic texture.",
  imageCaption:
    "Placeholder image. Final founder photography and updated copy will replace this block.",
};

const reachZones: ReachZone[] = [
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

const globalReachContent = {
  sectionId: "reach",
  eyebrow: "Worldwide availability",
  title: "Serving families and individuals across regions and time zones",
  description:
    "Sessions are arranged to respect your location, language preferences where possible, and the rhythms of your household—not only a single city or campus.",
  zones: reachZones,
};

const serviceCards: ServiceCardItem[] = [
  {
    title: "Pastoral mentorship",
    subtitle:
      "One-to-one space to process life, leadership, and calling with Scripture-shaped wisdom and prayerful support.",
    imageSrc: "/prayer-hands-black-men-brown-green.png",
    imageAlt:
      "Two men seated outdoors having a thoughtful conversation, suggesting mentorship.",
    footerLabel: "Discuss in inquiry →",
  },
  {
    title: "Training & equipping",
    subtitle:
      "Focused teaching for individuals or small groups—doctrine that meets life, tools you can use next week.",
    imageSrc: "/pexels-leonardodourado-13011294.jpg",
    imageAlt:
      "Person studying with notes and laptop, suggesting focused learning.",
    footerLabel: "Discuss in inquiry →",
  },
  {
    title: "Family guidance",
    subtitle:
      "Help for marriages, parenting, and multigenerational dynamics rooted in grace, clarity, and healthy boundaries.",
    imageSrc: "/young-black-family-green-nature.png",
    imageAlt:
      "Family spending time together outdoors, suggesting connection and guidance.",
    footerLabel: "Discuss in inquiry →",
  },
  {
    title: "Guidance & discernment",
    subtitle:
      "Walk through decisions, transitions, and seasons of uncertainty with steady pastoral care and accountability.",
    imageSrc: "/guidance-compass-green.png",
    imageAlt:
      "Quiet contemplative setting by water, suggesting reflection and discernment.",
    footerLabel: "Discuss in inquiry →",
  },
];

const servicesSectionContent = {
  sectionId: "services",
  eyebrow: "Services",
  title: "How we can walk with you",
  intro:
    "Each engagement is shaped to your context—personal faith journey, family life, ministry demands, or leadership responsibility.",
  cards: serviceCards,
};

const formatCards: FormatCardItem[] = [
  {
    eyebrow: "Focused seasons",
    title: "Intensives & short courses",
    copy: "Compact stretches of mentoring or training—ideal for transitions, crisis points, or preparing for a new chapter of leadership or family life.",
    imageSrc: "/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg",
    imageAlt:
      "Desk with laptop, notebook, and coffee—suggesting focused study or an intensive working session.",
    ctaHref: "/contact",
    ctaLabel: "Ask about availability →",
  },
  {
    eyebrow: "Ongoing care",
    title: "Standing mentorship",
    copy: "Regular sessions that hold space for formation over time: discipleship, marriage and parenting, ministry sustainability, and spirit-led discernment.",
    imageSrc: "/dylan-ferreira-HJmxky8Fvmo-unsplash.jpg",
    imageAlt:
      "Person at home on a video call with a laptop—suggesting regular remote mentoring sessions.",
    ctaHref: "/contact",
    ctaLabel: "Ask about availability →",
  },
];

const formatsSectionContent = {
  sectionId: "sessions",
  eyebrow: "Formats",
  title: "Depth when you need it, continuity when it matters",
  intro:
    "From intensive seasons to steady accompaniment—formats are agreed in your first conversation so expectations stay clear.",
  cards: formatCards,
};

const trainingFeatureContent = {
  imageSrc: "/sincerely-media-dGxOgeXAXm8-unsplash.jpg",
  imageAlt:
    "Woman reading a book in a group setting, suggesting study and training together.",
  eyebrow: "Training",
  title: "Equipping that translates into daily life",
  body: "Teaching is offered so it sticks—not only information, but wisdom you can apply at home, at work, and in community. Content can be adapted for individuals, couples, or invited groups when a shared learning environment fits your goals.",
  link: { href: "#next-steps", label: "See how to begin" },
};

const trustContent = {
  title: "Faithful care, human pace",
  body: "Christ-centred mentorship honours both truth and tenderness. You can expect respectful listening, biblical fidelity appropriate to your questions, and clarity about scope—including referrals when another kind of specialist care is the wise next step for you or your family.",
};

const firstTouchContent = {
  sectionId: "next-steps",
  eyebrow: "First touch",
  title: "Tell us what you are navigating",
  description:
    "Share briefly who you are, what you hope for, and any scheduling or geographic details. You will receive guidance on fit, possible formats, and sensible next steps—including how soon to expect a reply.",
  cta: { href: "/contact", label: "Continue to contact" },
};

export default function Home() {
  return (
    <>
      <SiteHeader />

      <HeroSection {...heroContent} />

      <GlobalReachSection {...globalReachContent} />

      <ServicesSection {...servicesSectionContent} />

      <FormatsSection {...formatsSectionContent} />

      <SplitFeatureSection {...trainingFeatureContent} />

      <TrustStatementSection {...trustContent} />

      <AboutSection {...aboutContent} />

      <FirstTouchCtaSection {...firstTouchContent} />
    </>
  );
}
