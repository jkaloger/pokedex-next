import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href="/pokemon/1">Bulbasaur</Link>
      <Link href="/berry/2">Berry 2</Link>
    </main>
  );
}
