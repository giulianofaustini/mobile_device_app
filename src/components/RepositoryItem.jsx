
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
    backgroundColor: '#0366d6', 
    padding: 6,
    borderRadius: 4,
    color: 'white',
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>Full name: {item.fullName}</Text>
      <Text style={styles.description}>Description: {item.description}</Text>
      <Text style={styles.language}>Language: {item.language}</Text>
      <Text style={styles.description}>Forks: {item.forksCount}</Text>
      <Text style={styles.description}>Stars: {item.stargazersCount}</Text>
      <Text style={styles.description}>Rating: {item.ratingAverage}</Text>
      <Text style={styles.description}>Review: {item.reviewCount}</Text>
      <Text style={styles.description}>Url: {item.ownerAvatarUrl}</Text>
    
    </View>
  );
};



export default RepositoryItem;
