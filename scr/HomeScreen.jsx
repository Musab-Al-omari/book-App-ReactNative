import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import SearchBar from './component/SearchBar';
import Book from './api/Bookapi';
import BooksList from './component/BooksList';

export default function HomeScreen() {
  const [term, setTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('intitle');
  const [resultArray, setResultArray] = useState([]);
  console.log(term);
  const createTwoButtonAlert = (title, message) =>
    Alert.alert(title, message, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  const onSubmit = function () {
    if (term == '') {
      createTwoButtonAlert(
        'pls insert data',
        "you didn't insert any thing in the search bar "
      );
      console.log('hi');
      return;
    }
    Book.get(`volumes`, {
      params: {
        q: `${term}+${selectedCategory}`,
      },
    })
      .then((data) => {
        // setResultArray(data.data.results);
        console.log(data.data.items);
      })
      .catch(
        createTwoButtonAlert('try other terms ', "we didn't find any thing  ")
      );
  };
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
