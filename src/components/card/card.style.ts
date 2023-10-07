import { Dimensions, StyleSheet } from 'react-native';

export const CardStyle = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get('window').width * 0.45,
  },
  text: { color: 'white' },
});
