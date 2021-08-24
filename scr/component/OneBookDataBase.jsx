import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#DFDCE5FF',
    backgroundColor: '#ABD1C9FF',
    margin: 15,
  },
  subContainer: {
    marginHorizontal: 5,
    flex: 1,
  },
  myImage: {
    borderColor: '#DFDCE5FF',
    borderWidth: 1,
    borderRadius: 20,
    width: 150,
    height: 150,
  },
  titles: {
    marginVertical: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  naming: { fontWeight: 'bold', marginVertical: 5 },
  description: {
    fontSize: 13,
  },
});
export default function OneBookDataBase({ item }) {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.myImage}
            source={{
              uri: item.imgUrl
                ? item.imgUrl
                : 'https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-78-150x150.png',
            }}
          />
        </View>

        <View style={styles.subContainer}>
          <Text numberOfLines={1} style={styles.titles}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={{ marginVertical: 5 }}>
            <Text style={styles.naming}>BookID:</Text>
            <Text style={styles.description}>{item.id}</Text>
          </Text>

          {item.authors ? (
            <Text numberOfLines={1}>
              <Text style={styles.naming}>The Author:</Text>
              <Text style={styles.description}>
                {item.authors.join(' && ')}
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

          {item.averageRating ? (
            <Text style={(styles.naming, { marginVertical: 5 })}>
              Rating: {item.averageRating}
            </Text>
          ) : (
            <Text style={styles.naming}>Rating: no Rating</Text>
          )}
        </View>
      </View>
    </>
  );
}
