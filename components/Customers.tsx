"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, staggerItem } from "@/components/ui/reveal";
import customersData from "@/data/customers.json";

type Customer = {
  name: string;
  segment: string;
  logo: string | null;
  color: string;
};

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

export function Customers() {
  return (
    <section id="customers" className="section-pad relative overflow-x-clip bg-white">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Customers"
          title="Trusted by Industry Leaders"
          description="Long-term partnerships with global OEMs across white goods, automotive, power tools and office furniture."
        />

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {customers.map((c) => (
            <motion.div
              key={c.name}
              variants={staggerItem}
              className="group flex items-center gap-5 rounded-2xl card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_44px_-26px_rgba(37,99,235,0.5)]"
            >
              {/* Logo plate */}
              <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-3">
                <CustomerLogo c={c} className="max-h-10 w-auto object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-base font-bold text-foreground">
                  {c.name}
                </div>
                <div className="truncate text-xs text-muted">{c.segment}</div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
