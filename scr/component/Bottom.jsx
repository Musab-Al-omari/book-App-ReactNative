import React from 'react';
import {
  Alert,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 15,
    width: 80,
    backgroundColor: '#F0DA9F',
  },
  textStyle: {
    textAlign: 'center',
  },
});

export default function Bottom({ text, link }) {
  const createTwoButtonAlert = (title, message) => {
    Alert.alert(title, message, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  function onPress() {
    if (link) {
      Linking.openURL(link);
    } else {
      createTwoButtonAlert(
        `No ${text} link`,
        `there are no ${text} link provided by the source`
      );
    }
  }
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
