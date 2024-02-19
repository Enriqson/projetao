import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Avatar from "./screens/Avatar";
import Activities from "./screens/Activities";
import Achievement from "./screens/Achievement";

import "./styles.css";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="Achievement" component={Achievement} />
        <Stack.Screen name="Avatar" component={Avatar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
