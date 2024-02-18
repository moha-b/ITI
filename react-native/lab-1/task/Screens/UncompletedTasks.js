import React from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import Todo from "../Components/Todo";
import NoTasksScreen from "../Screens/NoTasksScreen";
import { styles } from "../styles/styles";

const UncompletedTasks = () => {
  const { unCompletedTodos } = useSelector((state) => state.unCompletedTodos);

  return (
    <View style={styles.container}>
      {unCompletedTodos.length > 0 ? (
        <Todo todos={unCompletedTodos} />
      ) : (
        <NoTasksScreen />
      )}
    </View>
  );
};

export default UncompletedTasks;
