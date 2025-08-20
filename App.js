//------------------------Screens------------------------
import FirstScreen from "./src/screens/FirstScreen";
import SecondScreen from "./src/screens/SecondScreen";
import ThirdScreen from "./src/screens/ThirdScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name = "First" component = {FirstScreen} options= {{ headerShown: false }} />
        <Stack.Screen name = "Second" component = {SecondScreen} options= {{ headerShown: false }} />
        <Stack.Screen name = "Third" component = {ThirdScreen} options= {{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}