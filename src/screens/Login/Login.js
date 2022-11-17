import React from 'react';
import {Image, View, StatusBar} from 'react-native';

import WelcomeText from '../../components/WelcomeText';
import LoginText from '../../components/LoginText';
import Button from '../../components/Button';
import Form from '../../components/Form';
import useForm from '../../hooks/useForm';
import {useAuthContext} from '../context/authContext';
import SIGNIN_FIELDS from './signInFields';
import handleSubmit from '../../utils/handleSubmit';
import t from '../../utils/translate';

const styles = require('../../styles/styles');

const Login = ({navigation}) => {
  const [formState, handleInput, validateFields, resetFields] =
    useForm(SIGNIN_FIELDS);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image
        style={styles.elipse}
        source={require('../../assets/elipse.png')}
      />

      <View style={{alignItems: 'center', marginTop: 140}}>
        <WelcomeText welcome={t('login.welcomeText')} />
        <Image
          style={styles.imgTittle}
          source={require('../../assets/login.png')}
        />
      </View>
      <Form
        formState={formState}
        handleInput={handleInput}
        inputStyle={styles.input}
      />
      <Button
        label="Log In"
        onPress={() =>
          handleSubmit({
            formState,
            validateFields,
            resetFields,

            postUrl: 'http://localhost:3001/user/login',
          })
        }
      />
      <LoginText
        text={t('login.loginText')}
        log={t('login.login')}
        screenName={'Register'}
      />
    </View>
  );
};

export default Login;
