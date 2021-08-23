import React from 'react';
import { navigate } from '../../App';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import OneBook from './OneBook';
const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 2,
    borderColor: '#DFDCE5FF',
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
