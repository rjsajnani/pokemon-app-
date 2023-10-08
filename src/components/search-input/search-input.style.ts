import { StyleSheet } from 'react-native';

export const SearchInputStyles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
