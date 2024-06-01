import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Next.JS Demo Pokedex',
};

export default function RootLayout({
  children,
  quickview,
  pokemon,
}: Readonly<{
  children: React.ReactNode;
  quickview: React.ReactNode;
  pokemon: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
          <Link className="hover:underline" href="/favourites">
            Favourites
          </Link>
        </nav>

        <main className="container grid grid-cols-3 grid-rows-3 gap-5">
          <div className="col-span-2 row-span-3">{pokemon}</div>
          <Card className="col-span-1 row-span-1">
            <CardContent>Home Page</CardContent>
          </Card>
          <Card className="col-span-1 row-span-2">
            <CardHeader></CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        </main>
      </body>
    </html>
  );
}
