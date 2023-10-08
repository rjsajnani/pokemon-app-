import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';

import { Stats } from './stats';
import { Stat } from './stats.props';

const dummyStats: Stat[] = [
  { base_stat: 20, stat: { name: 'HP' } },
  { base_stat: 50, stat: { name: 'Attack' } },
];

describe('<Stats />', () => {
  let instance: RenderAPI;
  beforeEach(function () {
    instance = render(<Stats stats={dummyStats} />);
  });

  it('renders correctly', () => {
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
