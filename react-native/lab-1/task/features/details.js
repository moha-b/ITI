import {View, Text} from "react-native";
import styles from '../style';

const DetailsScreen = ({ route }) => {
    const  task  = route?.params?.task;
    if (task){
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Task Details</Text>
                <View style={styles.todoItem}>
                    <Text>{task}</Text>
                </View>
            </View>
        );
    }else{
        return (
            <View>
                <Text>No Tasks Available</Text>
            </View>
        )
    }
};

export default DetailsScreen;