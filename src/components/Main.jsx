
import { Text, StyleSheet, View, Pressable } from "react-native";
import { RepositoryList} from "./RepositoryList"
import { AppBar } from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

export const Main = () => {
  return (
    <View>
      <View>
        <Pressable>
          <AppBar />
        </Pressable>
      </View>
      <View style={styles.container}>
        <RepositoryList />
      </View>
    </View>
  );
};

