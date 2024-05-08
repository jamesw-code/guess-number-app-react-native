import { Text, StyleSheet } from "react-native";

function GameScreen() {
    return <Text style={styles.screen}>Game Screen</Text>
}

export default GameScreen; 

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:24
    }
})