import React from 'react';
import {TextInput, KeyboardAvoidingView} from 'react-native';
import t from '../utils/translate';

const styles = require('../styles/styles');

function Form({inputStyle, formState, handleInput}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.inputGroup}>
      {Object.keys(formState).map(field => (
        <TextInput
          key={field}
          value={formState[field]}
          onChangeText={value => handleInput(field, value)}
          style={inputStyle}
          secureTextEntry={field === 'password' || field === 'passwordConfirm'}
          placeholder={
            field === 'passwordConfirm'
              ? t('input.placeholderPasswordConfirm')
              : t('input.placeholderDefault')(field)
          }
        />
      ))}
    </KeyboardAvoidingView>
  );
}

export default Form;
