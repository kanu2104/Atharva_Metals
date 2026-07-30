"use client";

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
  title = "Atharva Metals Corporate Overview",
  subtitle = "Company Film",
  className = "",
}: VideoCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-[0_30px_60px_-30px_rgba(15,61,94,0.4)] ${className}`}
    >
      <div className="relative aspect-[4/3] w-full bg-black sm:aspect-video">
        <video
          className="h-full w-full object-contain sm:object-cover"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          controlsList="nodownload"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="border-t border-white/10 bg-[#0f3d5e] px-5 py-4 sm:px-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/80">
          {subtitle}
        </p>
        <h3 className="mt-1 font-display text-base font-bold text-white sm:text-lg">
          {title}
        </h3>
      </div>
    </div>
  );
}
