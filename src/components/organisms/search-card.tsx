import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors';
import {normalize} from '../../utils/normalize';
import {Button} from '../atoms/button';
import {Gap} from '../atoms/gap';

export type ISearchCardProps = {};

const SearchCard: React.FC<ISearchCardProps> = ({}) => {
  const {navigate} = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Looking for some movies?</Text>
        <Gap height={8} />
        <Button title="Search movies" onPress={() => navigate('search')} />
      </View>
      <Gap height={8} />
    </>
  );
};

export {SearchCard};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: normalize(16),
    fontWeight: '500',
  },
  container: {
    width: '100%',
  },
});
