"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { YouTubeVideo } from "@/lib/youtube";

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.4-6.5a1 1 0 0 0 0-1.7L9.53 4.65A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function VideoGallery({ videos }: { videos: YouTubeVideo[] }) {
  const [active, setActive] = useState<YouTubeVideo | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {videos.map((video) => (
          <button
            key={video.id}
            type="button"
            onClick={() => setActive(video)}
            className="group flex flex-col text-left bg-white rounded-[18px] border border-line overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-card-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          >
            <div className="relative aspect-video overflow-hidden bg-bg-soft">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-200" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-[58px] h-[58px] rounded-full bg-white/95 text-green shadow-card-md transition-transform duration-200 group-hover:scale-110">
                <PlayIcon className="w-6 h-6 translate-x-[1px]" />
              </span>
            </div>
            <div className="px-5 py-4">
              <h3 className="font-display font-semibold text-[15.5px] leading-snug text-ink line-clamp-2">
                {video.title}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-deep">
                Watch now
                <PlayIcon className="w-3 h-3" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/70 backdrop-blur-sm px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-[880px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute -top-11 right-0 grid place-items-center w-9 h-9 rounded-full bg-white/90 text-ink hover:bg-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-video overflow-hidden rounded-[18px] bg-black shadow-card-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
