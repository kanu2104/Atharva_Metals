"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  DraftingCompass,
  Flame,
  Layers,
  ShieldCheck,
  Spline,
  Stamp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";
import capabilities from "@/data/capabilities.json";

const iconMap: Record<string, LucideIcon> = {
  Stamp,
  Flame,
  Spline,
  Wrench,
  DraftingCompass,
  ShieldCheck,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="section-pad relative bg-muted-bg">
      <div className="absolute inset-x-0 top-0 h-px divider-gradient" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Manufacturing Capabilities"
          title="Integrated Engineering Under One Roof"
          description="Stamping, welding, tube bending, tooling, design and quality — a complete value chain engineered for precision and scale."
        />

        <StaggerGroup className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.capabilities.map((cap) => {
            const Icon = iconMap[cap.icon] ?? Stamp;
            return (
              <motion.div
                key={cap.id}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-3xl card transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_34px_60px_-32px_rgba(37,99,235,0.55)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d5e]/50 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.7)]">
                    <Icon className="size-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cap.summary}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                    {cap.specs.map((spec, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>

        {/* Raw materials */}
        <Reveal className="mt-16">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl card lg:grid-cols-[1.1fr_1fr]">
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-2 text-accent">
                <Layers className="size-5" />
                <span className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
                  {capabilities.rawMaterials.title}
                </span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {capabilities.rawMaterials.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200 bg-muted-bg p-4 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-56 w-full lg:h-full lg:min-h-[20rem]">
              <Image
                src={capabilities.rawMaterials.image}
                alt="Raw materials processed"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
