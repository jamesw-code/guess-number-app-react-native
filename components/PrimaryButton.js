import { Text, View, Pressable, StyleSheet } from "react-native";

import Colors from "../util/colors";

function PrimaryButton({children, onPress}) {

    return( 
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={onPress} 
                android_ripple={{color: Colors.primary500}}
                style={({pressed}) => 
                    pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                    >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable> 
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        boarderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        borderRadius: 8,
    },
    buttonInnerContainer: {
        backgroundColor:Colors.primary800,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,  
    }
})