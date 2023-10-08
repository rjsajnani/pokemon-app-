import { StyleSheet } from 'react-native';

export const HeaderStyle = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  bgStyles: {
    width: '100%',
    height: 280,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
    backgroundColor: 'black',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
  },
  order: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    paddingTop: 80,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
});
