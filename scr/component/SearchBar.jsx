import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 35,
    borderRadius: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  Feather: {
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  TextInput: {
    flex: 9,
    fontSize: 20,
  },
});
export default function SearchBar({ term, onChange, onSubmit }) {
  return (
    <View style={styles.background}>
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
    </View>
  );
}
