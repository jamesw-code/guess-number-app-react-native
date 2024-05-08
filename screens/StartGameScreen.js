import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return(
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        marginTop: 100,
    }
})