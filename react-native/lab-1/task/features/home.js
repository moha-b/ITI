import React, { useState, useEffect } from 'react';
import { View, Text,TextInput, Button, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TodoItem from "./todo_item";
import styles from '../style';

const HomeScreen = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const navigation = useNavigation();

    useEffect(() => {
        const updateDimensions = () => {
            setWindowWidth(Dimensions.get('window').width);
        };

        Dimensions.addEventListener('change', updateDimensions);
    }, []);

    const addTask = () => {
        if (task.trim() !== '' && !todos.includes(task)) {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        const completedTask = `✅ ${newTodos[index]}`;
        setCompletedTodos([...completedTodos, completedTask]);
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const buttonColor = {
        backgroundColor: windowWidth > 400 ? '#4CAF50' : '#3F51B5',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>TODOS App</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task"
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <Button
                    style={[styles.addButton, buttonColor]}
                    onPress={addTask}
                    title="Add"
                />
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TodoItem
                        item={item}
                        index={index}
                        navigation={navigation}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                    />
                )}
            />
            {completedTodos.length > 0 && (
                <Button
                    title="View Completed"
                    onPress={() => navigation.navigate('Completed', { completedTodos })}
                />
            )}
        </View>
    );
};
export default HomeScreen;