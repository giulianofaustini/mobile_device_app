

import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import {TextWithThemes} from './TextWithThemes';
import { theme } from './theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    height: 100,
  },
});

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <TextWithThemes color="primary" fontSize="subheading" fontWeight="bold">
          Repositories
        </TextWithThemes>
      </Pressable>
    </View>
  );
};



