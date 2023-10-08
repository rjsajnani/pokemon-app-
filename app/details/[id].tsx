import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Header, Stats, Type } from '../../src/components';
import { Stack, useLocalSearchParams } from 'expo-router';
import useCapitalizedString from '../../src/hooks/useCapitalizedString';
import { ScrollView } from 'react-native-gesture-handler';
import { getPokemonDetailsById } from '../../src/api';

const Details = () => {
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const { id, name } = useLocalSearchParams();

  useEffect(() => {
    getPokemonDetailsById(id).then((data) => {
      setLoading(false);
      setPokemon(data);
    });
  }, []);

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
      {pokemon ? (
        <>
          <Header
            image={pokemon.sprites.other['official-artwork'].front_default}
          />
          <ScrollView>
            <Type types={pokemon.types} />
            <Stats stats={pokemon.stats} />
          </ScrollView>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};
export default Details;
