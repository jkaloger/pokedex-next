import type { PokeAPI } from 'pokeapi-types';

export const getPokemon = async (offset?: number, limit?: number): Promise<PokeAPI.NamedAPIResourceList> => {
  const url = `${process.env.POKEAPI_URL}/pokemon?offset=${offset ?? 0}&limit=${limit ?? 10}`;
  const response = await fetch(url, { cache: 'force-cache', next: { revalidate: false } });
  return await response.json();
};

export const getPokemonById = async (id: string): Promise<PokeAPI.Pokemon> => {
  const url = `${process.env.POKEAPI_URL}/pokemon/${id}`;
  const response = await fetch(url, { cache: 'force-cache', next: { revalidate: false } });
  return await response.json();
};

export const getBerryById = async (id: string): Promise<PokeAPI.Berry> => {
  const url = `${process.env.POKEAPI_URL}/berry/${id}`;
  const response = await fetch(url, { cache: 'force-cache', next: { revalidate: false } });
  return await response.json();
};

export const getItemById = async (id: string): Promise<PokeAPI.Item> => {
  const url = `${process.env.POKEAPI_URL}/item/${id}`;
  const response = await fetch(url, { cache: 'force-cache', next: { revalidate: false } });
  return await response.json();
};
