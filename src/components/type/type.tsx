import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Text } from '../common';
import { TypeStyle as styles } from './type.style';
import { TypeProps as Props } from './type.props';
import useCapitalizedString from '../../hooks/useCapitalizedString';
import { getPokemonTypeColor } from '../../constants';

export const Type: React.FC<Props> = (props) => {
  const { types } = props;
  const capitalizedString = useCapitalizedString();

  return (
    <View style={styles.content}>
      {types.map(({ slot, type: { name } }) => {
        return (
          <View
            key={slot}
            style={{
              ...styles.pill,
              backgroundColor: getPokemonTypeColor(name),
            }}
          >
            <Text style={styles.text} text={capitalizedString(name)} />
          </View>
        );
      })}
    </View>
  );
};
