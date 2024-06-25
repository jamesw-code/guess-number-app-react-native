import { TextInput, View,Text, StyleSheet, Alert, Image } from "react-native";
import Title from "../components/ui/title";
import Colors from "../util/colors";

function GamesOverScreen(){
    return (
    <View style={styles.rootContainer}>
        <Title >Game Over</Title>
        <View style={styles.imageContainer}>
            <Image
            style={styles.image} 
            source={require('../assets/images/success.png')} 
            />
        </View>
        <Text>Your Phone needed X rounds to guess the number Y</Text>
    </View> 
    );
}


export default GamesOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding:24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        boarderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        height: '100%',
        width: '100%'
    }
});