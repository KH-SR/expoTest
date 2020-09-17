import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'HYOTEI',
        headerBackTitleVisible: false,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#00adff' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="list" component={MemoListScreen} />
      <Stack.Screen name="detail" component={MemoDetailScreen} />
      <Stack.Screen name="edit" component={MemoEditScreen} />
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
