const BASE_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = `${BASE_URL}pokemon/`;

// https://www.epidemicjohto.com/t882-type-colors-hex-colors list of colors for various pokemon type
const POKEMON_TYPE: { [key: string]: string } = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

const getPokemonTypeColor = (name: string): string => POKEMON_TYPE[name];

export { BASE_URL, POKEMON_URL, getPokemonTypeColor };
