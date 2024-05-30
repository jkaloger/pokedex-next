import type { PokeAPI } from 'pokeapi-types';

export const getPokemonById = async (id: string): Promise<PokeAPI.Pokemon> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};

export const getBerryById = async (id: string): Promise<PokeAPI.Berry> => {
  const url = `https://pokeapi.co/api/v2/berry/${id}`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};

export const getItemById = async (id: string): Promise<PokeAPI.Item> => {
  const url = `https://pokeapi.co/api/v2/item/${id}`;
  const response = await fetch(url, { cache: 'force-cache' });
  return await response.json();
};