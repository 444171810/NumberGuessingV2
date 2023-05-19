import { Text, StyleSheet, Platform } from 'react-native';

function Title({ children }) {
  console.log(`${Platform.OS}`);
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    maxWidth: '80%',
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 0,
    borderColor: 'white',
    padding: 12,
  },
});
