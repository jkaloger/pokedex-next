import type { PokeAPI } from 'pokeapi-types';

export const getPokemon = async (
  offset?: number,
  limit?: number
): Promise<PokeAPI.NamedAPIResourceList> => {
  const url = `${process.env.POKEAPI_URL}/pokemon?offset=${offset ?? 0}&limit=${limit ?? 10
    }`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};

export const getBerries = async (): Promise<PokeAPI.NamedAPIResourceList> => {
  const url = `${process.env.POKEAPI_URL}/berry`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};

export const getMove = async (id: string): Promise<PokeAPI.Move> => {
  const url = `${process.env.POKEAPI_URL}/move/${id}`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};

export const getMoves = async (): Promise<PokeAPI.NamedAPIResourceList> => {
  const url = `${process.env.POKEAPI_URL}/move?limit=2500`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};

export const getTypes = async (): Promise<PokeAPI.NamedAPIResourceList> => {
  const url = `${process.env.POKEAPI_URL}/type`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};

export const getPokemonById = async (id: string): Promise<PokeAPI.Pokemon> => {
  const url = `${process.env.POKEAPI_URL}/pokemon/${id}`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};

export const getBerryById = async (id: string): Promise<PokeAPI.Berry> => {
  const url = `${process.env.POKEAPI_URL}/berry/${id}`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};

export const getItemById = async (id: string): Promise<PokeAPI.Item> => {
  const url = `${process.env.POKEAPI_URL}/item/${id}`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};
