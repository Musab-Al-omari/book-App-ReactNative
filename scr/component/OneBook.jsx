import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#ABD1C9FF',
    margin: 15,
  },
  subContainer: {
    flex: 1,
  },
  myImage: {
    borderRadius: 20,
    width: 150,
    height: 150,
  },
  titles: {
    marginVertical: 15,
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  naming: { fontWeight: 'bold', marginLeft: 8, marginVertical: 5 },
  description: {
    fontSize: 15,
  },
});
export default function OneBook({ item, navigate }) {
  function onPress() {
    return;
  }
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.myImage}
            source={{
              uri: item.volumeInfo.imageLinks
                ? item.volumeInfo.imageLinks.smallThumbnail
                : 'https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-78-150x150.png',
            }}
          />
        </View>

        <View style={styles.subContainer}>
          <Text numberOfLines={1} style={styles.titles}>
            {item.volumeInfo.title}
          </Text>
          <Text numberOfLines={1} style={{ marginVertical: 5 }}>
            <Text style={styles.naming}>BookID:</Text>
            <Text style={styles.description}>{item.id}</Text>
          </Text>

          {item.volumeInfo.authors ? (
            <Text numberOfLines={1}>
              <Text style={styles.naming}>The Author:</Text>
              <Text style={styles.description}>
                {item.volumeInfo.authors.join(' && ')}
              </Text>
            </Text>
          ) : (
            <Text>
              <Text style={styles.naming}>The Author:</Text>
              <Text numberOfLines={1} style={styles.description}>
                unknown
              </Text>
            </Text>
          )}

          {item.volumeInfo.averageRating ? (
            <Text style={(styles.naming, { marginVertical: 5 })}>
              Rating: {item.volumeInfo.averageRating}
            </Text>
          ) : (
            <Text style={styles.naming}>Rating: no Rating</Text>
          )}
        </View>
      </View>
    </>
  );
}
