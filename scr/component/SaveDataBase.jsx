import React from 'react';
import {
  Alert,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import dataBase from '../api/dataBase';
import { navigate } from '../../App';
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 15,
    width: 80,
    backgroundColor: '#F0DA9F',
  },
  textStyle: {
    textAlign: 'center',
  },
});

export default function SaveDataBase({ text, item }) {
  //   const createTwoButtonAlert = (title, message) => {
  //     Alert.alert(title, message, [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       { text: 'OK', onPress: () => console.log('OK Pressed') },
  //     ]);
  //   };

  function onPress() {
    //   createTwoButtonAlert(
    //     `No ${text} link`,
    //     `there are no ${text} link provided by the source`
    //   );

    const DataBody = {
      id: item.id,
      title: item.volumeInfo.title || '',
      authors: item.volumeInfo.authors || '',
      publisher: item.volumeInfo.publisher || '',
      publishedDate: item.volumeInfo.publishedDate || '',
      description: item.volumeInfo.description || '',
      averageRating: item.volumeInfo.averageRating,
      ratingsCount: item.volumeInfo.ratingsCount,
      imgUrl:
        item.volumeInfo.imageLinks.smallThumbnail ||
        'https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-78-150x150.png',
      previewLink: item.volumeInfo.previewLink || '',
      buyLink: item.saleInfo.buyLink || '',
    };

    // console.log('DataBody', DataBody);
    dataBase
      .post('bookApp', DataBody)
      .then((data) => {
        console.log('data11', data);
        navigate('My Books', { id: data._id });
      })
      .catch((err) => console.log(err.response.data));
    // dataBase.post('bookApp', DataBody).then((data) => {
    //   console.log('asdasd', data.data);
    // });
  }
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
