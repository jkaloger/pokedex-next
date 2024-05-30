import { BerryDetails } from '@/components/berry/details';
import { Dialog } from '@/components/ui/dialog';
interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: Props) {
  return (
    <Dialog>
      <BerryDetails id={id} />
    </Dialog>
  );
}
