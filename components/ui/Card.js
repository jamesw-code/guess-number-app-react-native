import { View, StyleSheet } from 'react-native';

import Colors from '../../util/colors';

function Card({ children }) {
  return <View style={styles.inputContainer}>
    {children}
  </View>
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    backgroundColor: Colors.primary600
  },
})