import { TextStyle } from 'react-native';

const BASE: TextStyle = {
  color: 'black',
};

export const textPresets = {
  //body presets
  body1: {
    ...BASE,
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 24,
  } as TextStyle,

  body2: {
    ...BASE,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 24,
  },

  // header presets

  header1: {
    ...BASE,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 29,
  } as TextStyle,

  header2: {
    ...BASE,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 29,
  } as TextStyle,
};

export type TextPresets = keyof typeof textPresets;
