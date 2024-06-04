import { BerryDetails } from '@/components/berry/details';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getBerries } from '@/lib/api';
import Link from 'next/link';

export default async function BerriesPage() {
  const berries = await getBerries();
  return (
    <Card>
      <CardHeader className="text-xl">Berries</CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {berries.results.map((berry) => (
          <Link
            key={berry.name}
            className="capitalize hover:underline"
            href={`/berry/${berry.name}`}
          >
            {berry.name}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
