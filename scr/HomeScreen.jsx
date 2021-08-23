import React, { useState } from 'react';
import { Text, Alert, ScrollView, View, StyleSheet } from 'react-native';
import SearchBar from './component/SearchBar';
import BooksList from './component/BooksList';
import useSearchResult from './hooks/useSearchResult';

export default function HomeScreen() {
  const [
    selectedCategory,
    setSelectedCategory,
    onSubmit,
    setTerm,
    resultArray,
  ] = useSearchResult();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#97B3D0FF',
    },
  });

  return (
    <>
      <View style={styles.container}>
        <SearchBar
          selectedCategory={selectedCategory}
          onSelected={(itemValue) => setSelectedCategory(itemValue)}
          onSubmit={onSubmit}
          onChange={(newTerm) => setTerm(newTerm)}
        />
        {/* {resultArray && resultArray.length > 1 ? (
        <Text>there are item: {resultArray.length} </Text>
      ) : null} */}
        <ScrollView>
          <BooksList result={resultArray} />
        </ScrollView>
      </View>
    </>
  );
}
