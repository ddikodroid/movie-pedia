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
  const [seearchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const getSearchResult = () => {
  //     axios
  //       .get(`https://api-filmapik.herokuapp.com/${category}?search=${query}`)
  //       .then(response => {
  //         setSearchResult([...seearchResult, ...response.data.result]);
  //         setLoading(false);
  //       })
  //       .catch(error => Alert.alert('Request Failed ' + error));
  //   };
  //   if (query !== '') getSearchResult();
  // }, [query, category]);

  // const onSearch = ({q, c}) => {};

  const getSearchResult = ({category, query}) => {
    axios
      .get(`https://api-filmapik.herokuapp.com/${category}?search=${query}`)
      .then(response => {
        setSearchResult([...seearchResult, ...response.data.result]);
        setLoading(false);
      })
      .catch(error => Alert.alert('Request Failed ' + error));
  };

  console.log(query);

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
        <TextInput
          placeholder={'Search movies...'}
          withIcon
          iconName="search"
          onChangeText={text => setQuery(text)}
          onPressIcon={() => getSearchResult({category, query})}
          containerStyle={styles.textInputContainer}
          style={styles.textInput}
        />
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
      </View>
      <FlatList
        data={seearchResult}
        renderItem={renderSearchResult}
        numColumns={2}
        style={styles.scrollableContainer}
        ListEmptyComponent={renderMovieCardSkeleton}
        contentContainerStyle={styles.contentContainer}
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
