import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Hello = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Hello;