

import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import {TextWithThemes} from './TextWithThemes';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
    height: 100,
  },
});

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <TextWithThemes color="white" fontSize="subheading" fontWeight="bold">
          Repositories
        </TextWithThemes>
      </Pressable>
    </View>
  );
};



