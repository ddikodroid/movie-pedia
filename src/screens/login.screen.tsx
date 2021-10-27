import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Button} from '../components/atoms/button';
import {Gap} from '../components/atoms/gap';
import {TextInput} from '../components/molecules/text-input';

const Login = () => {
  function onLogin() {
    console.log('Login');
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Username"
        placeholder="Enter your e-mail"
        containerStyle={styles.margin}
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        containerStyle={styles.margin}
      />
      <Gap height={16} />
      <Button onPress={onLogin} title="LOGIN" buttonStyle={styles.margin} />
    </SafeAreaView>
  );
};

export {Login};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070d2d',
    justifyContent: 'center',
  },
  margin: {
    marginHorizontal: 8,
  },
});
