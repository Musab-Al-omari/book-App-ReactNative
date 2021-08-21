import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
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
  return (
    <>
      <SearchBar
        selectedCategory={selectedCategory}
        onSelected={(itemValue) => setSelectedCategory(itemValue)}
        onSubmit={onSubmit}
        onChange={(newTerm) => setTerm(newTerm)}
      />
      {resultArray && resultArray.length > 1 ? (
        <Text>there are item: {resultArray.length} </Text>
      ) : null}
      <BooksList result={resultArray} />
    </>
  );
}
