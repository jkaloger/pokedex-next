import { getPokemonById } from '@/lib/api';

import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';
import { cn, getColourFromType } from '@/lib/utils';
import { HeartFilledIcon } from '@radix-ui/react-icons';

interface Props {
	id: string;
}

export const PokemonDetails = async ({ id }: Props) => {
	const pokemon = await getPokemonById(id);

	const type = getColourFromType(pokemon.types[0].type.name);

	return (
		<Card className="w-full max-w-sm">
			<CardContent className="flex flex-col items-center gap-4 p-6">
				<Avatar className={cn(['h-24 w-24', `bg-${type}-200`])}>
					<AvatarImage alt={pokemon.name} src={pokemon.sprites.front_default} />
					<AvatarFallback>{pokemon.name[0].toUpperCase()}</AvatarFallback>
				</Avatar>
				<div className="text-center space-y-1">
					<h3 className="text-2xl font-bold">{pokemon.name}</h3>
					<p className="text-sm text-gray-500 dark:text-gray-400">{pokemon.species.name}</p>
				</div>
				<Button className="w-full flex gap-2">
					<HeartFilledIcon /> Favourite
				</Button>
			</CardContent>
		</Card>
	);
};
