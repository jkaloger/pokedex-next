import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getMoves } from '@/lib/api';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function BerriesPage() {
  const moves = await getMoves();
  return (
    <Card className="overflow-y-scroll max-h-64">
      <CardHeader className="text-xl">moves</CardHeader>
      <CardContent className="grid grid-cols-3 gap-2">
        {moves.results.map((move) => (
          <Link
            key={move.name}
            className={cn('px-2 py-1 rounded-sm capitalize hover:underline')}
            href={`/move/${move.name}`}
          >
            {move.name.replaceAll('-', ' ')}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
