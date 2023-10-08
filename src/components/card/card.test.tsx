import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';

import { Card } from './card';

describe('<Card />', () => {
  let instance: RenderAPI;
  beforeEach(function () {
    instance = render(
      <Card
        name="Pikachu"
        id={2}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
      />,
    );
  });

  it('renders correctly', () => {
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('able to find the pokemon rendered', async () => {
    const { findByText } = instance;

    expect(await findByText('Pikachu')).toBeTruthy();
  });
});
