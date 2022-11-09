import React from 'react';
import {TextInput} from 'react-native';

const styles = require('../styles/styles');
function Input(text) {
  return <TextInput placeholder={text.input} style={styles.input} />;
}

export default Input;
