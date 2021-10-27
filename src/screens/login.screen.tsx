import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '../components/atoms/button';
import {Gap} from '../components/atoms/gap';
import {TextInput} from '../components/molecules/text-input';
import {AppStackParamList} from '../routes/app.route';

type LoginScreenPropNav = StackNavigationProp<AppStackParamList, 'login'>;
type LoginScreenProps = {
  navigation: LoginScreenPropNav;
};

const Login = ({navigation}: LoginScreenProps) => {
  const username = 'username';
  function onLogin() {
    navigation.replace('home', {username});
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
