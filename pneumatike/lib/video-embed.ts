export type VideoEmbed =
  | { type: "youtube"; embedUrl: string }
  | { type: "vimeo"; embedUrl: string }
  | { type: "file"; src: string }
  | { type: "unavailable" };

function youtubeId(url: URL): string | null {
  if (url.hostname === "youtu.be") {
    const id = url.pathname.slice(1).split("/")[0];
    return id || null;
  }
  if (
    url.hostname === "www.youtube.com" ||
    url.hostname === "youtube.com" ||
    url.hostname === "m.youtube.com"
  ) {
    if (url.pathname.startsWith("/embed/")) {
      return url.pathname.split("/")[2] ?? null;
    }
    if (url.pathname.startsWith("/shorts/")) {
      return url.pathname.split("/")[2] ?? null;
    }
    return url.searchParams.get("v");
  }
  return null;
}

function vimeoId(url: URL): string | null {
  if (url.hostname === "player.vimeo.com") {
    return url.pathname.split("/")[2] ?? null;
  }
  if (url.hostname === "vimeo.com" || url.hostname === "www.vimeo.com") {
    const parts = url.pathname.split("/").filter(Boolean);
    return parts[0] ?? null;
  }
  return null;
}

export function resolveVideoEmbed(videoUrl: string): VideoEmbed {
  const trimmed = videoUrl.trim();
  if (!trimmed || trimmed === "#") {
    return { type: "unavailable" };
  }

  if (/\.(mp4|webm|ogg)(\?|$)/i.test(trimmed)) {
    return { type: "file", src: trimmed };
  }

  try {
    const url = new URL(trimmed);
    const yt = youtubeId(url);
    if (yt) {
      return {
        type: "youtube",
        embedUrl: `https://www.youtube.com/embed/${yt}?autoplay=1&rel=0`,
      };
    }
    const vimeo = vimeoId(url);
    if (vimeo) {
      return {
        type: "vimeo",
        embedUrl: `https://player.vimeo.com/video/${vimeo}?autoplay=1`,
      };
    }
  } catch {
    return { type: "unavailable" };
  }

  return { type: "unavailable" };
}
