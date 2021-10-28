import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Alert, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../routes/app.route';
import {RouteProp} from '@react-navigation/core';
import axios from 'axios';
import {MovieCard} from '../components/molecules/movie-card';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {SectionTitle} from '../components/atoms/section-title';

type HomeScreenNavProp = StackNavigationProp<AppStackParamList, 'home'>;
type HomeScreenRouteProp = RouteProp<AppStackParamList, 'home'>;
type HomeScreenProps = HomeScreenNavProp & HomeScreenRouteProp;

export type MovieType = {
  title: string;
  thumbnailPotrait: string;
  rating: string;
  quality: string;
  movieId: string;
  detail: {
    trailer: string;
    views: string;
    genre: string;
    director: string;
    actors: string;
    country: string;
    duration: string;
    release: string;
    thumbnailLandscape: string;
    description: string;
  };
};

interface IRenderLatestMovieProps {
  result: {
    item: MovieType;
  };
  onPress: () => void;
}

const Home = ({navigation, route}: HomeScreenProps) => {
  const {username} = route.params;
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [latestMovie, setLatestMovie] = useState<MovieType[] | []>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getLatestMovie = async () => {
      axios
        .get('https://api-filmapik.herokuapp.com/latest?maxResult=10?page=1')
        .then(response => {
          setLatestMovie(response.data.result);
          setLoading(false);
        })
        .catch(error => Alert.alert('Request Failed ' + error));
    };
    getLatestMovie();
  }, []);

  useEffect(() => {
    const getLatestMovie = async () => {
      axios
        .get(
          `https://api-filmapik.herokuapp.com/latest?maxResults=6?page=${page}`,
        )
        .then(response => {
          if (page > 1) {
            let arr = [...latestMovie, response.data.result];
            setLatestMovie(arr);
          } else {
            console.log(response.data);
            setLatestMovie(response.data.result);
          }
        })
        .catch(error => Alert.alert('Request Failed ' + error));
    };
    getLatestMovie();
  }, [page]);

  const onSearch = () => {
    console.log(query);
    setQuery('');
  };

  const renderLatestMovies = result => {
    return <MovieCard {...result.item} />;
  };

  const renderMovieCardSkeleton = () => (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        justifyContent="space-between"
        marginHorizontal={8}>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={170} height={220} borderRadius={8} />
          <SkeletonPlaceholder.Item
            width={170}
            height={20}
            borderRadius={8}
            marginTop={8}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={170} height={220} borderRadius={8} />
          <SkeletonPlaceholder.Item
            width={170}
            height={20}
            borderRadius={8}
            marginTop={8}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInput
        placeholder={'Search movies...'}
        withIcon
        iconName="search"
        onChangeText={text => setQuery(text)}
        onPressIcon={onSearch}
        containerStyle={styles.margin}
      /> */}
      <SectionTitle title="Latest Movies" style={styles.margin} />
      <FlatList
        data={latestMovie}
        renderItem={renderLatestMovies}
        numColumns={2}
        style={styles.scrollableContainer}
        ListEmptyComponent={renderMovieCardSkeleton}
        contentContainerStyle={styles.contentContainer}
        onEndReached={() => {
          return setPage(page + 1);
        }}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070d2d',
  },
  margin: {
    marginHorizontal: 8,
  },
  scrollableContainer: {
    width: '100%',
    padding: 8,
  },
  contentContainer: {
    justifyContent: 'space-between',
  },
});
