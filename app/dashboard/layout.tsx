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
    <main className="container grid grid-cols-3 gap-5">
      <Card className="col-span-1">
        <CardHeader className="text-xl">Nav</CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Link href="/dashboard/berries">Berries</Link>
          <Link href="/dashboard/berries">Berries</Link>
          <Link href="/dashboard/berries">Berries</Link>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader className="text-xl">Page.js</CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
      <div className="col-span-3 flex flex-col gap-3">
        <div className="text-xl">Pokemon</div>
        {pokemon}
      </div>
    </main>
  );
}
