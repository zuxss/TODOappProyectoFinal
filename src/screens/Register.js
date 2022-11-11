import React from 'react';
import {
  Image,
  View,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '../components/Button';
import Input from '../components/TextInput';
import WelcomeText from '../components/WelcomeText';
import SecondaryText from '../components/SecondaryText';
import LoginText from '../components/LoginText';

const styles = require('../styles/styles');

const Register = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image style={styles.elipse} source={require('../assets/elipse.png')} />
      <View style={{alignItems: 'center', marginTop: 180}}>
        <WelcomeText welcome="Welcome Onboard!" />
        <SecondaryText secondaryText="Let's help you meet with your task" />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.inputGroup}>
        <Input input="Enter your full name" />
        <Input input="Enter your email" />
        <Input input="Enter your password" />
        <Input input="Confirm password" />
      </KeyboardAvoidingView>

      <Button label="Register" />
      <LoginText text="Do you alredy have an Account?" log="Sign In" />
    </View>
  );
};

export default Register;
