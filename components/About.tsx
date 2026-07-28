"use client";

import { motion } from "framer-motion";
import { Boxes, Factory, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/ui/counter";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";
import { VideoCard } from "@/components/VideoCard";
import company from "@/data/company.json";

export function About() {
  const paragraphs = company.introduction.paragraphs;
  const intro = paragraphs[0];
  const history = paragraphs[1];
  const plantLines = paragraphs.slice(2);

  return (
    <section id="about" className="section-pad relative bg-white">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Company Overview"
          title="A One-Stop Manufacturing Partner"
          description="In the business of precision metal stampings and assemblies since 2019 — engineering excellence from concept to consignment for the world's leading OEMs."
        />

        <StaggerGroup className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {company.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="group rounded-2xl glass p-6 text-center transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="font-display text-4xl font-bold text-gradient-accent sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        <div className="mt-20 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="right">
            <div className="flex flex-col gap-6">
              <div id="company-film" className="relative mb-3 scroll-mt-24 pb-4 sm:mb-5 sm:pb-2">
                <VideoCard />
                <div className="absolute -bottom-1 -right-3 hidden rounded-2xl glass-strong px-5 py-4 sm:block">
                  <div className="flex items-center gap-3">
                    <Factory className="size-7 text-accent" />
                    <div>
                      <div className="font-display text-xl font-bold text-foreground">
                        1,90,000+
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-muted">
                        Sq. Ft. Group Area
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-[#0f3d5e] p-6 text-white shadow-[0_28px_50px_-28px_rgba(15,61,94,0.55)] sm:p-7">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                      <Target className="size-4 text-[#93c5fd]" />
                    </span>
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#93c5fd]">
                      Quality Policy
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-blue-50/95 sm:text-[15px]">
                    {company.introduction.qualityPolicy}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="flex flex-col lg:pt-1">
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                {intro}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {history}
              </p>

              <div className="mt-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Manufacturing Footprint
                </div>
                <div className="mt-4 space-y-5 border-l-2 border-accent/25 pl-5">
                  {plantLines.map((p, i) => (
                    <p
                      key={i}
                      className="relative text-sm leading-relaxed text-slate-600 sm:text-base"
                    >
                      <span className="absolute -left-[1.55rem] top-2 h-2 w-2 rounded-full bg-accent ring-4 ring-accent/15" />
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <div className="flex items-center gap-3">
              <Boxes className="size-6 text-accent" />
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                The Atharva Group
              </h3>
            </div>
            <p className="mt-2 max-w-2xl text-muted">
              Four integrated businesses delivering metals, polymers, corrugation and
              EPS packaging under one umbrella.
            </p>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.groupCompanies.map((c) => (
              <motion.div
                key={c.name}
                variants={staggerItem}
                className="group flex flex-col rounded-2xl card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_24px_44px_-26px_rgba(37,99,235,0.5)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Since {c.since}
                </span>
                <h4 className="mt-3 font-display text-lg font-bold leading-tight text-foreground">
                  {c.name}
                </h4>
                <span className="mt-1 text-sm font-medium text-slate-600">{c.focus}</span>
                <p className="mt-4 text-sm leading-relaxed text-muted">{c.detail}</p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-5 text-xs text-muted">
                  <span className="rounded-full bg-muted-bg px-3 py-1 font-medium text-accent">
                    {c.area}
                  </span>
                  <span>{c.location}</span>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
