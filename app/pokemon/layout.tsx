import { PropsWithChildren, Suspense } from 'react';

export default function PokemonLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2>Pokemon</h2>
      <Suspense>{children}</Suspense>
    </div>
  );
}
