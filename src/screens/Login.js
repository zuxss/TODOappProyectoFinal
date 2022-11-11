import React from 'react';
import {Image, View, StatusBar, KeyboardAvoidingView} from 'react-native';

import WelcomeText from '../components/WelcomeText';
import LoginText from '../components/LoginText';
import Button from '../components/Button';
import Input from '../components/TextInput';

const styles = require('../styles/styles');

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image style={styles.elipse} source={require('../assets/elipse.png')} />

      <View style={{alignItems: 'center', marginTop: 140}}>
        <WelcomeText welcome="Welcome Back!" />
        <Image
          style={styles.imgTittle}
          source={require('../assets/login.png')}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.inputGroup}>
        <Input input="Enter your email" />
        <Input input="Enter your password" />
      </KeyboardAvoidingView>

      <Button label="Log In" />
      <LoginText text="Don't have an account?" log="Sign Up" />
    </View>
  );
};

export default Login;
