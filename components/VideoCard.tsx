"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import company from "@/data/company.json";

type VideoCardProps = {
  poster?: string;
  videoSrc?: string;
  title?: string;
  subtitle?: string;
  className?: string;
};

export function VideoCard({
  poster = "/images/hero/hero-factory.jpg",
  videoSrc = "/videos/corporate-overview.mp4",
  title = `${company.shortName} Corporate Overview`,
  subtitle = "Company Film",
  className = "",
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-[0_30px_60px_-30px_rgba(15,61,94,0.4)] ${className}`}
    >
      <div className="relative aspect-[4/3] w-full sm:aspect-video">
        {playing ? (
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
            poster={poster}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 h-full w-full"
            aria-label="Play company film"
          >
            <Image
              src={poster}
              alt="Atharva Metals company film preview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d5e]/80 via-[#0f3d5e]/25 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-accent shadow-[0_12px_40px_-8px_rgba(0,0,0,0.45)] sm:h-20 sm:w-20"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
                <Play className="relative ml-1 size-7 fill-accent sm:size-8" />
              </motion.span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-100/80">
                {subtitle}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
                {title}
              </h3>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
