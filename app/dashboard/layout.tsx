import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function DashboardLayout({
  children,
  pokemon,
}: Readonly<{
  children: React.ReactNode;
  pokemon: React.ReactNode;
}>) {
  return (
    <main className="container flex flex-col gap-5">
      <Card>
        <CardHeader className="text-xl">Nav</CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Link href="/dashboard/berries">Berries</Link>
          <Link href="/dashboard/types">Types</Link>
        </CardContent>
      </Card>
      {children}
      <div className="col-span-3 flex flex-col gap-3">
        <div className="text-xl">Pokemon</div>
        {pokemon}
      </div>
    </main>
  );
}
