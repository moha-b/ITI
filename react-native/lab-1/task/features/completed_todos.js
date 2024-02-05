import {View, Text, FlatList} from "react-native";
import styles from '../style';

const CompletedTodosScreen = ({ route }) => {
    const { completedTodos } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Completed Tasks</Text>
            <FlatList
                data={completedTodos}
                keyExtractor={() => Date.now().toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoContainer}>
                        <Text>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
};

 export default CompletedTodosScreen;