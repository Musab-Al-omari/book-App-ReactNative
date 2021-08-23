import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 7,
    backgroundColor: '#DFDCE5FF',
    height: 35,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  Feather: {
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  TextInput: {
    flex: 5,
    fontSize: 20,
  },
  Picker: {
    flex: 3,
    backgroundColor: '#DFDCE5FF',
  },
});

export default function SearchBar({
  selectedCategory,
  onSelected,
  onChange,
  onSubmit,
}) {
  return (
    <View style={styles.container}>
      <Feather style={styles.Feather} name="search" size={35} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
        style={styles.TextInput}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        placeholder="Search"
      />
      <Picker
        style={styles.Picker}
        selectedValue={selectedCategory}
        onValueChange={onSelected}
      >
        <Picker.Item label="Title" value="title" />
        <Picker.Item label="Author" value="author" />
      </Picker>
    </View>
  );
}
