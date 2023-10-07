import { TextStyle } from 'react-native';
import { TextPresets } from './text.presets';

export interface TextProps {
  presets?: TextPresets;
  text: string;
  style?: TextStyle | TextStyle[];
}
