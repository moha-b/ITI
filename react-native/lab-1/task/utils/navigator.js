import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../features/home";
import DetailsScreen from "../features/details";

const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default HomeStack;