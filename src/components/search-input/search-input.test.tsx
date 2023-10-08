import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import { SearchInput } from './search-input';

describe('<SearchInput />', () => {
  const onChangeSearch = jest.fn();
  const findPokemon = jest.fn();
  let instance: RenderAPI;

  beforeEach(function () {
    instance = render(
      <SearchInput
        onChangeSearch={onChangeSearch}
        searchText=""
        findPokemon={findPokemon}
      />,
    );
  });

  it('renders correctly', function () {
    const tree = instance.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly and call onChangeSearch when typing', async () => {
    const { findByPlaceholderText } = instance;

    const inputField = await findByPlaceholderText('Search Pokemon');

    fireEvent.changeText(inputField, 'Pikachu');

    expect(onChangeSearch).toHaveBeenCalledWith('Pikachu');
  });

  it('should call findPokemon when submitting the search', () => {
    const { getByPlaceholderText } = instance;
    const inputField = getByPlaceholderText('Search Pokemon');

    fireEvent.changeText(inputField, 'Charizard');

    fireEvent(inputField, 'onSubmitEditing');

    expect(findPokemon).toHaveBeenCalled();
  });
});
