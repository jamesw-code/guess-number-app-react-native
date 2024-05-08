import { TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        console.log('Confrim!');
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                value={enteredNumber}
                onChangeText={numberInputHandler} 
                />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                    >Reset</PrimaryButton>
                </View>
                
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={confirmInputHandler}
                    >Confirm</PrimaryButton>
                </View>
                
            </View>
        </View>
    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        backgroundColor: '#62063c'
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }

})