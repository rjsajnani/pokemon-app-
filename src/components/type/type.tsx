import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Text } from '../common';
import { TypeStyle as styles } from './type.style';
import { TypeProps as Props } from './type.props';

export const Type: React.FC<Props> = (props) => {
  const { types } = props;

  return (
    <View style={styles.content}>
      {types.map(({ slot, name }) => {
        return (
          <View key={slot} style={styles.pill}>
            <Text style={styles.text} text={name} />
          </View>
        );
      })}
    </View>
  );
};
