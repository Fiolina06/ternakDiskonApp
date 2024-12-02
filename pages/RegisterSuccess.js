import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegisterSuccess = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Registration Successful!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default RegisterSuccess;
