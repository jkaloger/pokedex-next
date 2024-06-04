import { PokemonDetails } from '@/components/pokemon/details';

interface Props {
  params: {
    id: string;
  };
}

export default function PokemonPage({ params: { id } }: Props) {
  return (
    <div>
      <PokemonDetails id={id} />
    </div>
  );
}
