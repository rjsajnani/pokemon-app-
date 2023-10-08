import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  text: { fontSize: 14, textAlign: 'center' },
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
