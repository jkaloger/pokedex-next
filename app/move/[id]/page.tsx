import { MoveDetails } from '@/components/move';

interface Props {
  params: {
    id: string;
  };
}

export default function MoveModal({ params: { id } }: Props) {
  return <MoveDetails id={id} />;
}
