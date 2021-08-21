import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import OneBook from './OneBook';
const styles = StyleSheet.create({
  myImage: {
    width: 150,
    height: 150,
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  authors: {
    fontWeight: 'bold',
  },
  id: {
    position: 'relative',
  },
});
export const AnimeList = ({ result }) => {
  console.log('result', result);
  return (
    <>
      <View>
        <FlatList
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => <OneBook item={item} />}
          data={result}
        />
      </View>
    </>
  );
};
export default AnimeList;
