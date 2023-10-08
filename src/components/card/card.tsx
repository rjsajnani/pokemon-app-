import React from 'react';
import { CardProps as Props } from './card.props';
import { CardStyle as styles } from './card.style';
import { Image, View } from 'react-native';
import { Text } from '../common';
import { getPokemonTypeColor } from '../../constants';

export const Card: React.FC<Props> = (props) => {
  const { name, image, id, type } = props;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: getPokemonTypeColor(type),
      }}
    >
      <View style={styles.infoContainer}>
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
