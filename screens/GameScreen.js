import { useState } from "react";
import {View, Text, StyleSheet } from "react-native";

import Title from "../components/ui/title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if(rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);


  return (
    <View style={styles.screen}>
      <Title>Oponents Guess</Title>
      <NumberContainer>{initialGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
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
