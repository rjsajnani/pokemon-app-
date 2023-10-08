import { ActivityIndicator, FlatList } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { Card } from '../card';
import useCapitalizedString from '../../hooks/useCapitalizedString';
import { Pokemon, PokemonListProps as Props } from './pokemon-list.props';

const gap = 10;

export const PokemonList: React.FC<Props> = (props) => {
  const { pokemons, loadPokemons, isNext } = props;

  const router = useRouter();
  const capitalizedString = useCapitalizedString();

  const loadMore = () => {
    isNext && loadPokemons();
  };

  const renderItem = ({ item }: { item: Pokemon }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: 'details/id/',
            params: { id: item.id, name: item.name },
          });
        }}
      >
        <Card
          image={item.image}
          id={item.id}
          name={capitalizedString(item.name)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      renderItem={renderItem}
      data={pokemons}
      numColumns={2}
      keyExtractor={(item) => item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap }}
      columnWrapperStyle={{ gap }}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext ? <ActivityIndicator size="large" color="#AEAEAE" /> : <></>
      }
    />
  );
};
