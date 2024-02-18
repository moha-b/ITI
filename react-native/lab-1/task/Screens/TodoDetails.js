import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";

const TodoDetailsScreens = () => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title : {route.params.title}</Text>
      <Text style={styles.text}>Description : {route.params.description}</Text>
      <Text style={styles.text}>Task Time : {route.params.selectedTime}</Text>
      <Text style={styles.text}>Task Date : {route.params.selectedDate}</Text>
    </View>
  );
};

export default TodoDetailsScreens;
