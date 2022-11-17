import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = require('../styles/styles');

export default function LoginText(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.loginText}>
      <Text style={{fontWeight: 'bold', color: 'grey'}}>
        {props.text}{' '}
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate(props.screenName)}>
          {props.log}{' '}
        </Text>
      </Text>
    </View>
  );
}
