import React from "react";
import StackNav from "../Routes/StackNative";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Completed_Tasks,
  Stacknav,
  UnCompleted_Tasks,
  screenWidth,
} from "../utils/Constants";
import CompletedScreen from "../Screens/CompletedScreen";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import UncompletedTasks from "../Screens/UncompletedTasks";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: styles.text,
        headerStyle: styles.container,
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: "indigo",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={Stacknav}
        component={StackNav}
        options={{
          headerShown: false,
          title: "Tasks",
          tabBarIcon: () => <Entypo name="home" size={25} color="#3F4080" />,
        }}
      />
      <Tab.Screen
        name={Completed_Tasks}
        component={CompletedScreen}
        options={{
          title: "Completed Tasks",
          tabBarIcon: () => (
            <Ionicons name="checkmark-done-circle" size={25} color="#3F4080" />
          ),
        }}
      />
      <Tab.Screen
        name={UnCompleted_Tasks}
        component={UncompletedTasks}
        options={{
          title: "Uncompleted Tasks",
          tabBarIcon: () => (
            <MaterialIcons
              name="wifi-protected-setup"
              size={25}
              color="#3F4080"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: screenWidth / 35,
  },
  container: {
    backgroundColor: "#3F4080",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
