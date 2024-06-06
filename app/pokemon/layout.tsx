import { PropsWithChildren, Suspense } from 'react';

export default function PokemonLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <Suspense>{children}</Suspense>
    </div>
  );
}
