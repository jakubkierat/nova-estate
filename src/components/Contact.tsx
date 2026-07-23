"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { CheckIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";
import { investments } from "@/lib/data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [investment, setInvestment] = useState("");

  useEffect(() => {
    const preselected = new URLSearchParams(window.location.search).get("inwestycja");
    if (preselected && investments.some((item) => item.slug === preselected)) {
      // Syncing form state with the URL (an external system) on mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInvestment(preselected);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="kontakt" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-12">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Kontakt
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl">
              Porozmawiajmy o Twoim nowym mieszkaniu
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
              Wypełnij formularz, a nasz doradca ds. sprzedaży skontaktuje
              się z Tobą w ciągu jednego dnia roboczego.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3 text-sm text-ink/75">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper-dim text-gold">
                  <MapPinIcon className="h-4.5 w-4.5" />
                </span>
                Biuro sprzedaży: ul. Złota 12, 00-023 Warszawa
              </div>
              <div className="flex items-center gap-3 text-sm text-ink/75">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper-dim text-gold">
                  <PhoneIcon className="h-4.5 w-4.5" />
                </span>
                +48 22 555 01 20
              </div>
              <div className="flex items-center gap-3 text-sm text-ink/75">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper-dim text-gold">
                  <MailIcon className="h-4.5 w-4.5" />
                </span>
                sprzedaz@nova-estate.pl
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10">
              <iframe
                title="Mapa lokalizacji biura Nova Estate"
                src="https://www.openstreetmap.org/export/embed.html?bbox=20.98%2C52.22%2C21.02%2C52.25&layer=mapnik&marker=52.235%2C21.0"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-3xl border border-ink/10 bg-paper-dim p-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center py-16 text-center"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gold text-slate-deep">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">
                  Dziękujemy za wiadomość
                </h3>
                <p className="mt-2 max-w-xs text-sm text-ink/60">
                  Nasz doradca skontaktuje się z Tobą wkrótce.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-ink/80">
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-ink/80">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
                      placeholder="jan@przyklad.pl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-ink/80">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
                      placeholder="+48 600 000 000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="investment" className="text-sm font-medium text-ink/80">
                    Interesująca inwestycja
                  </label>
                  <select
                    id="investment"
                    name="investment"
                    value={investment}
                    onChange={(event) => setInvestment(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
                  >
                    <option value="" disabled>
                      Wybierz inwestycję
                    </option>
                    {investments.map((item) => (
                      <option key={item.slug} value={item.slug}>
                        {item.name} - {item.city}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-ink/80">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
                    placeholder="Napisz kilka słów o tym, czego szukasz..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-ink py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-gold hover:text-ink"
                >
                  Wyślij zapytanie
                </button>
                <p className="text-center text-xs text-ink/45">
                  Wysyłając formularz akceptujesz naszą politykę prywatności.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
