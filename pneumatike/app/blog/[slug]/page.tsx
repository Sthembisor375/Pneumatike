import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { blogArticles, getArticleBySlug } from "@/lib/blog-articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article — Pneumatike" };

  return {
    title: `${article.title} — Pneumatike`,
    description: article.excerpt,
  };
}

function formatPublishedDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-neutral-50 text-neutral-950">
        <article>
          <div className="relative aspect-[21/9] w-full max-h-[420px] overflow-hidden bg-neutral-900">
            <Image
              src={article.imageSrc}
              alt={article.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/25 to-transparent"
              aria-hidden
            />
          </div>

          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#AC8465]">
              {article.category}
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-[#636D51] sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
              <time dateTime={article.publishedAt}>
                {formatPublishedDate(article.publishedAt)}
              </time>
              <span aria-hidden>·</span>
              <span>{article.readTime}</span>
            </p>
            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              {article.excerpt}
            </p>
            <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-base leading-relaxed text-neutral-700">
              {article.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-14 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
              <Link
                href="/blog"
                className="font-medium text-neutral-800 underline-offset-4 hover:underline"
              >
                ← All articles
              </Link>
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
