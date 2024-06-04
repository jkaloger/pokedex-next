import { getBerryById, getItemById } from '@/lib/api';

import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { CardContent, Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  id: string;
}

export const BerryDetails = async ({ id }: Props) => {
  const berry = await getBerryById(id);
  const item = await getItemById(berry.item.name);

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Avatar className={cn(['h-24 w-24', `bg-zinc-50`])}>
          <AvatarImage alt={berry.name} src={item.sprites.default} />
          <AvatarFallback>{berry.name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="text-center space-y-1">
          <h3 className="text-2xl font-bold capitalize">{berry.name}</h3>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p>{item.flavor_text_entries?.[0].text}</p>
        </div>
      </CardContent>
    </Card>
  );
};
