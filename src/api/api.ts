import { POKEMON_URL } from '../constants';

export type PokemonsList = {
  name: string;
  url: string;
};

export async function getPokemons(): Promise<PokemonsList[]> {
  try {
    const url = POKEMON_URL;
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((pokemon: PokemonsList) => ({
      name: pokemon.name,
      url: pokemon.url,
    }));
  } catch (error) {
    throw error;
  }
}
