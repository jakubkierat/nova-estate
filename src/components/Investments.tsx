"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { investments, formatPrice, type InvestmentStatus } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowRightIcon, MapPinIcon } from "./icons";

const filters: { label: string; value: InvestmentStatus | "wszystkie" }[] = [
  { label: "Wszystkie", value: "wszystkie" },
  { label: "W budowie", value: "w-budowie" },
  { label: "Gotowe do odbioru", value: "gotowe" },
  { label: "Planowane", value: "planowana" },
];

const statusLabel: Record<InvestmentStatus, string> = {
  planowana: "Planowana",
  "w-budowie": "W budowie",
  gotowe: "Gotowe do odbioru",
};

const statusStyle: Record<InvestmentStatus, string> = {
  planowana: "bg-slate-deep/80 text-paper",
  "w-budowie": "bg-gold text-slate-deep",
  gotowe: "bg-emerald-700 text-paper",
};

export function Investments() {
  const [active, setActive] = useState<InvestmentStatus | "wszystkie">("wszystkie");

  const filtered = useMemo(() => {
    if (active === "wszystkie") return investments;
    return investments.filter((item) => item.status === active);
  }, [active]);

  return (
    <section id="oferta" className="bg-paper-dim py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Oferta
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl">
              Aktualne inwestycje
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/60">
            Sprawdź dostępne osiedla w sześciu miastach — od apartamentów w
            centrum po domy jednorodzinne na obrzeżach.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === filter.value
                  ? "bg-ink text-paper"
                  : "bg-paper text-ink/70 hover:text-ink"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
              <motion.article
                key={`${active}-${item.slug}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group overflow-hidden rounded-3xl bg-paper shadow-sm ring-1 ring-ink/5"
              >
                <Link href={`/oferta/${item.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[item.status]}`}
                    >
                      {statusLabel[item.status]}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-ink/50">
                      <MapPinIcon className="h-3.5 w-3.5" />
                      {item.city} — {item.address}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-ink transition-colors group-hover:text-gold">
                      {item.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-ink/60">
                      {item.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
                      <div>
                        <p className="text-xs text-ink/50">Ceny od</p>
                        <p className="font-display text-lg font-bold text-ink">
                          {formatPrice(item.priceFrom)}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-gold">
                        Zobacz szczegóły
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
