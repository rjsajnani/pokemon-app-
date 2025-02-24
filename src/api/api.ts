import { POKEMON_URL } from '../constants';

export type PokemonInfo = {
  name: string;
  url: string;
};

export async function getPokemons(
  nextEndpointURL: string | null,
): Promise<{ nextUrl: string; pokemonList: PokemonInfo[] }> {
  try {
    const url = !!nextEndpointURL
      ? nextEndpointURL
      : `${POKEMON_URL}?limit=20&offset=0`;
    const response = await fetch(url);
    const data = await response.json();
    const pokemonList: PokemonInfo[] = data.results.map(
      (pokemon: PokemonInfo) => ({
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

export async function getPokemonDetailsById(id: string | string[] | undefined) {
  try {
    const url = `${POKEMON_URL}/${id}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getAllPokemons() {
  try {
    const url = `${POKEMON_URL}?limit=1000&offset=0`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((pokemon: PokemonInfo) => ({
      name: pokemon.name,
      url: pokemon.url,
    }));
  } catch (error) {
    throw error;
  }
}
