import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { VideoLibrary, type LibraryVideo } from "../components/VideoLibrary";

export const metadata: Metadata = {
  title: "Podcast — Pneumatike",
  description:
    "Watch teachings, conversations, and pastoral reflections from Pneumatike—mentorship and guidance for individuals and families.",
};

const podcastVideos: LibraryVideo[] = [
  {
    id: "welcome-season",
    title: "A welcome for whatever season you are in",
    description:
      "An introduction to Pneumatike’s posture toward pastoral care: unhurried listening, Scripture-shaped wisdom, and accompaniment that honours your story without rushing toward fixes.",
    category: "Mentorship",
    duration: "18 min",
    publishedAt: "2026-03-12",
    thumbnailSrc: "/iwaria-inc-Q6KzWe-lq9Y-unsplash.jpg",
    thumbnailAlt: "Warm outdoor gathering suggesting community and welcome.",
    videoUrl: "https://youtu.be/FsztuzyXdhY?si=d4qS6lGJDljNl1Ct",
    featured: true,
  },
  {
    id: "discernment-conversation",
    title: "Spirit-led discernment in demanding weeks",
    description:
      "How to hold decisions, transitions, and uncertainty before the Lord—with practical rhythms for prayer, counsel, and wise next steps.",
    category: "Discernment",
    duration: "24 min",
    publishedAt: "2026-02-28",
    thumbnailSrc: "/guidance-compass-green.png",
    thumbnailAlt: "Contemplative scene suggesting reflection and direction.",
    videoUrl: "https://youtu.be/FsztuzyXdhY?si=d4qS6lGJDljNl1Ct12",
  },
  {
    id: "family-rhythms",
    title: "Family rhythms when schedules overflow",
    description:
      "Encouragement for households navigating busy seasons: grace, boundaries, and small habits that keep connection and faithfulness in view.",
    category: "Family",
    duration: "21 min",
    publishedAt: "2026-02-14",
    thumbnailSrc: "/young-black-family-green-nature.png",
    thumbnailAlt: "Family outdoors, suggesting connection and rest.",
    videoUrl: "#",
  },
  {
    id: "teaching-that-sticks",
    title: "Teaching that translates into daily obedience",
    description:
      "Why formation matters more than information—and how short, focused teaching blocks can serve individuals and invited groups alike.",
    category: "Teaching",
    duration: "16 min",
    publishedAt: "2026-01-30",
    thumbnailSrc: "/sincerely-media-dGxOgeXAXm8-unsplash.jpg",
    thumbnailAlt: "Group study setting with books and conversation.",
    videoUrl: "#",
  },
  {
    id: "mentorship-distance",
    title: "Mentorship across distance without losing presence",
    description:
      "Reflections on video sessions, follow-up between meetings, and building trust when geography and time zones stretch the relationship.",
    category: "Mentorship",
    duration: "19 min",
    publishedAt: "2026-01-15",
    thumbnailSrc: "/dylan-ferreira-HJmxky8Fvmo-unsplash.jpg",
    thumbnailAlt:
      "Person on a video call at home, suggesting remote mentoring.",
    videoUrl: "#",
  },
  {
    id: "marriage-renewal",
    title: "When marriage needs renewal, not only repair",
    description:
      "Pastoral perspective on seasons of strain: listening well, naming hope, and discerning whether intensive or ongoing accompaniment fits.",
    category: "Family",
    duration: "22 min",
    publishedAt: "2025-12-20",
    thumbnailSrc: "/pexels-pavel-danilyuk-8205092.jpg",
    thumbnailAlt: "Couple in quiet conversation, suggesting partnership.",
    videoUrl: "#",
  },
  {
    id: "leadership-fatigue",
    title: "Leadership fatigue and sustainable ministry",
    description:
      "For those carrying responsibility in church or community: boundaries, Sabbath, and the humility to ask for help before burnout hardens.",
    category: "Mentorship",
    duration: "26 min",
    publishedAt: "2025-12-05",
    thumbnailSrc: "/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg",
    thumbnailAlt: "Desk with notebook and coffee, suggesting focused work.",
    videoUrl: "#",
  },
  {
    id: "doctrine-for-life",
    title: "Doctrine for life, not debate for its own sake",
    description:
      "A teaching conversation on holding truth and tenderness together—so biblical fidelity serves love in the home, workplace, and congregation.",
    category: "Teaching",
    duration: "20 min",
    publishedAt: "2025-11-18",
    thumbnailSrc: "/pexels-leonardodourado-13011294.jpg",
    thumbnailAlt: "Person studying with notes, suggesting learning.",
    videoUrl: "#",
  },
  {
    id: "crossroads-prayer",
    title: "Prayer at the crossroads",
    description:
      "Guided reflection for decision points: naming fears, desires, and constraints before God—and inviting wise counsel without surrendering agency.",
    category: "Discernment",
    duration: "14 min",
    publishedAt: "2025-11-02",
    thumbnailSrc: "/lawrence-crayton-cVb7BGt9FiQ-unsplash.jpg",
    thumbnailAlt: "Soft natural light through foliage, suggesting stillness.",
    videoUrl: "#",
  },
];

const libraryContent = {
  eyebrow: "Podcast",
  title: "Teachings & conversations for the journey",
  intro:
    "Browse episodes on mentorship, family life, teaching, and discernment. New conversations will be added here as the library grows—use search and filters to find what fits your season.",
  videos: podcastVideos,
};

export default function PodcastPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-neutral-50 px-4 py-16 text-neutral-950 sm:px-6 lg:px-8 lg:py-20">
        <VideoLibrary {...libraryContent} />
        <p className="mx-auto mt-16 max-w-7xl text-center text-sm text-neutral-500">
          <Link
            href="/"
            className="font-medium text-neutral-800 underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </main>
    </>
  );
}
