import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Details({ dataName, data }) {
  const styles = StyleSheet.create({});
  return (
    <>
      {data ? (
        <Text numberOfLines={5}>
          <Text style={styles.naming}>The {dataName}:</Text>
          <Text style={styles.description}>{data}</Text>
        </Text>
      ) : (
        <Text>
          <Text style={styles.naming}>The {dataName}:</Text>
          <Text numberOfLines={1} style={styles.description}>
            No {dataName} provided
          </Text>
        </Text>
      )}
    </>
  );
}
