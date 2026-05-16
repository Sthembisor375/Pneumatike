"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { VideoPlayerModal } from "./VideoPlayerModal";

export type VideoCategory =
  | "Mentorship"
  | "Teaching"
  | "Family"
  | "Discernment";

export type LibraryVideo = {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  duration: string;
  publishedAt: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  videoUrl: string;
  featured?: boolean;
};

export type VideoLibraryProps = {
  eyebrow: string;
  title: string;
  intro: string;
  videos: LibraryVideo[];
  /** When set, this video is featured instead of the first `featured: true` or first item. */
  featuredId?: string;
};

const ALL_CATEGORY = "All" as const;
type FilterCategory = typeof ALL_CATEGORY | VideoCategory;

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11.04-7.36a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

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

function resolveFeatured(
  videos: LibraryVideo[],
  featuredId?: string,
): LibraryVideo | undefined {
  if (!videos.length) return undefined;
  if (featuredId) {
    return videos.find((v) => v.id === featuredId) ?? videos[0];
  }
  return videos.find((v) => v.featured) ?? videos[0];
}

function FeaturedVideoCard({
  video,
  onOpen,
}: {
  video: LibraryVideo;
  onOpen: (video: LibraryVideo) => void;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#323729] shadow-sm ring-1 ring-white/[0.04] transition-shadow hover:shadow-md">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 lg:aspect-auto lg:min-h-[320px]">
          <Image
            src={video.thumbnailSrc}
            alt={video.thumbnailAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
            aria-hidden
          />
          <button
            type="button"
            onClick={() => onOpen(video)}
            className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 bg-transparent p-0"
            aria-label={`Watch featured: ${video.title}`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#636D51] shadow-lg transition group-hover:scale-105">
              <PlayIcon className="ml-1 h-7 w-7" />
            </span>
          </button>
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#636D51] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
            Featured
          </span>
        </div>
        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2C2A9]">
              {video.category}
            </span>
            <span className="text-xs text-neutral-400" aria-hidden>
              ·
            </span>
            <span className="text-xs text-neutral-200">{video.duration}</span>
            <span className="text-xs text-neutral-300" aria-hidden>
              ·
            </span>
            <time
              dateTime={video.publishedAt}
              className="text-xs text-neutral-200"
            >
              {formatPublishedDate(video.publishedAt)}
            </time>
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#D2C2A9] sm:text-3xl">
            {video.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">
            {video.description}
          </p>
          <button
            type="button"
            onClick={() => onOpen(video)}
            className="mt-8 inline-flex w-fit cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-sm font-semibold uppercase tracking-wider text-white underline decoration-white/30 underline-offset-8 transition hover:decoration-white"
          >
            Watch episode
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function VideoCard({
  video,
  onOpen,
}: {
  video: LibraryVideo;
  onOpen: (video: LibraryVideo) => void;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-sm transition-[border-color,box-shadow] hover:border-neutral-300 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
        <Image
          src={video.thumbnailSrc}
          alt={video.thumbnailAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          aria-hidden
        />
        <button
          type="button"
          onClick={() => onOpen(video)}
          className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          aria-label={`Watch: ${video.title}`}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#636D51] shadow-md">
            <PlayIcon className="ml-0.5 h-5 w-5" />
          </span>
        </button>
        <span className="absolute bottom-3 right-3 rounded-md bg-black/55 px-2 py-0.5 text-[0.65rem] font-medium text-white backdrop-blur-sm">
          {video.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#AC8465]">
          {video.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-neutral-950">
          {video.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-600">
          {video.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <time
            dateTime={video.publishedAt}
            className="text-xs text-neutral-500"
          >
            {formatPublishedDate(video.publishedAt)}
          </time>
          <button
            type="button"
            onClick={() => onOpen(video)}
            className="cursor-pointer border-0 bg-transparent p-0 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:underline"
          >
            Watch →
          </button>
        </div>
      </div>
    </article>
  );
}

export function VideoLibrary({
  eyebrow,
  title,
  intro,
  videos,
  featuredId,
}: VideoLibraryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FilterCategory>(ALL_CATEGORY);
  const [activeVideo, setActiveVideo] = useState<LibraryVideo | null>(null);

  const featured = useMemo(
    () => resolveFeatured(videos, featuredId),
    [videos, featuredId],
  );

  const categories = useMemo(() => {
    const unique = [...new Set(videos.map((v) => v.category))].sort();
    return [ALL_CATEGORY, ...unique] as FilterCategory[];
  }, [videos]);

  const gridVideos = useMemo(() => {
    const pool = featured ? videos.filter((v) => v.id !== featured.id) : videos;

    const normalized = query.trim().toLowerCase();

    return pool.filter((video) => {
      const matchesCategory =
        category === ALL_CATEGORY || video.category === category;
      const matchesSearch =
        !normalized ||
        video.title.toLowerCase().includes(normalized) ||
        video.description.toLowerCase().includes(normalized) ||
        video.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesSearch;
    });
  }, [videos, featured, query, category]);

  return (
    <>
      <VideoPlayerModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      <div className="mx-auto max-w-7xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#AC8465]">
        {eyebrow}
      </p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight text-[#636D51] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
        {intro}
      </p>

      {featured ? (
        <div className="mt-12">
          <FeaturedVideoCard video={featured} onOpen={setActiveVideo} />
        </div>
      ) : null}

      <div className="mt-14 flex flex-col gap-6 border-t border-neutral-200 pt-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <label htmlFor="video-search" className="sr-only">
            Search videos
          </label>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            id="video-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, topic, or category…"
            className="w-full rounded-full border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm text-neutral-900 shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-[#636D51]/40 focus:ring-2 focus:ring-[#636D51]/15"
          />
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by category"
        >
          {categories.map((cat) => {
            const isActive = category === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                  isActive
                    ? "border-[#636D51] bg-[#636D51] text-white shadow-sm"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {gridVideos.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridVideos.map((video) => (
            <VideoCard key={video.id} video={video} onOpen={setActiveVideo} />
          ))}
        </div>
      ) : (
        <p
          className="mt-12 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-6 py-14 text-center text-neutral-600"
          role="status"
        >
          No videos match your search. Try another keyword or category.
        </p>
      )}

      <p className="mt-8 text-center text-sm text-neutral-500">
        Showing {gridVideos.length}{" "}
        {gridVideos.length === 1 ? "episode" : "episodes"}
        {category !== ALL_CATEGORY ? ` in ${category}` : ""}
        {query.trim() ? ` for “${query.trim()}”` : ""}
      </p>
      </div>
    </>
  );
}
