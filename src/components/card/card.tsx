import React from 'react';
import { CardProps as Props } from './card.props';
import { CardStyle as styles } from './card.style';
import { View } from 'react-native';
import { Text } from '../common';

export const Card: React.FC<Props> = (props) => {
  const { name } = props;

  return (
    <View style={styles.container}>
      <Text text={name} presets="body1" style={styles.text} />
    </View>
  );
};
