import { PokemonDetails } from '@/components/pokemon/details';

interface Props {
  params: {
    id: string;
  };
}

export default function PokemonPage({ params: { id } }: Props) {
  return (
    <div className="container">
      <PokemonDetails id={id} showMoves />
    </div>
  );
}
