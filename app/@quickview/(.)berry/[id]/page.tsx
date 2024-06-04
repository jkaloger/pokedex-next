import { BerryDetails } from '@/components/berry/details';
import { BerryDetailsSkeleton } from '@/components/berry/details/skeleton';
import { Dialog } from '@/components/ui/dialog';
import { Suspense } from 'react';
interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: Props) {
  return (
    <Dialog>
      <Suspense fallback={<BerryDetailsSkeleton />}>
        <BerryDetails id={id} />
      </Suspense>
    </Dialog>
  );
}
