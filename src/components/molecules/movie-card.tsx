import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {MovieType} from '../../screens/home.screen';
import {Gap} from '../atoms/gap';

// export type IMovieCardProps = {
//   title: string;
// };

const MovieCard: React.FC<any> = item => {
  const navigateToDetail = () => {
    console.log(item);
  };
  return (
    <Pressable onPress={navigateToDetail} style={styles.cardContainer}>
      <Image
        source={{uri: item.thumbnailPotrait}}
        style={styles.thumbnailPotrait}
        resizeMode="contain"
      />
      <Gap height={4} />
      <Text style={styles.titleText}>{item.title}</Text>
    </Pressable>
  );
};

export {MovieCard};

const styles = StyleSheet.create({
  cardContainer: {
    width: '45%',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailPotrait: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
  titleText: {
    color: '#e8e8e8',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
