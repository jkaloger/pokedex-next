import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Next.JS Demo Pokedex',
};
export default function RootLayout({
  quickview,
  children,
}: {
  children: React.ReactNode;
  quickview: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <body className="dark">
        <div id="modal-root" />
        {quickview}
        <nav className="flex gap-4 px-5 py-3 items-center">
          <Link href="/" className="text-2xl">
            ⚡️ Pokédex
          </Link>
          <span className="grow" />
          <Link className="hover:underline" href="/pokemon">
            Pokémon
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
