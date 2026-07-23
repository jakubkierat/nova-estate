"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { testimonials } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowRightIcon, StarIcon } from "./icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="opinie" className="bg-paper-dim py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Opinie klientów
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl">
            Co mówią mieszkańcy naszych osiedli
          </h2>
        </Reveal>

        <div className="relative mt-14 min-h-[280px] sm:min-h-[220px]">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-6 text-balance font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              “{current.quote}”
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-sm font-bold text-paper">
                {initials(current.name)}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-ink">{current.name}</p>
                <p className="text-xs text-ink/60">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Poprzednia opinia"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Opinia ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-ink/20"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Następna opinia"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
