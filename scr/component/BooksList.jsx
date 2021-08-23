import React from 'react';
import { navigate } from '../../App';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import OneBook from './OneBook';
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
  },
});
const BookList = ({ result }) => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('Item Screen', { item })}
              >
                <OneBook item={item} />
              </TouchableOpacity>
            );
          }}
          data={result}
        />
      </View>
    </>
  );
};
export default BookList;
