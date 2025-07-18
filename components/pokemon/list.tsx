import { PokemonDetails } from '@/components/pokemon/details';
import { PokemonDetailsSkeleton } from '@/components/pokemon/details/skeleton';
import { Suspense } from 'react';
import { getPokemon } from '@/lib/api';
import { PAGE_SIZE } from '@/lib/const';
import { flagsmith } from '@/lib/features';
import { getFlags } from '@/lib/flags';

export const PokeList = async ({ page }: { page: number }) => {
	const override = await getFlags();
	const flags = await flagsmith.getEnvironmentFlags();
	const showTypes = flags.isFeatureEnabled('show_types') || !!override?.show_types;
	const pokemonList = await getPokemon(!isNaN(page) ? page * PAGE_SIZE : 0, PAGE_SIZE);

	console.log({ override });
	return (
		<div className="@container">
			<div className="grid grid-cols-1 @5xl:grid-cols-3 @2xl:grid-cols-2 gap-3">
				{pokemonList.results.map(({ name }) => (
					<Suspense key={name} fallback={<PokemonDetailsSkeleton />}>
						<PokemonDetails id={name} showTypes={showTypes} />
					</Suspense>
				))}
			</div>
		</div>
	);
};
