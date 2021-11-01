import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Alert,
  FlatList,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {SkeletonLoader} from '../components/atoms/skeleton-loader';
import {Header} from '../components/molecules/header';
import {LoadMoreSkeleton} from '../components/molecules/load-more-movie-skeleton';
import {MovieCard} from '../components/molecules/movie-card';
import {MovieCardSkeleton} from '../components/molecules/movie-card-skeleton';
import {TextInput} from '../components/molecules/text-input';
import {colors} from '../styles/colors';
import {normalize} from '../utils/normalize';

export type ISearchProps = {
  navigation: any;
};

const Search: React.FC<ISearchProps> = ({navigation}) => {
  const searchCategories = ['Country', 'Genre'];
  const [category, setCategory] = useState(searchCategories[0]);
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const search = getSearchResult({c: category, q: query, p: page});
    return () => {
      search;
    };
  }, [page]);

  const getSearchResult = ({c, q, p}) => {
    if (query !== '') {
      const cat = c === 'Genre' ? 'category' : c.toLowerCase();
      axios
        .get(
          `https://api-filmapik.herokuapp.com/${cat}?search=${q}&page=${p}&maxResult=20`,
        )
        .then(response => {
          console.log(response);
          setSearchResult([...searchResult, ...response.data.result]);
          setLoading(false);
        })
        .catch(error => Alert.alert('Request Failed ' + error));
    } else {
      return Alert.alert('Search field is empty');
    }
  };

  console.log(query);
  const loadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  const renderLoadMoreMovieSkeleton = () => (
    <SkeletonLoader loader={LoadMoreSkeleton} />
  );

  const renderSearchResult = result => {
    return <MovieCard {...result.item} />;
  };
  const renderMovieCardSkeleton = () => (
    <SkeletonLoader loader={MovieCardSkeleton} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Search Movies"
        leftContent={{icon: 'arrow-back', onPress: () => navigation.goBack()}}
      />
      <View style={styles.searchBarContainer}>
        <SelectDropdown
          data={searchCategories}
          defaultValueByIndex={0}
          onSelect={selectedItem => {
            setCategory(selectedItem);
          }}
          buttonStyle={styles.buttonDropdownContainer}
          dropdownStyle={styles.dropdownContainer}
          rowTextStyle={styles.dropdownText}
          buttonTextStyle={styles.dropdownText}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
        />
        <TextInput
          placeholder={'Search movies...'}
          withIcon
          iconName="search"
          onChangeText={text => setQuery(text)}
          onPressIcon={() => getSearchResult({c: category, q: query, p: page})}
          containerStyle={styles.textInputContainer}
          style={styles.textInput}
        />
      </View>
      <FlatList
        data={searchResult}
        renderItem={renderSearchResult}
        numColumns={2}
        style={styles.scrollableContainer}
        ListEmptyComponent={renderMovieCardSkeleton}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={loading ? renderLoadMoreMovieSkeleton : null}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
      />
    </SafeAreaView>
  );
};

export {Search};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070d2d',
  },
  textInputContainer: {
    width: '74%',
  },
  textInput: {borderTopRightRadius: 0, borderBottomRightRadius: 0},
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(16),
    justifyContent: 'space-between',
  },
  buttonDropdownContainer: {
    width: '25%',
    borderRadius: normalize(8),
    backgroundColor: colors.white,
  },
  dropdownContainer: {
    borderRadius: normalize(8),
  },
  dropdownText: {
    fontSize: normalize(14),
  },
  scrollableContainer: {
    width: '100%',
    padding: normalize(8),
  },
  contentContainer: {
    justifyContent: 'space-between',
  },
});
