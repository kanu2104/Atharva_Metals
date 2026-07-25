"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import productsData from "@/data/products.json";

const categories = productsData.categories;

export function Products() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section id="products" className="section-pad relative bg-muted-bg">
      <div className="absolute inset-x-0 top-0 h-px divider-gradient" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Products"
          title="Components That Power Global Brands"
          description="From appliance panels to off-road vehicle assemblies — precision parts engineered to exacting OEM standards."
        />

        {/* Category filter */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === cat.id
                  ? "border-transparent text-white"
                  : "border-slate-200 bg-white text-muted hover:text-accent"
              }`}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="product-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 text-center text-sm text-muted">{current.tagline}</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {current.products.map((product) => (
              <motion.article
                key={product.name}
                layout
                className="group relative flex flex-col overflow-hidden rounded-3xl card transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_34px_60px_-32px_rgba(37,99,235,0.55)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-accent shadow-sm backdrop-blur">
                    {product.customer}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold leading-tight text-foreground">
                      {product.name}
                    </h3>
                    <ArrowUpRight className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.parts.map((part) => (
                      <span
                        key={part}
                        className="rounded-lg border border-slate-200 bg-muted-bg px-2.5 py-1 text-xs text-slate-700"
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
