import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login'; // Adjust the path as per your folder structure
import HomeScreen from './screens/Home';  // Adjust the path as per your folder structure
import AboutScreen from './screens/AboutUs'; // Import AboutScreen


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About Us' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
