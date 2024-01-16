import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, SetEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    SetEnteredGoalText(enteredText)
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals =>
      [...currentCourseGoals,
      {
        text: enteredGoalText, id: Math.random().toString()
      }])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your Goals!' onChangeText={goalInputHandler} />
        <Button title='Add Goal!' onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 20
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    width: '75%',
    paddingLeft: 5,
    paddingVertical: 5,
    marginRight: 8
  },
  goalsContainer: {
    flex: 5,
  },
});