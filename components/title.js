import { View, Text, StyleSheet } from "react-native";

function Title({children}) {
    return(
        <View>
            <Text style={styles.title}>{ children}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color:'#ddb52f',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#ddb52f'
    }
  });