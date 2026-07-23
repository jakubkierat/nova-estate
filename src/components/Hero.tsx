"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRightIcon, ChevronDownIcon } from "./icons";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] h-[120%]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"
          alt="Nowoczesna inwestycja mieszkaniowa Nova Estate"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-slate-deep/70 via-slate-deep/50 to-slate-deep"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full max-w-7xl flex-col justify-end px-6 pb-24 mx-auto lg:px-10 lg:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gold-light"
        >
          Deweloper mieszkaniowy od 2010 roku
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl font-display text-4xl font-bold leading-[1.05] text-paper text-balance sm:text-5xl lg:text-6xl"
        >
          Miejsca, w których dobrze się mieszka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-xl text-lg text-paper/80"
        >
          Projektujemy i budujemy kameralne osiedla mieszkaniowe w sześciu polskich
          miastach — z troską o architekturę, sąsiedztwo i jakość wykończenia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#oferta"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-slate-deep transition-transform hover:-translate-y-0.5"
          >
            Zobacz inwestycje
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
          >
            Skontaktuj się z nami
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-paper/70"
        >
          <ChevronDownIcon className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
