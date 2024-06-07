import { PokeList } from '@/components/pokemon/list';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default function PokemonSlot(props: Props) {
  return <PokeList page={Number(props.searchParams.page)} />;
}
