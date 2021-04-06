import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './screens/Game'
import HomeScreen from './screens/Home'
import FinishScreen from './screens/Finish'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Finish" component={FinishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

