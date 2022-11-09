import React from 'react';
import {Pressable, Text} from 'react-native';

const styles = require('../styles/styles');

const Button = textButton => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonLabel}>{textButton.label}</Text>
    </Pressable>
  );
};

export default Button;
