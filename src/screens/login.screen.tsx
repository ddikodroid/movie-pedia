import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '../components/atoms/button';
import {Gap} from '../components/atoms/gap';
import {TextInput} from '../components/molecules/text-input';
import {AppStackParamList} from '../routes/app.route';
import {useForm, Controller} from 'react-hook-form';

type LoginScreenPropNav = StackNavigationProp<AppStackParamList, 'login'>;
type LoginScreenProps = {
  navigation: LoginScreenPropNav;
};

const Login = ({navigation}: LoginScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onBlur'});
  const onLogin = data => {
    console.log(data);
    if (!errors.email && !errors.password) {
      navigation.replace('home');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Required field',
          },
          validate: value => value === 'user' || 'Username is incorrect',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Username"
            placeholder="Enter your username"
            containerStyle={styles.margin}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            infoMessage={errors?.username?.message}
            keyboardType="email-address"
          />
        )}
        name="username"
      />
      <Gap height={8} />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Required field',
          },
          validate: value => value === 'password' || 'Password is incorrect',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            containerStyle={styles.margin}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            infoMessage={errors?.password?.message}
          />
        )}
        name="password"
      />
      <Gap height={16} />
      <Button
        onPress={handleSubmit(onLogin)}
        title="LOGIN"
        buttonStyle={styles.margin}
      />
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
