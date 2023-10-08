import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import { Styles as styles } from './index.style';
import { PokemonsList, getPokemons } from '../src/api';
import { Card, Text } from '../src/components';
import { useRouter } from 'expo-router';
import useCapitalizedString from '../src/hooks/useCapitalizedString';

const gap = 10;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>([]);
  const router = useRouter();

  const capitalizedString = useCapitalizedString();

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

  const renderItem = ({ item }: { item: PokemonsList }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: 'details/id/',
            params: { id: '1', name: item.name },
          });
        }}
      >
        <Card name={capitalizedString(item.name)} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
}
