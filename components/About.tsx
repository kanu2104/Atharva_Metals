"use client";

import { motion } from "framer-motion";
import { Boxes, Factory, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/ui/counter";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";
import { HeadcountChart } from "@/components/HeadcountChart";
import { VideoCard } from "@/components/VideoCard";
import company from "@/data/company.json";

export function About() {
  return (
    <section id="about" className="section-pad relative bg-white">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Company Overview"
          title="A One-Stop Manufacturing Partner"
          description="In the business of precision metal stampings and assemblies since 2019 — engineering excellence from concept to consignment for the world's leading OEMs."
        />

        {/* Stats — light glassmorphism */}
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

        {/* Intro + video */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <VideoCard />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl glass-strong px-6 py-5 sm:block">
                <div className="flex items-center gap-3">
                  <Factory className="size-8 text-accent" />
                  <div>
                    <div className="font-display text-2xl font-bold text-foreground">
                      1,90,000+
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted">
                      Sq. Ft. Group Area
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="flex flex-col gap-5">
              {company.introduction.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  {p}
                </p>
              ))}
              <div className="mt-2 rounded-2xl border border-accent/20 bg-accent/[0.05] p-6">
                <div className="flex items-center gap-2 text-accent">
                  <Target className="size-5" />
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
                    Quality Policy
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {company.introduction.qualityPolicy}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Headcount chart */}
        <div className="mt-20">
          <HeadcountChart />
        </div>

        {/* Group companies */}
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
