import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton({children, onPress}) {

    return( 
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={onPress} 
                android_ripple={{color: '#52063c'}}
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
        backgroundColor:'#82063c',
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