import { getMove } from '@/lib/api';

import { CardContent, Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { typeBgMap } from '../pokemon/details';
import { get } from 'lodash';

interface Props {
	id: string;
}

export const MoveDetails = async ({ id }: Props) => {
	const move = await getMove(id);

	return (
		<Card className="w-full max-w-sm">
			<CardContent className="flex flex-col items-center gap-4 p-6">
				<div className="text-center space-y-1">
					<h3 className="text-2xl font-bold capitalize">{move.name}</h3>
					<p className="text-xs text-black/50 dark:text-white/50">
						{move.meta.category.name}
					</p>
					<p
						className={cn(
							'px-2 py-1',
							'capitalize rounded-sm text-sm text-white',
							get(typeBgMap, move.type.name)
						)}
					>
						{move.type.name}
					</p>
				</div>
				<div className="flex flex-col gap-1 items-center">
					<p>{move.flavor_text_entries?.[0].flavor_text}</p>
				</div>
			</CardContent>
		</Card>
	);
};
