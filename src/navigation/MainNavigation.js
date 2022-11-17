import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import GetStarted from '../screens/GetStarted';
import Home from '../screens/Home/Home';
import AddTask from '../screens/AddTask/AddTask';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AddTask" component={AddTask} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
