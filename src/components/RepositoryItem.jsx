
import React from 'react';
import { View, Text } from 'react-native';



export const RepositoryItem = ({ item }) => {
  return (
    <View >
      <Text >Full name: {item.fullName}</Text>
      <Text >Description: {item.description}</Text>
      <Text >Language: {item.language}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Review: {item.reviewCount}</Text>
      <Text>Url: {item.ownerAvatarUrl}</Text>
    
    </View>
  );
};




