"use client";

import { motion } from "framer-motion";
import { HardHat, Users, UserCog } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import company from "@/data/company.json";

const { workforce } = company;

const segments = [
  { key: "staff", label: "Staff", value: workforce.staff, icon: UserCog },
  { key: "operators", label: "Operators", value: workforce.operators, icon: Users },
  { key: "contract", label: "Contract", value: workforce.contract, icon: HardHat },
];

const total = segments.reduce((sum, s) => sum + s.value, 0);

export function HeadcountChart() {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl glass">
        <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Total */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Users className="size-3.5" /> Headcount
            </span>
            <h3 className="mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our People Behind the Precision
            </h3>
            <div className="mt-6 flex items-end gap-3">
              <span className="font-display text-6xl font-bold text-gradient-accent sm:text-7xl">
                <Counter value={total} />
              </span>
              <span className="mb-2 text-sm uppercase tracking-[0.18em] text-muted">
                Total Workforce
              </span>
            </div>

            {/* Stacked bar */}
            <div className="mt-8 flex h-3 w-full overflow-hidden rounded-full bg-slate-100">
              {segments.map((s, i) => (
                <motion.div
                  key={s.key}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(s.value / total) * 100}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                  className="h-full"
                  style={{
                    backgroundColor: ["#60a5fa", "#3b82f6", "#1d4ed8"][i],
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bars */}
          <div className="flex flex-col gap-5">
            {segments.map((s, i) => {
              const pct = Math.round((s.value / total) * 100);
              const Icon = s.icon;
              return (
                <div key={s.key}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Icon className="size-4 text-accent" />
                      {s.label}
                    </span>
                    <span className="font-display text-sm font-bold text-foreground">
                      <Counter value={s.value} /> <span className="text-muted">/ {pct}%</span>
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
