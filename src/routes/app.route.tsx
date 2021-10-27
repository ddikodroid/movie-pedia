import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login} from '../screens';

const App = createStackNavigator();

export default function AppRoute() {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="login" component={Login} />
      <App.Screen name="home" component={Home} />
    </App.Navigator>
  );
}
