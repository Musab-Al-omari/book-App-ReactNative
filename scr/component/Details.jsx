import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Details({ dataName, data }) {
  const styles = StyleSheet.create({
    spacing: {
      marginHorizontal: 20,
      marginVertical: 10,
    },
    naming: { fontWeight: 'bold', marginHorizontal: 20 },
  });
  return (
    <>
      {data ? (
        <Text style={styles.spacing}>
          <Text style={styles.naming}>The {dataName}:</Text>
          <Text style={styles.description}>{data}</Text>
        </Text>
      ) : (
        <Text style={styles.spacing}>
          <Text style={styles.naming}>The {dataName}:</Text>
          <Text numberOfLines={1} style={styles.description}>
            No {dataName} provided
          </Text>
        </Text>
      )}
    </>
  );
}
