import React from 'react';
import { CardProps as Props } from './card.props';
import { CardStyle as styles } from './card.style';
import { Image, View } from 'react-native';
import { Text } from '../common';

export const Card: React.FC<Props> = (props) => {
  const { name, image, id } = props;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text text={name} presets="body1" style={styles.text} />
        <Text
          text={`#${id.toString().padStart(3, '0')}`}
          presets="body1"
          style={styles.text}
        />
      </View>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};
