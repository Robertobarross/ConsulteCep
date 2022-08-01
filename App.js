import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import Dashboard from './src/pages/dashboard';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#9400D3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'Arial',
        },
      }}>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }}
      /> 

      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ title: 'Dashboard'}}
      /> 
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
