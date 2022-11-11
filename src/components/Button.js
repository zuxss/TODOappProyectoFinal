import React from 'react';
import {Pressable, Text, View} from 'react-native';

const styles = require('../styles/styles');

const Button = textButton => {
  return (
    <View style={styles.button}>
      <Pressable>
        <Text style={styles.buttonLabel}>{textButton.label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
