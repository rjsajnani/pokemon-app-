import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { PokemonsList, getPokemons } from '../../api';
import { HomeStyles as styles } from './home.style';
import H1 from '../../components/common/H1';

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
          <H1 t="React Native Exercise" />
          {placeholders.map((_, index) => {
            return (
              <Text key={index} style={[styles.text, styles.marginTop]}>
                Loading...
              </Text>
            );
          })}
        </>
      ) : (
        <>
          <H1 t="Pokemon List" />
          {results.length > 0 &&
            results.map((pokemon: PokemonsList, index: number) => {
              return (
                <TouchableOpacity key={index} onPress={() => showDetail()}>
                  <Text style={styles.text}>
                    {capitalizedString(pokemon.name)}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </>
      )}
    </View>
  );
}
