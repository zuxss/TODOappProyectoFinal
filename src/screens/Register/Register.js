import React from 'react';
import {Image, View, StatusBar} from 'react-native';
import Button from '../../components/Button';
import Form from '../../components/Form';
import WelcomeText from '../../components/WelcomeText';
import SecondaryText from '../../components/SecondaryText';
import LoginText from '../../components/LoginText';
import SIGNUP_FIELDS from './signUpFields';
import useForm from '../../hooks/useForm';
const styles = require('../../styles/styles');
import {useAuthContext} from '../../context/authContext';
import handleSubmit from '../../utils/handleSubmit';
import t from '../../utils/translate';

const Register = ({navigation}) => {
  const [formState, handleInput, validateFields, resetFields] =
    useForm(SIGNUP_FIELDS);
  const {setToken} = useAuthContext();

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
      <View style={{alignItems: 'center', marginTop: 180}}>
        <WelcomeText welcome={t('register.welcomeText')} />
        <SecondaryText secondaryText={t('register.secondaryText')} />
      </View>
      <Form
        formState={formState}
        handleInput={handleInput}
        formStyle={styles.inputGroup}
        inputStyle={styles.input}
      />

      <Button
        onPress={() =>
          handleSubmit({
            formState,
            validateFields,
            resetFields,
            setToken,
            postUrl: 'http://localhost:3001/user/register',
          })
        }
        label={t('register.button')}
      />

      <LoginText
        text={t('register.loginText')}
        log={t('register.login')}
        screenName={'Login'}
      />
    </View>
  );
};

export default Register;
