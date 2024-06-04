import { typeBgMap } from '@/components/pokemon/details';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getTypes } from '@/lib/api';
import { cn } from '@/lib/utils';
import { get } from 'lodash';
import Link from 'next/link';

export default async function BerriesPage() {
  const types = await getTypes();
  return (
    <Card>
      <CardHeader className="text-xl">Types</CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {types.results.map((type) => (
          <Link
            key={type.name}
            className={cn(
              'px-2 py-1 rounded-sm capitalize hover:underline',
              get(typeBgMap, type.name)
            )}
            href={`/type/${type.name}`}
          >
            {type.name}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
