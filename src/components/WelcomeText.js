import React from 'react';

import {Text} from 'react-native';
const styles = require('../styles/styles');

function WelcomeText(text) {
  return <Text style={styles.textTittle}>{text.welcome}</Text>;
}

export default WelcomeText;
