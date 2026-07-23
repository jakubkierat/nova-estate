import { advantages } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { BuildingIcon, RulerIcon, ShieldIcon, UsersIcon } from "./icons";

const icons = [BuildingIcon, ShieldIcon, RulerIcon, UsersIcon];

export function WhyUs() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Dlaczego my
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl">
            Zaufało nam już ponad 2400 rodzin
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {advantages.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <RevealItem
                key={item.title}
                className="rounded-3xl border border-ink/10 p-7 transition-colors hover:border-gold/50"
              >
                <div className="grid h-11 w-11 place-items-center rounded-full bg-paper-dim text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {item.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
