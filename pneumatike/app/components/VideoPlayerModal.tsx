"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import { resolveVideoEmbed } from "@/lib/video-embed";
import type { LibraryVideo } from "./VideoLibrary";

type VideoPlayerModalProps = {
  video: LibraryVideo | null;
  onClose: () => void;
};

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function VideoPlayerModal({ video, onClose }: VideoPlayerModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!video) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [video, onClose]);

  if (!video) return null;

  const embed = resolveVideoEmbed(video.videoUrl);

  return (
    <div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
        role="presentation"
        onClick={onClose}
      >
        <div
          className="absolute inset-0 bg-neutral-950/75 backdrop-blur-sm"
          aria-hidden
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#1e2118] shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#AC8465]">
                {video.category}
              </p>
              <h2
                id={titleId}
                className="mt-1 pr-4 text-lg font-semibold tracking-tight text-[#D2C2A9] sm:text-xl"
              >
                {video.title}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full border border-white/15 p-2 text-neutral-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              aria-label="Close video"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="relative aspect-video w-full bg-neutral-950">
            {embed.type === "youtube" || embed.type === "vimeo" ? (
              <iframe
                src={embed.embedUrl}
                title={video.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : null}

            {embed.type === "file" ? (
              <video
                src={embed.src}
                controls
                autoPlay
                className="absolute inset-0 h-full w-full"
                playsInline
              >
                <track kind="captions" />
              </video>
            ) : null}

            {embed.type === "unavailable" ? (
              <div className="absolute inset-0 flex flex-col">
                  <Image
                    src={video.thumbnailSrc}
                    alt=""
                    fill
                    className="object-cover opacity-40"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                  <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2C2A9]">
                      Coming soon
                    </p>
                    <p className="max-w-sm text-sm text-neutral-400">
                      This episode is not available to play yet. Check back
                      later or contact us if you are looking for something
                      specific.
                    </p>
                  </div>
                </div>
            ) : null}
          </div>

          <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-neutral-400 sm:px-6">
            {video.description}
          </p>
        </div>
      </div>
  );
}
