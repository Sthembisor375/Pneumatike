import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLibrary } from "../components/ArticleLibrary";
import { SiteHeader } from "../components/SiteHeader";
import { blogArticles } from "@/lib/blog-articles";

export const metadata: Metadata = {
  title: "Blog — Pneumatike",
  description:
    "Essays and reflections on mentorship, family life, teaching, and discernment from Pneumatike.",
};

const libraryContent = {
  eyebrow: "Blog",
  title: "Words for the journey",
  intro:
    "Read pastoral reflections on formation, household life, and faithful decision-making. Use search and filters to browse by topic—new writing will be added here over time.",
  articles: blogArticles,
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-neutral-50 px-4 py-10 text-neutral-950 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <ArticleLibrary {...libraryContent} />
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
