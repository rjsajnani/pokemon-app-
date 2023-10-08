import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Error, Header, Stats, Type } from '../../src/components';
import { Stack, useLocalSearchParams } from 'expo-router';
import useCapitalizedString from '../../src/hooks/useCapitalizedString';
import { ScrollView } from 'react-native-gesture-handler';
import { getPokemonDetailsById } from '../../src/api';
import { getPokemonTypeColor } from '../../src/constants';

const Details = () => {
  const [pokemon, setPokemon] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const { id, name } = useLocalSearchParams();

  useEffect(() => {
    getPokemonDetailsById(id)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const capitalizedString = useCapitalizedString();

  if (error) {
    return <Error showHeader text="Something went wrong" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title:
            name &&
            `${capitalizedString(name.toString())}- #${id?.padStart(3, '0')}`,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor:
              pokemon && getPokemonTypeColor(pokemon.types[0].type.name),
          },
        }}
      />
      {pokemon ? (
        <>
          <Header
            backgroundColor={getPokemonTypeColor(pokemon.types[0].type.name)}
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
