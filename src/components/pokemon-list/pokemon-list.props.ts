export type Pokemon = {
  url: string;
  id: number;
  name: string;
  image: string;
};

export type PokemonsListProps = {
  pokemons: Pokemon[];
  isNext: boolean;
  loadPokemons: () => void;
};
