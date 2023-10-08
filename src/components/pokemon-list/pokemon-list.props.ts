export type Pokemon = {
  url: string;
  id: number;
  name: string;
  image: string;
};

export type PokemonListProps = {
  pokemons: Pokemon[];
  isNext: boolean;
  loadPokemons: () => void;
};
