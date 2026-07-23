import Image from "next/image";
import { stats } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { AnimatedCounter } from "./AnimatedCounter";

export function About() {
  return (
    <section id="o-nas" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop"
              alt="Wnętrze apartamentu wykończonego przez Nova Estate"
              fill
              className="object-cover"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                O nas
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl">
                Budujemy więcej niż budynki - tworzymy sąsiedztwa
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/70">
                Nova Estate powstała w 2010 roku z przekonania, że dobrze
                zaprojektowane osiedle wpływa na jakość codziennego życia.
                Od tego czasu zrealizowaliśmy kilkadziesiąt inwestycji
                mieszkaniowych, stawiając na kameralną skalę zabudowy,
                staranne wykończenie i tereny zielone dostępne dla
                mieszkańców.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                Każdy projekt konsultujemy z pracowniami architektonicznymi
                i planujemy z myślą o realnych potrzebach rodzin - od
                układu mieszkań po lokalizację placów zabaw i ścieżek
                rowerowych.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid grid-cols-2 gap-8" stagger={0.12}>
              {stats.map((stat) => (
                <RevealItem key={stat.label}>
                  <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
