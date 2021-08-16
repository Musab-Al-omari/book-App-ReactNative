import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import SearchBar from './component/SearchBar';
import Anime from './api/Anime';
// import axios from 'axios';
export default function HomeScreen() {
  const [term, setTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('anime');
  const [resultArray, setResultArray] = useState([]);
  console.log(term);
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  const onSubmit = function () {
    if (term == '') {
      createTwoButtonAlert();
      console.log('hi');
      return;
    }
    Anime.get(`${selectedCategory}`, {
      params: {
        q: term,
      },
    })
      .then((data) => {
        console.log(data.data.results);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <SearchBar
        selectedCategory={selectedCategory}
        onSelected={(itemValue) => setSelectedCategory(itemValue)}
        onSubmit={onSubmit}
        onChange={(newTerm) => setTerm(newTerm)}
      />
      {resultArray && resultArray.length}
      <Text>asds </Text>
    </>
  );
}
