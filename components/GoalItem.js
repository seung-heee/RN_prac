import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "skyblue",
        color: 'white',
    },
    goalText: {
        color: 'white'
    }
});