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
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoute from './src/routes/app.route';

export default function App() {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
}
