"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cloudName = "dqwzddm94";

const videos = [
  {
    title: "Mango",
    publicId: "Mango_spinning_in_swirling_juice_202609080209_zytisd",
  },
  {
    title: "Kiwi",
    publicId: "Kiwi_spinning_with_swirling_juice_202609080209_f6s7u8",
  },
  {
    title: "Strawberry",
    publicId: "Strawberry_spinning_with_juice_s__202609080209_h5albn",
  },
  {
    title: "Red apple",
    publicId: "Red_apple_spinning_with_juice_202609080209_pnzv5y",
  },
];

const videoSrc = (publicId: string) =>
  `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.mp4`;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeVideo = videos[activeIndex];

  const goToPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + videos.length) % videos.length);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % videos.length);
  }, []);

  return (
    <section
      aria-label="Featured fruit videos"
      aria-roledescription="carousel"
      tabIndex={0}
      className="hero-video-slider relative w-full touch-pan-y overflow-hidden bg-black outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goToPrevious();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          goToNext();
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const startX = touchStartX.current;
        const endX = event.changedTouches[0]?.clientX;
        touchStartX.current = null;

        if (startX === null || endX === undefined) return;

        const swipeDistance = endX - startX;
        if (Math.abs(swipeDistance) < 48) return;

        if (swipeDistance > 0) {
          goToPrevious();
        } else {
          goToNext();
        }
      }}
    >
      <video
        key={activeVideo.publicId}
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        aria-label={`${activeVideo.title} video`}
        onEnded={goToNext}
        className="hero-video-frame pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={videoSrc(activeVideo.publicId)} type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15"
      />

      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Previous video"
        className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/45 text-white shadow-lg backdrop-blur-md transition duration-200 hover:scale-105 hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:left-6 sm:size-12 lg:left-8 lg:size-14"
      >
        <ChevronLeft aria-hidden="true" className="size-5 sm:size-6 lg:size-7" strokeWidth={2.25} />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next video"
        className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/45 text-white shadow-lg backdrop-blur-md transition duration-200 hover:scale-105 hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:right-6 sm:size-12 lg:right-8 lg:size-14"
      >
        <ChevronRight aria-hidden="true" className="size-5 sm:size-6 lg:size-7" strokeWidth={2.25} />
      </button>
    </section>
  );
}
