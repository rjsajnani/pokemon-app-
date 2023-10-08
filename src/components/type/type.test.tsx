import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';

import { Type } from './type';
import { PokemonType } from './type.props';

const dummyType: PokemonType[] = [
  { slot: 1, type: { name: 'electric', url: 'pokemon1-url' } },
  { slot: 2, type: { name: 'ground', url: 'pokemon2-url' } },
];

describe('<Type />', () => {
  let instance: RenderAPI;
  beforeEach(function () {
    instance = render(<Type types={dummyType} />);
  });

  it('renders correctly', () => {
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
