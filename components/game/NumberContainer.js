import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";


function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 24,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.accent,
    fontSize: 36,
    fontWeight: 'bold'
  }
})