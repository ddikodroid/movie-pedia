import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'red',
  },
});
