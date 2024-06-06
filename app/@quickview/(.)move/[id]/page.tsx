import { BerryDetailsSkeleton } from '@/components/berry/details/skeleton';
import { MoveDetails } from '@/components/move';
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
        <MoveDetails id={id} />
      </Suspense>
    </Dialog>
  );
}
