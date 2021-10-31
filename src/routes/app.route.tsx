import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Detail, Home, Login} from '../screens';
import {MovieType} from '../screens/home.screen';
import {Search} from '../screens/search.screen';

export type AppStackParamList = {
  login: undefined;
  home: {username: string};
  detail: {item: MovieType};
  search: undefined;
};

const App = createStackNavigator<AppStackParamList>();

export default function AppRoute() {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="login" component={Login} />
      <App.Screen name="home" component={Home} />
      <App.Screen name="detail" component={Detail} />
      <App.Screen name="search" component={Search} />
    </App.Navigator>
  );
}
