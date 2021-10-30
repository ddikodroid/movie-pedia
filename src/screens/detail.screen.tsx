import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header} from '../components/molecules/header';
import {colors} from '../styles/colors';
import {DetailImage} from '../components/atoms/detail-image';
import {SectionTitle} from '../components/atoms/section-title';
import {normalize} from '../utils/normalize';
import {Rating} from 'react-native-ratings';
import YoutubePlayer from 'react-native-youtube-iframe';

export type IDetailScreenProps = {
  navigation: any;
  route: any;
};

const Detail: React.FC<IDetailScreenProps> = ({navigation, route}) => {
  const {item} = route.params;
  const strippedDesc = item.detail.description.substring(1);
  const movieRating = item.rating === 'N/A' ? 1 : item.rating;
  const videoId = item.detail?.trailer?.replace(
    'https://www.youtube.com/embed/',
    '',
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={item.title}
        leftContent={{
          icon: 'arrow-back',
          onPress: () => navigation.goBack(),
        }}
      />
      <ScrollView>
        <DetailImage uri={item.detail.thumbnailLandscape} />
        <View style={styles.margin}>
          <SectionTitle title="Rating" style={styles.detailSectionTitle} />
          <Rating
            type="star"
            startingValue={movieRating}
            ratingCount={10}
            imageSize={24}
            readonly
            tintColor={colors.primary}
            style={styles.ratingContainer}
          />
          <SectionTitle title="Director" style={styles.detailSectionTitle} />
          <Text style={styles.infoText}>{item.detail.director}</Text>
          <SectionTitle title="Actors" style={styles.detailSectionTitle} />
          <Text style={styles.infoText}>{item.detail.actors}</Text>
          <SectionTitle title="Storyline" style={styles.detailSectionTitle} />
          <Text style={styles.infoText}>{strippedDesc}</Text>
          {item.detail.trailer !== null ? (
            <>
              <SectionTitle title="Trailer" style={styles.detailSectionTitle} />
              <YoutubePlayer height={normalize(200)} videoId={videoId} />
            </>
          ) : null}
        </View>
      </ScrollView>
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
    fontSize: normalize(15),
  },
  playTrailerButton: {
    backgroundColor: colors.primary,
  },
  detailSectionTitle: {
    fontSize: normalize(18),
    marginVertical: normalize(8),
    color: colors.lightGrey,
  },
  ratingContainer: {alignSelf: 'flex-start'},
});
