import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';

import { Error } from './error';

describe('<Error />', () => {
  let instance: RenderAPI;

  it('renders correctly with header', () => {
    instance = render(<Error showHeader text="Something went wrong" />);
    const tree = instance.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without header', () => {
    instance = render(
      <Error showHeader text="Something went wrong and header is not shown" />,
    );
    const tree = instance.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
