import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



import screen1 from "./Screen01";
import Screen2 from "./Screen02";

let Stack = createStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="screen1" component={screen1} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}