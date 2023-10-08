import React from 'react';
import { View } from 'react-native';
import { Header, Stats, Type } from '../../src/components';
import { Stack, useLocalSearchParams } from 'expo-router';
import useCapitalizedString from '../../src/hooks/useCapitalizedString';
import { ScrollView } from 'react-native-gesture-handler';

const Details = () => {
  const [character, setCharacter] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>('');
  const { id, name } = useLocalSearchParams();

  const capitalizedString = useCapitalizedString();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: name && capitalizedString(name.toString()),
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
      <Header image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      <ScrollView>
        <Type types={[{ slot: 1, name: 'Grass' }]} />
        <Stats stats={[{ base_stat: 10, stat: { name: 'Hp' } }]} />
      </ScrollView>
    </View>
  );
};
export default Details;
