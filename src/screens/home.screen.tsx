import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Alert, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../routes/app.route';
import {RouteProp} from '@react-navigation/core';
import axios from 'axios';
import {MovieCard} from '../components/molecules/movie-card';
import {SkeletonLoader} from '../components/atoms/skeleton-loader';
import {MovieCardSkeleton} from '../components/molecules/movie-card-skeleton';
import {LoadMoreSkeleton} from '../components/molecules/load-more-movie-skeleton';
import {Header} from '../components/molecules/header';
import {SearchCard} from '../components/organisms/search-card';

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

const Home = ({navigation}: HomeScreenProps) => {
  const [loading, setLoading] = useState(true);
  const [latestMovie, setLatestMovie] = useState<any>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getLatestMovie = () => {
      axios
        .get(
          `https://api-filmapik.herokuapp.com/latest?page=${page}&maxResult=6`,
        )
        .then(response => {
          setLatestMovie([...latestMovie, ...response.data.result]);
          setLoading(false);
        })
        .catch(error => Alert.alert('Request Failed ' + error));
    };
    getLatestMovie();
  }, [page]);

  const loadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };
  const renderLatestMovies = result => {
    return <MovieCard {...result.item} />;
  };

  const renderMovieCardSkeleton = () => (
    <SkeletonLoader loader={MovieCardSkeleton} />
  );

  const renderLoadMoreMovieSkeleton = () => (
    <SkeletonLoader loader={LoadMoreSkeleton} />
  );

  const renderHeaderComponent = () => <SearchCard />;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Latest Movies" />
      <FlatList
        data={latestMovie}
        renderItem={renderLatestMovies}
        numColumns={2}
        style={styles.scrollableContainer}
        ListEmptyComponent={renderMovieCardSkeleton}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={renderHeaderComponent}
        ListFooterComponent={loading ? renderLoadMoreMovieSkeleton : null}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
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
