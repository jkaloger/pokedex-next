import { PokemonDetails } from '@/components/pokemon/details';
import Link from 'next/link';

interface Props {
  params: {
    id: string;
  };
}

export default function PokemonPage({ params: { id } }: Props) {
  return (
    <div>
      Pokemon Page <PokemonDetails id={id} />
      <Link href="/berry/2">2!</Link>
    </div>
  );
}
