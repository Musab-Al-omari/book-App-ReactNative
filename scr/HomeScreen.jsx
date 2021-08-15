import React, { useState } from 'react';
import { Text } from 'react-native';
import SearchBar from './component/SearchBar';
export default function HomeScreen() {
  const [term, setTerm] = useState('');
  console.log(term);

  const onSubmit = function () {
    console.log('hello');
  };
  return (
    <>
      <SearchBar
        term={term}
        onSubmit={onSubmit}
        onChange={(newTerm) => setTerm(newTerm)}
      />
      <Text>hello </Text>
    </>
  );
}
