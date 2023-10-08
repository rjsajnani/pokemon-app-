import { POKEMON_URL } from '../constants';

export type PokemonsList = {
  name: string;
  url: string;
};

export async function getPokemons(
  nextEndpointURL: string | null,
): Promise<{ nextUrl: string; pokemonList: PokemonsList[] }> {
  try {
    const url = !!nextEndpointURL
      ? nextEndpointURL
      : `${POKEMON_URL}?limit=20&offset=0`;
    const response = await fetch(url);
    const data = await response.json();
    const pokemonList: PokemonsList[] = data.results.map(
      (pokemon: PokemonsList) => ({
        name: pokemon.name,
        url: pokemon.url,
      }),
    );
    return {
      nextUrl: data.next,
      pokemonList: pokemonList,
    };
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrl(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
