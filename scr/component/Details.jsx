import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Details({ dataName, data }) {
  const styles = StyleSheet.create({
    spacing: {
      marginVertical: 10,
    },
    naming: { fontWeight: 'bold' },
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
