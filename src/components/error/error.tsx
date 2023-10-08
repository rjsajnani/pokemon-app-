import { Stack } from 'expo-router';
import { View } from 'react-native';
import { getPokemonTypeColor } from '../../constants';
import { Text } from '../common';
import { ErrorStyles as styles } from './error.styles';
import { ErrorProps as Props } from './error.props';

export const Error: React.FC<Props> = (props) => {
  const { showHeader, text } = props;

  return (
    <View style={styles.errorContainer}>
      {showHeader && (
        <Stack.Screen
          options={{
            title: 'Error',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: getPokemonTypeColor('fighting'),
            },
          }}
        />
      )}
      <Text text={text} presets="header1" />
    </View>
  );
};
