import React from 'react';
import {Linking, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/molecules/header';
import {colors} from '../styles/colors';
import {Button} from '../components/atoms/button';
import {DetailImage} from '../components/atoms/detail-image';
import {SectionTitle} from '../components/atoms/section-title';
import {normalize} from '../utils/normalize';

export type IDetailScreenProps = {
  navigation: any;
  route: any;
};

const Detail: React.FC<IDetailScreenProps> = ({navigation, route}) => {
  const {item} = route.params;
  const strippedDesc = item.detail.description.substring(1);
  console.log(item.detail.description);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={item.title}
        leftContent={{
          icon: 'arrow-back',
          onPress: () => navigation.goBack(),
        }}
      />
      <DetailImage uri={item.detail.thumbnailLandscape} />
      {item.detail.trailer !== null ? (
        <Button
          title="Play trailer video"
          onPress={() => Linking.openURL(item.detail.trailer)}
          buttonStyle={styles.playTrailerButton}
        />
      ) : null}
      <View style={styles.margin}>
        <SectionTitle title="Storyline" style={styles.detailSectionTitle} />
        <Text style={styles.infoText}>{strippedDesc}</Text>
        <SectionTitle title="Director" style={styles.detailSectionTitle} />
        <Text style={styles.infoText}>{item.detail.director}</Text>
        <SectionTitle title="Actors" style={styles.detailSectionTitle} />
        <Text style={styles.infoText}>{item.detail.actors}</Text>
      </View>
    </SafeAreaView>
  );
};

export {Detail};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  margin: {
    marginHorizontal: normalize(16),
  },
  infoText: {
    color: colors.white,
    fontSize: normalize(14),
  },
  playTrailerButton: {
    backgroundColor: colors.primary,
  },
  detailSectionTitle: {
    fontSize: normalize(18),
    marginVertical: normalize(8),
    color: colors.lightGrey,
  },
});
