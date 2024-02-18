import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import TodoDetailsScreens from "../Screens/TodoDetails";
import { Home, TodoDetails } from "../utils/Constants";
import { styles } from "../styles/styles";

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: styles.stackNavText,
        headerStyle: styles.stackNav,
      }}
    >
      <Stack.Screen
        name={Home}
        component={HomeScreen}
        options={{
          title: "New Tasks",
        }}
      />
      <Stack.Screen
        name={TodoDetails}
        component={TodoDetailsScreens}
        options={{
          title: "Task Details",
        }}
      />
    </Stack.Navigator>
  );
}


