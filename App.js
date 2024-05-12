import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GamesOverScreen from './screens/GameOverScreen';

import Colors from './util/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gamesIsOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gamesIsOverHandler} />
  }

  if(gameIsOver) {
    screen = <GamesOverScreen></GamesOverScreen>
  }

  return (
    <LinearGradient colors={[Colors.primary800,Colors.accent]} style={styles.rootScreen}>
      
        <ImageBackground 
          source={require('./assets/images/beach.jpg')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
          >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
        
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
