import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.SearchContainer}>
        <TextInput style={styles.textInput} placeholder='your Goals!' />
        <Button title='Add Goal' />
      </View>

      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 20
  },
  SearchContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    width: '75%',
    paddingLeft: 5,
    paddingVertical: 5,
    marginRight: 8
  }
});