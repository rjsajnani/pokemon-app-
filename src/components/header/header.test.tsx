import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';

import { Header } from './header';

describe('<Header />', () => {
  let instance: RenderAPI;
  beforeEach(function () {
    instance = render(
      <Header
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        backgroundColor="#A8A77A"
      />,
    );
  });

  it('renders correctly', () => {
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
