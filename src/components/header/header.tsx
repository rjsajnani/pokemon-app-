import { Image, View } from 'react-native';
import { HeaderStyle as styles } from './header.style';
import { HeaderProps as Props } from './header.props';

export const Header: React.FC<Props> = (props) => {
  const { image } = props;

  return (
    <View style={styles.container}>
      <View style={styles.bgStyles} />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};
