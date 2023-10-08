import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';

import { PokemonList } from './pokemon-list';
import { Pokemon } from './pokemon-list.props';

const dummyPokemonList: Pokemon[] = [
  {
    url: 'pokemon1-url',
    id: 1,
    name: 'pokemon1',
    image: 'pokemonImage',
  },
  {
    url: 'pokemon2-url',
    id: 2,
    name: 'pokemon2',
    image: 'pokemonImage',
  },
  {
    url: 'pokemon3-url',
    id: 3,
    name: 'pokemon3',
    image: 'pokemonImage',
  },
];

describe('<PokemonList />', () => {
  let instance: RenderAPI;
  const loadPokemons = jest.fn();
  const nextUrl = false;

  beforeEach(function () {
    instance = render(
      <PokemonList
        pokemons={dummyPokemonList}
        loadPokemons={loadPokemons}
        isNext={dummyPokemonList.length > 0 ? false : !!nextUrl}
      />,
    );
  });

  it('renders correctly', () => {
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check if the pokemon is renders or not ', async function () {
    expect(instance.getByText(/Pokemon3/i)).toBeTruthy();
  });
});
