import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOS Activated!</Text>
      <Text style={styles.message}>
        Your emergency contacts have been alerted.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Send SOS')}>
        <Text style={styles.buttonText}>Send SOS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red', // Example color
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SosScreen;