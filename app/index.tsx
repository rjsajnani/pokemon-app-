import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, SafeAreaView, TextInput } from 'react-native';

import { Styles as styles } from './index.style';
import {
  PokemonInfo,
  getAllPokemons,
  getPokemonDetailsByUrl,
  getPokemons,
} from '../src/api';
import { Pokemon, PokemonList, SearchInput, Text } from '../src/components';

type PokemonDetails = {
  url: string;
  id: number;
  name: string;
  image: string;
};

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsToFind, setPokemonsToFind] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await loadPokemons();
    })();
  }, []);

  const createPokemonDetails = async (
    pokemons: PokemonInfo[],
  ): Promise<PokemonDetails[]> => {
    const pokemonsArray: PokemonDetails[] = [];
    for await (const pokemon of pokemons) {
      const pokemonDetails = await getPokemonDetailsByUrl(pokemon.url);
      pokemonsArray.push({
        url: pokemonDetails.species.url,
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        image: pokemonDetails.sprites.other['official-artwork'].front_default,
      });
    }
    return pokemonsArray;
  };

  const loadPokemons = async () => {
    try {
      const response = await getPokemons(nextUrl);
      setNextUrl(response.nextUrl);
      const pokemonsArray: PokemonDetails[] = await createPokemonDetails(
        response.pokemonList,
      );

      setPokemons([...pokemons, ...pokemonsArray]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const findPokemon = async () => {
    try {
      let response = await getAllPokemons();
      response = response.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      const pokemonsArray: PokemonDetails[] = await createPokemonDetails(
        response,
      );

      setPokemonsToFind(pokemonsArray);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const onChangeSearch = (query: string) => {
    setSearchText(query);
    if (query === '') {
      setPokemonsToFind([]);
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
            <Text text="Pokemon List" presets="header1" />
            <SearchInput
              onChangeSearch={onChangeSearch}
              findPokemon={findPokemon}
              searchText={searchText}
            />
            {pokemons.length > 0 && (
              <PokemonList
                pokemons={
                  searchText.length >= 1 && pokemonsToFind.length >= 1
                    ? pokemonsToFind
                    : pokemons
                }
                loadPokemons={loadPokemons}
                isNext={pokemonsToFind.length > 0 ? false : !!nextUrl}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
