import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/molecules/header';

export type IDetailScreenProps = {
  navigation: any;
  route: any;
};

const Detail: React.FC<IDetailScreenProps> = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header title={item.title} />
      <Text style={styles.white}>{item.movieId}</Text>
    </SafeAreaView>
  );
};

export {Detail};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070d2d',
  },
  margin: {
    marginHorizontal: 8,
  },
  white: {
    color: '#fff',
  },
});
