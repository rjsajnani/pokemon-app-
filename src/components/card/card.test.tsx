import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';

import { Card } from './card';

describe('<Card />', () => {
  let instance: RenderAPI;
  beforeEach(function () {
    instance = render(<Card name="Pikachu" />);
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
