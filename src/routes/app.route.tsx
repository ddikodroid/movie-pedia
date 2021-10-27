import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login} from '../screens';

export type AppStackParamList = {
  login: undefined;
  home: {username: string};
};

const App = createStackNavigator<AppStackParamList>();

export default function AppRoute() {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="login" component={Login} />
      <App.Screen name="home" component={Home} />
    </App.Navigator>
  );
}
