import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function DashboardLayout({
  children,
  pokemon,
}: Readonly<{
  children: React.ReactNode;
  pokemon: React.ReactNode;
}>) {
  return (
    <main className="container grid grid-cols-3 grid-rows-3 gap-5">
      <div className="col-span-2 row-span-3">{pokemon}</div>
      <Card className="col-span-1 row-span-1">
        <CardHeader></CardHeader>
        <CardContent>Home Page</CardContent>
      </Card>
      <Card className="col-span-1 row-span-2">
        <CardHeader></CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </main>
  );
}
