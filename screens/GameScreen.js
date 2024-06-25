import { useState, useEffect } from "react";
import {View, Text, StyleSheet, Alert } from "react-native";

import Colors from "../util/colors";

import Title from "../components/ui/title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";

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

function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if(currentGuess === userNumber) {
      console.log("Current Guess: " + currentGuess + "vs " + userNumber)
      console.log("Game is Over!");
      onGameOver();
    }
  })

  function nextGuessHandler(direction) {

    if(
      (direction === 'lower' && userNumber > currentGuess) ||
      (direction === 'greater' && userNumber < currentGuess)
    ) {
      console.log('Direction: ' + direction)
      console.log('Current Guess: ' + currentGuess)
      console.log('userNumber: ' + userNumber)
      Alert.alert("Are you sure?", "Was that correct?", [{text: 'Sorry', style: 'cancel'}])
      return;
    }


    if(direction === 'lower'){
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1; 
    }
    console.log('minBoundary: ' + minBoundary)
    console.log('maxBoundary: ' + maxBoundary)
    console.log('currentGuess: ' + currentGuess)
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Oponents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.instructionText}>Higher or Lower?</Text>
        
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>  
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>

      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
  instructionText: {
    color: Colors.accent,
    fontSize: 24,
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});
