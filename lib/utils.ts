import { type ClassValue, clsx } from 'clsx';
import { PokeAPI } from 'pokeapi-types';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getColourFromType = (type: string): 'green' | 'slate' => {
  switch (type) {
    case 'grass':
      return 'green';
    default:
      return 'slate';
  }
};
