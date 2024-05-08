import { Text, View } from "react-native";

function PrimaryButton({children}) {
    return <View>
        <Text>{children}</Text>
    </View>
}

export default PrimaryButton;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1
    }
})