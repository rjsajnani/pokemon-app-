export interface PokemonType {
  slot: number;
  name: string;
}

export type TypeProps = {
  types: PokemonType[];
};
