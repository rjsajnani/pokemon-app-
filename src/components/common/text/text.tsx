import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import { textPresets } from './text.presets';
import { TextProps as Props } from './text.props';

export const Text: React.FC<Props> = (props) => {
  const { presets = 'body1', text, style: styleOverride, ...rest } = props;

  const style = [textPresets[presets], styleOverride];

  return (
    <ReactNativeText {...rest} style={style}>
      {text}
    </ReactNativeText>
  );
};
