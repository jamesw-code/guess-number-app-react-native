import { View, Text, StyleSheet } from "react-native";

import Colors from "../../util/colors";

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
      color: Colors.white,
      textAlign: 'center',
      borderWidth: 2,
      borderColor: Colors.white,
      padding: 8
    }
  });