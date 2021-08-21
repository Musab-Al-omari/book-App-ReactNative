import { useEffect, useState } from 'react';
import Book from '../api/Bookapi';
import { Text, Alert } from 'react-native';
export default () => {
  const [term, setTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('title');
  const [resultArray, setResultArray] = useState([]);

  const createTwoButtonAlert = (title, message) => {
    Alert.alert(title, message, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };
  ///////////////////////////////////////////////////////////
  const onSubmit = function () {
    if (term == '') {
      createTwoButtonAlert(
        'pls insert data',
        "you didn't insert any thing in the search bar "
      );
      return;
    }
    Book.get(`volumes`, {
      params: {
        q: `${term}+${selectedCategory}`,
      },
    })
      .then((data) => {
        setResultArray(data.data.items);
        console.log(data.data.items);
      })
      .catch(
        createTwoButtonAlert('try other terms ', "we didn't find any thing  ")
      );
  };

  useEffect(() => {
    Book.get(`volumes`, {
      params: {
        q: `gone with the wind+title`,
      },
    })
      .then((data) => {
        setResultArray(data.data.items);
        console.log(data.data.items);
      })
      .catch(
        createTwoButtonAlert('try other terms ', "we didn't find any thing  ")
      );
  }, []);
  return [
    selectedCategory,
    setSelectedCategory,
    onSubmit,
    setTerm,
    resultArray,
  ];
};
