import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, SetEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        SetEnteredGoalText(enteredText)
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        SetEnteredGoalText('');
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='your Goals!'
                onChangeText={goalInputHandler}
                value={enteredGoalText} />
            <Button title='Add Goal!' onPress={addGoalHandler} />
        </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
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
});