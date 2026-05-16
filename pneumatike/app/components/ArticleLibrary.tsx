"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ArticleCategory, LibraryArticle } from "@/lib/blog-articles";

export type { ArticleCategory, LibraryArticle };

export type ArticleLibraryProps = {
  eyebrow: string;
  title: string;
  intro: string;
  articles: LibraryArticle[];
  featuredId?: string;
};

const ALL_CATEGORY = "All" as const;
type FilterCategory = typeof ALL_CATEGORY | ArticleCategory;

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" />
    </svg>
  );
}

function formatPublishedDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getDateStamp(isoDate: string): { day: string; month: string } {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return { day: "—", month: "" };
  }
  return {
    day: date.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: date.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
  };
}

function resolveFeatured(
  articles: LibraryArticle[],
  featuredId?: string,
): LibraryArticle | undefined {
  if (!articles.length) return undefined;
  if (featuredId) {
    return articles.find((a) => a.id === featuredId) ?? articles[0];
  }
  return articles.find((a) => a.featured) ?? articles[0];
}

function articleHref(slug: string) {
  return `/blog/${slug}`;
}

function FeaturedArticleCard({ article }: { article: LibraryArticle }) {
  const href = articleHref(article.slug);

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_-16px_rgba(42,48,38,0.2)] ring-1 ring-neutral-200/80 sm:rounded-3xl sm:bg-[#636D51] sm:shadow-[0_20px_50px_-12px_rgba(42,48,38,0.35)] sm:ring-0">
      {/* Mobile: stacked image + copy (readable, no cramped overlay) */}
      <div className="sm:hidden">
        <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-neutral-900">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#636D51] px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white">
            Editor&apos;s pick
          </span>
        </Link>
        <div className="p-5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#AC8465]">
            {article.category}
          </p>
          <h2 className="mt-2 font-serif text-2xl leading-snug tracking-tight text-[#2a3026]">
            <Link href={href} className="hover:text-[#636D51]">
              {article.title}
            </Link>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            {article.excerpt}
          </p>
          <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-[0.65rem] uppercase tracking-[0.12em] text-neutral-500">
            <span>{article.readTime}</span>
            <span aria-hidden>·</span>
            <time dateTime={article.publishedAt}>
              {formatPublishedDate(article.publishedAt)}
            </time>
          </p>
          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#636D51]"
          >
            Continue reading
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* sm+: cinematic overlay hero */}
      <Link
        href={href}
        className="relative hidden min-h-[320px] sm:block sm:aspect-[21/9] lg:min-h-[360px]"
      >
        <Image
          src={article.imageSrc}
          alt={article.imageAlt}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a3026]/95 via-[#2a3026]/50 to-[#2a3026]/15"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 z-10 p-8 lg:p-12">
            <p className="inline-flex items-center gap-2 border-b border-[#D2C2A9]/60 pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#D2C2A9] lg:tracking-[0.35em]">
              Editor&apos;s pick
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
              {article.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-200/95 lg:text-lg">
              {article.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.65rem] uppercase tracking-[0.15em] text-neutral-300 sm:text-xs sm:tracking-[0.18em]">
              <span>{article.category}</span>
              <span aria-hidden className="text-neutral-500">
                ·
              </span>
              <span>{article.readTime}</span>
              <span aria-hidden className="text-neutral-500">
                ·
              </span>
              <time dateTime={article.publishedAt}>
                {formatPublishedDate(article.publishedAt)}
              </time>
            </div>
            <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition group-hover:gap-4">
              Continue reading
              <span
                className="inline-block h-px w-8 bg-[#AC8465] transition-all group-hover:w-12"
                aria-hidden
              />
            </span>
        </div>
      </Link>
    </article>
  );
}

function ArticleListCard({ article }: { article: LibraryArticle }) {
  const href = articleHref(article.slug);
  const stamp = getDateStamp(article.publishedAt);

  return (
    <article className="group relative border-l-4 border-transparent bg-white transition-[border-color,box-shadow] hover:border-[#AC8465] hover:shadow-[0_8px_30px_-12px_rgba(99,109,81,0.25)] active:border-[#AC8465]/80">
      <Link href={href} className="block p-4 sm:p-0">
        {/* Mobile: vertical card */}
        <div className="flex flex-col gap-4 sm:hidden">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
            <Image
              src={article.imageSrc}
              alt={article.imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#AC8465]">
              <span>{article.category}</span>
              <span className="text-neutral-300" aria-hidden>
                ·
              </span>
              <time dateTime={article.publishedAt} className="text-neutral-500">
                {formatPublishedDate(article.publishedAt)}
              </time>
            </p>
            <h3 className="mt-2 font-serif text-xl leading-snug tracking-tight text-[#2a3026]">
              {article.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
              {article.excerpt}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-neutral-500">
              {article.readTime}
            </p>
          </div>
        </div>

        {/* sm+: horizontal row */}
        <div className="hidden gap-5 p-5 sm:flex sm:gap-6 sm:p-6 lg:items-center">
          <div className="flex w-12 shrink-0 flex-col items-center border-r border-neutral-100 pr-4 text-center sm:w-14 sm:pr-5">
            <span className="font-serif text-2xl leading-none text-[#636D51] sm:text-3xl">
              {stamp.day}
            </span>
            <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.18em] text-[#AC8465] sm:text-[0.6rem] sm:tracking-[0.2em]">
              {stamp.month}
            </span>
          </div>
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:h-28 sm:w-28">
            <Image
              src={article.imageSrc}
              alt={article.imageAlt}
              fill
              sizes="(max-width: 640px) 80px, 112px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#AC8465]">
              {article.category}
            </span>
            <h3 className="mt-2 font-serif text-xl leading-snug tracking-tight text-[#2a3026] transition group-hover:text-[#636D51] sm:text-2xl">
              {article.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600">
              {article.excerpt}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-neutral-500">
              {article.readTime}
              <span className="mx-2 text-neutral-300" aria-hidden>
                ·
              </span>
              <time dateTime={article.publishedAt}>
                {formatPublishedDate(article.publishedAt)}
              </time>
            </p>
          </div>
          <span
            className="hidden shrink-0 self-center text-lg text-[#636D51] opacity-0 transition group-hover:opacity-100 lg:inline"
            aria-hidden
          >
            →
          </span>
        </div>
      </Link>
    </article>
  );
}

export function ArticleLibrary({
  eyebrow,
  title,
  intro,
  articles,
  featuredId,
}: ArticleLibraryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FilterCategory>(ALL_CATEGORY);

  const featured = useMemo(
    () => resolveFeatured(articles, featuredId),
    [articles, featuredId],
  );

  const categories = useMemo(() => {
    const unique = [...new Set(articles.map((a) => a.category))].sort();
    return [ALL_CATEGORY, ...unique] as FilterCategory[];
  }, [articles]);

  const listArticles = useMemo(() => {
    const pool = featured
      ? articles.filter((a) => a.id !== featured.id)
      : articles;

    const normalized = query.trim().toLowerCase();

    return pool.filter((article) => {
      const matchesCategory =
        category === ALL_CATEGORY || article.category === category;
      const matchesSearch =
        !normalized ||
        article.title.toLowerCase().includes(normalized) ||
        article.excerpt.toLowerCase().includes(normalized) ||
        article.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesSearch;
    });
  }, [articles, featured, query, category]);

  return (
    <div className="mx-auto w-full max-w-6xl min-w-0">
      <header className="border-b border-[#636D51]/15 pb-8 sm:pb-10">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#AC8465] sm:text-xs sm:tracking-[0.35em]">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-3xl leading-[1.12] tracking-tight text-[#2a3026] sm:mt-4 sm:text-4xl sm:leading-[1.1] lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg">
          {intro}
        </p>
      </header>

      {featured ? (
        <div className="mt-8 sm:mt-12 lg:mt-14">
          <FeaturedArticleCard article={featured} />
        </div>
      ) : null}

      <div className="mt-8 overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm sm:mt-12 sm:rounded-2xl lg:mt-14">
        <div className="border-b border-neutral-100 bg-[#faf9f7]">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="px-4 py-3 sm:px-6 sm:py-4 lg:flex-1 lg:border-r lg:border-neutral-200">
              <div className="relative">
                <label htmlFor="article-search" className="sr-only">
                  Search articles
                </label>
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                <input
                  id="article-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search essays…"
                  className="w-full min-w-0 rounded-lg border border-neutral-200 bg-white py-3 pl-10 pr-3 text-base text-neutral-900 shadow-sm outline-none placeholder:text-neutral-400 focus:border-[#636D51]/40 focus:ring-2 focus:ring-[#636D51]/15 sm:border-0 sm:bg-transparent sm:py-2.5 sm:text-sm sm:shadow-none sm:focus:ring-0"
                />
              </div>
          </div>

          <div
            className="border-t border-neutral-200/80 lg:flex-1 lg:border-t-0"
            role="tablist"
            aria-label="Filter by category"
          >
            <div className="-mx-px flex gap-0.5 overflow-x-auto overscroll-x-contain px-3 pb-px [-webkit-overflow-scrolling:touch] sm:px-4 lg:flex-wrap lg:overflow-visible lg:px-6 lg:pb-0">
              {categories.map((cat) => {
                const isActive = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setCategory(cat)}
                    className={`shrink-0 snap-start border-b-2 px-3 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.12em] transition sm:py-2.5 sm:text-xs sm:tracking-[0.14em] ${
                      isActive
                        ? "border-[#636D51] text-[#636D51]"
                        : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-b border-neutral-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
            {listArticles.length}{" "}
            {listArticles.length === 1 ? "essay" : "essays"}
            {category !== ALL_CATEGORY ? ` · ${category}` : ""}
          </p>
          {query.trim() ? (
            <p className="text-xs text-neutral-400 sm:max-w-[50%] sm:truncate sm:text-right">
              Matching &ldquo;{query.trim()}&rdquo;
            </p>
          ) : null}
        </div>

        {listArticles.length > 0 ? (
          <div className="divide-y divide-neutral-100">
            {listArticles.map((article) => (
              <ArticleListCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p
            className="px-4 py-12 text-center text-sm leading-relaxed text-neutral-600 sm:px-6 sm:py-16"
            role="status"
          >
            No articles match your search. Try another keyword or category.
          </p>
        )}
      </div>
    </div>
  );
}
