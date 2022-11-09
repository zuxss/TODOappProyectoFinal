import React from 'react';
import {View, Text} from 'react-native';

const styles = require('../styles/styles');

export default function LoginText() {
  return (
    <View>
      <Text style={styles.secondaryText}>
        Do you alredy have an Account?{' '}
        <Text style={styles.loginText}>Sign up</Text>
      </Text>
    </View>
  );
}
