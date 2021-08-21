import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
  myImage: {
    width: 150,
    height: 150,
    margin: 'auto',
  },
  titles: {
    flex: 4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  authors: {
    margin: 'auto',
    fontSize: 13,
    fontWeight: 'normal',
  },
  id: {
    flex: 1,
    position: 'relative',
  },
  titleBar: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: '20%',
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#DDDDDD',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default function OneBook({ item }) {
  function onPress() {
    return;
  }
  return (
    <>
      <View style={styles.titleBar}>
        <Text style={styles.titles}>{item.volumeInfo.title}</Text>
        <Text style={styles.id}>BookID:{item.id}</Text>
      </View>
      {item.volumeInfo.authors ? (
        <Text style={styles.authors}>
          The author: {item.volumeInfo.authors.join(' && ')}
        </Text>
      ) : (
        <Text style={styles.authors}>The author: unknown</Text>
      )}

      <Image
        style={styles.myImage}
        source={{
          uri: item.volumeInfo.imageLinks
            ? item.volumeInfo.imageLinks.smallThumbnail
            : 'https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-78-150x150.png',
        }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
