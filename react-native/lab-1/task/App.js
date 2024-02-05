import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./utils/navigator";
import CompletedTodosScreen from "./features/completed_todos";
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Icon name="home" size={20} color="#4CAFF1"/>
                    ),
                }}/>
                <Tab.Screen name="Completed" component={CompletedTodosScreen} options={{
                    tabBarIcon: () => (
                        <Icon name="check" size={20} color="#4CAF50"/>
                    ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default App;