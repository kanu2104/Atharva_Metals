"use client";

import { motion } from "framer-motion";
import { Quote, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/ui/counter";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";
import company from "@/data/company.json";

const { salesGrowth, journey } = company;
const maxValue = Math.max(...salesGrowth.series.map((s) => s.value));

export function Growth() {
  return (
    <section id="growth" className="section-pad relative bg-muted-bg">
      <div className="absolute inset-x-0 top-0 h-px divider-gradient" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Growth & Journey"
          title="A Trajectory of Accelerating Growth"
          description="From a single press shop in 2019 to a multi-plant supplier for global OEMs — our metals business has grown nearly 8× in seven years."
        />

        {/* Sales growth chart */}
        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl card p-6 sm:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <TrendingUp className="size-5" />
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
                    {salesGrowth.title}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{salesGrowth.note}</p>
              </div>
            </div>

            {/* Bars */}
            <div className="mt-10 flex h-64 items-end justify-between gap-2 sm:gap-4">
              {salesGrowth.series.map((s, i) => (
                <div
                  key={s.year}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                >
                  <div className="flex w-full flex-1 items-end justify-center">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(s.value / maxValue) * 100}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className={`relative w-full max-w-[44px] rounded-t-lg ${
                        s.projected
                          ? "bg-gradient-to-t from-accent/40 to-accent/70 ring-1 ring-inset ring-accent/50"
                          : "bg-gradient-to-t from-[#0f3d5e] to-accent"
                      }`}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-foreground">
                        {s.value}
                      </span>
                    </motion.div>
                  </div>
                  <span
                    className={`text-center text-[10px] font-medium sm:text-xs ${
                      s.projected ? "text-accent" : "text-muted"
                    }`}
                  >
                    {s.year}
                    {s.projected && <span className="block text-[9px]">Proj.</span>}
                  </span>
                </div>
              ))}
            </div>

            {/* KPIs */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-100 pt-8 sm:grid-cols-3">
              {salesGrowth.kpis.map((kpi) => (
                <div key={kpi.label} className="text-center sm:text-left">
                  <div className="font-display text-4xl font-bold text-gradient-accent">
                    <Counter
                      value={kpi.value}
                      suffix={kpi.suffix}
                      decimals={kpi.suffix === "x" ? 1 : 0}
                    />
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Business journey timeline */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Our Business Journey
            </h3>
            <p className="mt-2 max-w-2xl text-muted">
              Key milestones that shaped Atharva Metals & Engineering, year by year.
            </p>
          </Reveal>

          <div className="relative mt-10">
            <div className="absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-accent via-slate-200 to-transparent lg:block" />
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((j) => (
                <motion.div key={j.year} variants={staggerItem} className="relative">
                  <div className="mb-4 hidden h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20 lg:block" />
                  <div className="rounded-2xl card p-5 transition-all hover:-translate-y-1 hover:border-accent/50">
                    <div className="font-display text-2xl font-bold text-gradient-accent">
                      {j.year}
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {j.events.map((e, i) => (
                        <li key={i} className="flex gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>

          <Reveal className="mt-8">
            <div className="flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/[0.05] p-5">
              <Quote className="size-5 shrink-0 text-accent" />
              <p className="text-sm font-medium text-slate-700">
                Ready to set up a new dedicated plant at Chennai for Hikoki — continuing
                our trajectory of customer-driven expansion.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
