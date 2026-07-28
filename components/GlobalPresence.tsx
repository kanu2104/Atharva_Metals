"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, staggerItem } from "@/components/ui/reveal";
import customersData from "@/data/customers.json";

type Customer = {
  name: string;
  segment: string;
  since: number;
  logo: string | null;
  color: string;
};

const { globalPresence } = customersData;
const customers = customersData.customers as Customer[];

function CustomerLogo({ c, className }: { c: Customer; className?: string }) {
  if (c.logo) {
    return (
      <Image
        src={c.logo}
        alt={`${c.name} logo`}
        width={160}
        height={80}
        className={className}
      />
    );
  }
  return (
    <span
      className="font-display text-xl font-extrabold tracking-tight sm:text-2xl"
      style={{ color: c.color }}
    >
      {c.name}
    </span>
  );
}

export function GlobalPresence() {
  const marquee = [...customers, ...customers];

  return (
    <section id="global" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/70" />
      <div className="absolute left-1/2 top-1/2 -z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/70" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Global Presence"
          title="Engineered in India, Delivered Worldwide"
          description="Supplying precision components and assemblies to OEM facilities across four countries and two continents."
        />

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {globalPresence.regions.map((region) => (
            <motion.div
              key={region.code}
              variants={staggerItem}
              className="group flex flex-col rounded-3xl card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_34px_60px_-32px_rgba(37,99,235,0.55)]"
            >
              <div className="flex items-center justify-between">
                <Globe2 className="size-7 text-accent" />
                <span className="font-display text-2xl font-bold text-slate-200 transition-colors group-hover:text-accent/50">
                  {region.code}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {region.country}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">{region.customers}</p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                {region.locations.map((loc) => (
                  <li key={loc} className="flex items-start gap-2 text-sm text-slate-600">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-muted" />
                    {loc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>

      {/* Customer logo marquee — directly under country cards */}
      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {marquee.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex h-20 min-w-[200px] items-center justify-center rounded-2xl card px-8"
            >
              <CustomerLogo c={c} className="max-h-10 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
