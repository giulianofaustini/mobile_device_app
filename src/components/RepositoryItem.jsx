import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextWithThemes } from './TextWithThemes';

const formatCount = (count) => {
  if (count >= 1000) {
    const formattedCount = (count / 1000).toFixed(1);
    return `${formattedCount}k`;
  }
  return count.toString();
};

export const RepositoryItem = ({ item, color, fontSize, fontWeight, style }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <TextWithThemes color="textSecondary" fontWeight="bold">
            {item.fullName}
          </TextWithThemes>
          <TextWithThemes color="textPrimary">{item.description}</TextWithThemes>
          <TextWithThemes color="textPrimary" fontWeight="bold" style={{ backgroundColor: '#0366d6' , width: '25%' }} >
            
            {item.language}
          </TextWithThemes>
        </View>
      </View>

      <View>
        <View style={styles.additionalInfoContainer}>
          <View>
            <Text>Forks:</Text>
            <Text>{formatCount(item.forksCount)}</Text>
          </View>
          <View>
            <Text>Stars:</Text>
            <Text>{formatCount(item.stargazersCount)}</Text>
          </View>
          <View>
            <Text>Rating:</Text>
            <Text>{item.ratingAverage}</Text>
          </View>
          <View>
            <Text>Review:</Text>
            <Text>{item.reviewCount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,

  },
  imageContainer: {
  
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
 
  },
  additionalInfoContainer: {
    flexDirection: 'row',
    marginTop: 5,
  
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
