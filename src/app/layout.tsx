import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Nova Estate - Inwestycje mieszkaniowe premium",
  description:
    "Nova Estate to deweloper mieszkaniowy realizujący kameralne inwestycje w największych polskich miastach. Poznaj naszą ofertę apartamentów i domów jednorodzinnych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
