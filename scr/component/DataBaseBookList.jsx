import React from 'react';
import { navigate } from '../../App';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import OneBookDataBace from './OneBookDataBase';
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
          keyExtractor={(result) => result._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('Item Screen', { item })}
              >
                <OneBookDataBace item={item} />
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
