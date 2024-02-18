import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";

const NoTasksScreen = () => {
  return (
    <View style={styles.screenNoTasks}>
      <View style={styles.noTasksDesign}></View>
      <View style={styles.noTasksDesign}></View>
      <View style={styles.noTasksDesign}></View>
      <Text style={styles.textNoTasks}>No Tasks Found</Text>
    </View>
  );
};

export default NoTasksScreen;
