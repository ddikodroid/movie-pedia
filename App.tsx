/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoute from './src/routes/app.route';
import {StatusBar} from 'react-native';
import {setRootViewBackgroundColor} from '@pnthach95/react-native-root-view-background';
import {colors} from './src/styles/colors';

export default function App() {
  useEffect(() => {
    setRootViewBackgroundColor(colors.primary);
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AppRoute />
    </NavigationContainer>
  );
}
