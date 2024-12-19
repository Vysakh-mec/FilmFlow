import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import DetailsScreen from "./src/screens/DetailsScreen"

export default function App() {

  const Stack = createStackNavigator()
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='splash' component={SplashScreen} /> 
        <Stack.Screen name='tab' component={BottomTabNavigation} />
        <Stack.Screen name='mv-detail' component={DetailsScreen} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitle: ""
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
