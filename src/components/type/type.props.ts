export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export type TypeProps = {
  types: PokemonType[];
};
