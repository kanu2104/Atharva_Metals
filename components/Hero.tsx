"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import company from "@/data/company.json";

const stats = company.heroHighlights;

const fadeLeft = (delay: number) => ({
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.75,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  },
});

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-start overflow-hidden bg-[#0f3d5e] pt-[calc(4.5rem+env(safe-area-inset-top))] sm:h-screen sm:items-center sm:pt-0"
    >
      {/* Background image — slow zoom in */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/hero-factory.jpg"
          alt=""
          fill
          priority
          aria-hidden
          className="object-cover object-center sm:object-[65%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,34,74,0.85) 0%, rgba(15,61,94,0.65) 45%, rgba(15,61,94,0.25) 100%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-6 sm:px-8 sm:pb-16 sm:pt-28 lg:pt-32">
        <div className="max-w-4xl">
          {/* Top small text */}
          <motion.p
            {...fadeLeft(0.1)}
            className="max-w-full text-sm font-medium uppercase tracking-[0.2em] text-[#60a5fa] sm:text-base sm:tracking-[0.35em]"
          >
            {company.heroTagline}
          </motion.p>

          {/* Main title — starts below fixed navbar on mobile */}
          <motion.h1
            {...fadeLeft(0.2)}
            className="mt-4 font-display leading-[0.95] tracking-tight sm:mt-6"
          >
            <span className="block text-[clamp(2.35rem,10.5vw,5.625rem)] font-extrabold text-white">
              ATHARVA
            </span>
            <span className="block text-[clamp(2.35rem,10.5vw,5.625rem)] font-extrabold text-[#3b82f6]">
              METALS
            </span>
            <span className="mt-2 block text-[clamp(0.9rem,3.2vw,1.75rem)] font-semibold uppercase tracking-wide text-white">
              &amp; Engineering Pvt. Ltd.
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...fadeLeft(0.35)}
            className="mt-8 max-w-2xl text-xl font-normal leading-relaxed text-[#e2e8f0] sm:text-2xl"
          >
            Precision Metal Stampings, Assemblies &amp; Engineering Solutions
            {" "}for a Stronger Tomorrow.
          </motion.p>

          {/* Stats — glass cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.55 + index * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98] as const,
                }}
                whileHover={{ y: -8 }}
                className="hero-stat-card rounded-[20px] px-5 py-5 transition-[transform,background,border-color] duration-300 hover:bg-white/[0.12]"
              >
                <div className="font-display text-2xl font-bold text-white sm:text-[1.65rem]">
                  {item.value}
                </div>
                <div className="mt-1 text-sm font-medium leading-snug text-[#e2e8f0]/90">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              delay: 1.05,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-[14px] bg-[#2563eb] px-8 py-[18px] text-base font-semibold text-white shadow-[0_12px_40px_-12px_rgba(37,99,235,0.65)] transition-colors duration-300 hover:bg-[#3b82f6]"
            >
              Explore Our Capabilities
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#company-film"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("company-film")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }}
              className="inline-flex items-center gap-2 rounded-[14px] border border-white/30 bg-white/10 px-6 py-[18px] text-base font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
            >
              Watch Company Film
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
