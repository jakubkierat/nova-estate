import { processSteps } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="proces" className="bg-slate-deep py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
            Jak to działa
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Droga od wyboru mieszkania do odbioru kluczy
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-paper/15 sm:block" />
          <ol className="space-y-10 sm:space-y-14">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05} as="li">
                <div className="flex gap-6">
                  <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/60 bg-slate-deep font-display text-sm font-bold text-gold-light">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-paper/65 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
