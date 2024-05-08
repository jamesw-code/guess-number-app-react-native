import {View, StyleSheet } from "react-native";

import Title from "../components/title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Oponents Guess</Title>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
});
