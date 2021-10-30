import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {MovieType} from '../../screens/home.screen';
import {colors} from '../../styles/colors';
import {normalize} from '../../utils/normalize';
import {Gap} from '../atoms/gap';

// export type IMovieCardProps = {
//   title: string;
// };

const MovieCard: React.FC<any> = item => {
  const navigation = useNavigation<any>();
  const navigateToDetail = () => {
    navigation.navigate('detail', {item});
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
    margin: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailPotrait: {
    width: '100%',
    height: normalize(250),
    borderRadius: normalize(16),
  },
  titleText: {
    color: colors.white,
    fontSize: normalize(16),
    textAlign: 'center',
    fontWeight: '600',
  },
});
