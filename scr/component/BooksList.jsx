import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  myImage: {
    width: 150,
    height: 150,
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
              <Text>hello</Text>
              <Image style={styles.myImage} source={item.image_url} />
            </>
          )}
          data={result}
        />
      </View>
    </>
  );
};
export default AnimeList;
