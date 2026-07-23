"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "#oferta", label: "Oferta" },
  { href: "#o-nas", label: "O nas" },
  { href: "#proces", label: "Proces zakupu" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(20,24,31,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="font-display text-lg font-bold tracking-tight text-ink">
          NOVA<span className="text-gold">ESTATE</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#kontakt"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-gold hover:text-ink"
          >
            Umów spotkanie
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center text-ink md:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <nav
        aria-hidden={!open}
        className={`grid overflow-hidden bg-paper transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-6 pb-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-3 text-base font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              Umów spotkanie
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
