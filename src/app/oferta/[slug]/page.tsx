import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { investments, getInvestmentBySlug, formatPrice, type InvestmentStatus } from "@/lib/data";
import {
  ArrowRightIcon,
  BuildingIcon,
  CheckIcon,
  MapPinIcon,
  RulerIcon,
  ShieldIcon,
} from "@/components/icons";

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

export function generateStaticParams() {
  return investments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const investment = getInvestmentBySlug(slug);

  if (!investment) {
    return { title: "Inwestycja nie znaleziona — Nova Estate" };
  }

  return {
    title: `${investment.name} — ${investment.city} | Nova Estate`,
    description: investment.description,
  };
}

export default async function InvestmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const investment = getInvestmentBySlug(slug);

  if (!investment) {
    notFound();
  }

  const specs = [
    { label: "Metraże", value: investment.sizeRange },
    { label: "Liczba lokali", value: `${investment.units}` },
    { label: "Kondygnacje", value: investment.floors },
    { label: "Parking", value: investment.parking },
    { label: "Tereny zielone", value: investment.greenArea },
    { label: "Technologia", value: investment.technology },
    { label: "Klasa energetyczna", value: investment.energyClass },
    { label: "Termin", value: investment.completion },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Link
              href="/#oferta"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors hover:text-ink"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
              Wszystkie inwestycje
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <div>
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[investment.status]}`}
              >
                {statusLabel[investment.status]}
              </span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl lg:text-5xl">
                {investment.name}
              </h1>
              <div className="mt-3 flex items-center gap-1.5 text-sm text-ink/60">
                <MapPinIcon className="h-4 w-4" />
                {investment.city} — {investment.address}
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-ink/50">Ceny od</p>
              <p className="font-display text-3xl font-bold text-ink">
                {formatPrice(investment.priceFrom)}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2">
            {investment.gallery.slice(0, 4).map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl ${
                  index === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`${investment.name} — zdjęcie ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-ink">O inwestycji</h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/70">
                  {investment.longDescription.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1} className="mt-12">
                <h2 className="font-display text-2xl font-bold text-ink">Udogodnienia</h2>
                <RevealGroup className="mt-5 grid gap-3 sm:grid-cols-2" stagger={0.06}>
                  {investment.amenities.map((amenity) => (
                    <RevealItem
                      key={amenity}
                      className="flex items-start gap-3 rounded-2xl border border-ink/10 p-4"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-paper-dim text-gold">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-ink/75">{amenity}</span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
                <div className="flex items-center gap-2 text-gold">
                  <BuildingIcon className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-wide">
                    Dane inwestycji
                  </p>
                </div>
                <dl className="mt-6 space-y-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-start justify-between gap-4 border-b border-ink/10 pb-4 text-sm">
                      <dt className="text-ink/55">{spec.label}</dt>
                      <dd className="text-right font-medium text-ink">{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href={`/?inwestycja=${investment.slug}#kontakt`}
                  className="mt-7 flex items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-gold hover:text-ink"
                >
                  Zapytaj o tę inwestycję
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <p className="mt-4 flex items-center gap-2 text-xs text-ink/50">
                  <ShieldIcon className="h-4 w-4 shrink-0" />
                  5 lat gwarancji i pełne wsparcie posprzedażowe
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-ink/10 bg-paper-dim py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="flex items-center gap-2 text-sm font-semibold text-ink/70">
              <RulerIcon className="h-4 w-4" />
              Zobacz też inne inwestycje
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-3">
              {investments
                .filter((item) => item.slug !== investment.slug)
                .slice(0, 4)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/oferta/${item.slug}`}
                    className="rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
                  >
                    {item.name} — {item.city}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
