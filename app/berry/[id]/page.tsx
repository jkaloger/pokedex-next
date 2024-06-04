import { BerryDetails } from '@/components/berry/details';

interface Props {
  params: {
    id: string;
  };
}

export default function PokemonPage({ params: { id } }: Props) {
  return <BerryDetails id={id} />;
}
