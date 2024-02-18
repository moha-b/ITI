import React from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import Todo from "../Components/Todo";
import NoTasksScreen from "../Screens/NoTasksScreen";
import {styles} from "../styles/styles";

const CompletedScreen = () => {
  const { completedTodos } = useSelector((state) => state.completedTodos);

  return (
    <View style={styles.container}>
      {completedTodos.length > 0 ? (
        <Todo todos={completedTodos} />
      ) : (
        <NoTasksScreen />
      )}
    </View>
  );
};

export default CompletedScreen;
