import React from 'react';
import { TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { SearchInputProps as Props } from './search-input.props';
import { SearchInputStyles as styles } from './search-input.style';

export const SearchInput: React.FC<Props> = (props) => {
  const { onChangeSearch, searchText, findPokemon } = props;
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSearch}
        onEndEditing={() => findPokemon}
        placeholder="Search Pokemon"
        value={searchText}
        clearButtonMode="while-editing"
        onSubmitEditing={findPokemon}
      />
      {searchText.length <= 0 && (
        <Ionicons
          style={styles.searchIcon}
          name={'ios-search'}
          size={15}
          color="#000"
        />
      )}
    </View>
  );
};
