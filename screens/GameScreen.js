import { useState } from "react";
import {View, Text, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if(rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    console.log(currentGuess + ' '+ userNumber)
    if(
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Are you sure?", "Was that correct?", [{text: 'Sorry', style: 'cancel'}])
      return;
    }

    if(direction === 'lower'){
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1; 
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Oponents Guess</Title>
      <NumberContainer>{initialGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
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
