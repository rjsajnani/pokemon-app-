import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, SafeAreaView } from 'react-native';

import { Styles as styles } from './index.style';
import { getPokemonDetailsByUrl, getPokemons } from '../src/api';
import { Pokemon, PokemonList, Text } from '../src/components';
import useCapitalizedString from '../src/hooks/useCapitalizedString';

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const capitalizedString = useCapitalizedString();

  useEffect(() => {
    (async () => {
      setLoading(true);
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemons(nextUrl);
      setNextUrl(response.nextUrl);
      const pokemonsArray = [];
      for await (const pokemon of response.pokemonList) {
        const pokemonDetails = await getPokemonDetailsByUrl(pokemon.url);
        pokemonsArray.push({
          url: pokemonDetails.species.url,
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
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
            {pokemons.length > 0 && (
              <PokemonList
                pokemons={pokemons}
                loadPokemons={loadPokemons}
                isNext={!!nextUrl}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
