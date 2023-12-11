
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: 'gray',
  },
  language: {
    marginTop: 8,
    backgroundColor: '#0366d6', // GitHub's language color
    padding: 6,
    borderRadius: 4,
    color: 'white',
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>{item.fullName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.language}>{item.language}</Text>
      {/* Add more details as needed (forks, stars, etc.) */}
    </View>
  );
};

export default RepositoryItem;
