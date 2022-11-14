import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const styles = require('../styles/styles');

const Button = textButton => {
  const navigation = useNavigation();
  return (
    <View style={styles.button}>
      <Pressable
        onPress={() => {
          navigation.navigate(textButton.screenName);
        }}>
        <Text style={styles.buttonLabel}>{textButton.label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
