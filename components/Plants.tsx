"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cog, MapPin, Maximize, Star, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, staggerItem } from "@/components/ui/reveal";
import plants from "@/data/plants.json";

export function Plants() {
  return (
    <section id="plants" className="section-pad relative bg-white">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Plant Locations"
          title="Strategically Located Facilities"
          description="Three manufacturing plants across Maharashtra and Gujarat positioned close to our customers' assembly lines."
        />

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {plants.plants.map((plant) => (
            <motion.div
              key={plant.id}
              variants={staggerItem}
              className="group relative flex flex-col overflow-hidden rounded-3xl card transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_34px_60px_-32px_rgba(37,99,235,0.55)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d5e]/85 via-[#0f3d5e]/20 to-transparent" />
                {plant.isFlagship && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    <Star className="size-3" /> Flagship
                  </span>
                )}
                <div className="absolute bottom-4 left-5">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {plant.name}
                  </h3>
                  <span className="text-sm text-blue-50/90">{plant.state}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start gap-2.5 text-sm text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{plant.address}</span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-muted-bg p-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Maximize className="size-3.5" /> Area
                    </div>
                    <div className="mt-1 font-display text-lg font-bold text-foreground">
                      {plant.area}
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-muted-bg p-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Cog className="size-3.5" /> Machines
                    </div>
                    <div className="mt-1 font-display text-lg font-bold text-foreground">
                      {plant.machines} Nos.
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
                    <Users className="size-3.5" /> Customers
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {plant.customers.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-slate-200 bg-muted-bg px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
