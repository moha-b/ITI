import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Slices/todoSlice";
import { completeTodoDelete } from "../Redux/Slices/completedSlice";
import { unCompleteTodoDelete } from "../Redux/Slices/uncompletedSlice";
import { completeTodoAdd } from "../Redux/Slices/completedSlice";
import { TodoDetails } from "../utils/Constants";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import CustomAlert from "../Components/Alert";

const Todo = ({ todos }) => {
  const dispatch = useDispatch();
  const { completedTodos } = useSelector((state) => state.completedTodos);
  const [alertVisible, setAlertVisible] = useState(false);
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  const ShowDetails = (todo) => {
    navigation.navigate(TodoDetails, todo);
  };

  const markAsCompleted = (todo) => {
    const isTodoCompleted = completedTodos.includes(todo);
    if (!isTodoCompleted) {
      dispatch(completeTodoAdd(todo));
      dispatch(unCompleteTodoDelete(todo.id));
      setAlertVisible(true);
      setMessage("Task added Successfully");
    } else {
      setAlertVisible(true);
      setMessage("Tasks added already");
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTodo(id));
    dispatch(completeTodoDelete(id));
    dispatch(unCompleteTodoDelete(id));
  };

  return (
    <FlatList
      style={styles.flatList}
      data={todos}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          activeOpacity={0.8}
          onPress={() => {
            ShowDetails(item);
          }}
        >
          <View style={styles.timeView}>
            <Text style={styles.textTodo}>{item.selectedTime}</Text>
          </View>
          <View style={styles.dataView}>
            <Text style={styles.textTodo}>{item.title}</Text>
            <Text style={styles.textTodo}>{item.selectedDate}</Text>
          </View>
          <View style={styles.iconsView}>
            <FontAwesome
              style={styles.icon}
              name="check-square-o"
              onPress={() => markAsCompleted(item)}
            />
            <FontAwesome
              style={styles.icon}
              name="trash-o"
              onPress={() => handleDeleteTask(item.id)}
            />
          </View>
          <CustomAlert
            visible={alertVisible}
            title="Error❗"
            message={message}
            onConfirm={() => setAlertVisible(false)}
            showCancel={false}
            showConfirm={true}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Todo;
