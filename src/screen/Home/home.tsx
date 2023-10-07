import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { PokemonsList, getPokemons } from '../../api';
import { HomeStyles as styles } from './home.style';
import { Card, Text } from '../../components';

const gap = 10;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>([]);

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

  const renderItem = ({ item }: { item: PokemonsList }) => {
    return (
      <TouchableOpacity onPress={() => showDetail()}>
        <Card name={capitalizedString(item.name)} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <>
          <Text text="Pokemon List" presets="header1" style={styles.title} />
          {results.length > 0 && (
            <FlatList
              renderItem={renderItem}
              data={results}
              numColumns={2}
              keyExtractor={(item) => item.name}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap }}
              columnWrapperStyle={{ gap }}
            />
          )}
        </>
      )}
    </View>
  );
}
