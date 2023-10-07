import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
  text: { fontSize: 14, textAlign: 'center' },
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 10,
  },
  loadingContainer: { justifyContent: 'center', alignItems: 'center', flex: 1 },
});
