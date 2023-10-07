import React, { useEffect, useMemo, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { PokemonsList, getPokemons } from '../../api';
import { HomeStyles as styles } from './home.style';
import { Card, Text } from '../../components';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>([]);

  const placeholders = useMemo(() => [1, 2, 3, 4, 5], []);

  useEffect(() => {
    setLoading(true);
    getPokemons().then((data) => {
      setTimeout(() => {
        setLoading(false);
        setResults(data);
      }, 2000);
    });
  }, []);

  const showDetail = () => {
    console.log('show pokemon detail');
  };

  const capitalizedString = useMemo(
    () => (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    [],
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <Text text="React Native Exercise" />
          {placeholders.map((_, index) => {
            return (
              <Text
                key={index}
                text=" Loading..."
                style={[styles.text, styles.marginTop]}
              />
            );
          })}
        </>
      ) : (
        <>
          <Text text="Pokemon List" presets="header1" />
          {results.length > 0 &&
            results.map((pokemon: PokemonsList, index: number) => {
              return (
                <TouchableOpacity key={index} onPress={() => showDetail()}>
                  <Card name={capitalizedString(pokemon.name)} />
                </TouchableOpacity>
              );
            })}
        </>
      )}
    </View>
  );
}
