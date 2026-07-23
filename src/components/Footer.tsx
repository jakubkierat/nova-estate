const columns = [
  {
    title: "Oferta",
    links: ["Apartamenty", "Domy jednorodzinne", "Lofty", "Inwestycje w budowie"],
  },
  {
    title: "Firma",
    links: ["O nas", "Proces zakupu", "Opinie klientów", "Kariera"],
  },
  {
    title: "Kontakt",
    links: ["ul. Złota 12, Warszawa", "+48 22 555 01 20", "sprzedaz@nova-estate.pl"],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-deep text-paper/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-bold text-paper">
              NOVA<span className="text-gold">ESTATE</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Deweloper mieszkaniowy realizujący kameralne inwestycje w
              największych polskich miastach od 2010 roku.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-paper">{column.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nova Estate Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
          <p className="text-paper/50">
            Projekt portfolio — fikcyjna marka deweloperska stworzona w celach demonstracyjnych.
          </p>
        </div>
      </div>
    </footer>
  );
}
