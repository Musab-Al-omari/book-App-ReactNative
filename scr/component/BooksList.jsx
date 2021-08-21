import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  myImage: {
    width: 150,
    height: 150,
  },
  authors: {
    fontWeight: 'bold',
  },
});
export const AnimeList = ({ result }) => {
  console.log('result', result);
  return (
    <>
      <View>
        <FlatList
          renderItem={({ item }) => (
            <>
              <Text>{item.volumeInfo.title}</Text>
              <Text>{item.id}</Text>
              <Text>--{item.volumeInfo.authors.join(' && ')}</Text>
              <Image
                style={styles.myImage}
                source={item.volumeInfo.imageLinks.smallThumbnail}
              />
            </>
          )}
          data={result}
        />
      </View>
    </>
  );
};
export default AnimeList;
