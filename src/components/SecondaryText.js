import React from 'react';
import {View, Text} from 'react-native';
const styles = require('../styles/styles');

export default function SecondaryText(text) {
  return <Text style={styles.secondaryText}>{text.secondaryText}</Text>;
}
