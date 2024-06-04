import { PokeList } from '@/components/pokemon/list';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function PokemonPage({ searchParams: { page } }: Props) {
  return <PokeList page={Number(page)} />;
}
