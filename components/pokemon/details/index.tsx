import { getPokemonById } from '@/lib/api';

import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const typeBgMap: Record<string, string> = {
  grass: 'bg-green-600',
  poison: 'bg-purple-600',
  water: 'bg-blue-600',
  bug: 'bg-green-800',
  fire: 'bg-red-700',
  flying: 'bg-violet-700',
  normal: 'bg-slate-700',
  ground: 'bg-amber-900',
  fairy: 'bg-pink-400 text-black',
  electric: 'bg-yellow-400 text-black',
  steel: 'bg-slate-300 text-black',
  fighting: 'bg-red-800',
  rock: 'bg-gray-800',
  ghost: 'bg-violet-200 text-black',
  psychic: 'bg-pink-900',
  ice: 'bg-blue-300 text-black',
  dragon: 'bg-purple-900',
  dark: 'bg-gray-900',
  stellar: 'bg-indigo-300 text-black',
  unknown: 'bg-white text-black',
};

interface Props {
  id: string;
  showTypes?: boolean;
  showMoves?: boolean;
}

export const PokemonDetails = async ({
  id,
  showMoves = false,
  showTypes = false,
}: Props) => {
  const pokemon = await getPokemonById(id);

  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Link href={`/pokemon/${id}`}>
          <Avatar className={cn(['h-48 w-48 p-4', `bg-slate-300`])}>
            <AvatarImage
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
            />
            <AvatarFallback>{pokemon.name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="text-center space-y-1 flex flex-col gap-1">
          <div>
            <p className="text-xs text-black/50 dark:text-white/50">
              #{pokemon.id}
            </p>
            <h3 className="text-2xl font-bold capitalize">{pokemon.name}</h3>
          </div>
          {showTypes &&
            pokemon.types.map(({ type }) => (
              <p
                key={'type-' + type.name}
                className={cn(
                  'capitalize rounded-sm text-sm text-white',
                  typeBgMap[type.name]
                )}
              >
                {type.name}
              </p>
            ))}
        </div>
        {showMoves && (
          <>
            <hr className="w-2/3" />
            <div className="flex flex-col gap-2">
              <p>{pokemon.held_items.map((item) => item.item.name)}</p>
              <ul className="grid-cols-3 grid gap-y-2 gap-x-10">
                {pokemon.moves.map((move) => (
                  <li className="list-none capitalize" key={move.move.name}>
                    <Link href={`/move/${move.move.name}`}>
                      {move.move.name.replaceAll('-', ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
