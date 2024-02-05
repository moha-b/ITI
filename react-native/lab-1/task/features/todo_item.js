import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style';

const TodoItem = ({ item, index, navigation, deleteTask, toggleComplete }) => {
    return (
        <View style={styles.todoContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', { task: item })}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
            <View style={styles.alignItems}>
                <TouchableOpacity onPress={() => deleteTask(index)}>
                    <Icon name="trash" size={20} color="#FF0000" />
                </TouchableOpacity>
                <View style={styles.space}></View>
                <TouchableOpacity onPress={() => toggleComplete(index)}>
                    <Icon name="check" size={20} color="#4CAF50" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TodoItem;