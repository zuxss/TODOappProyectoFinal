import React from 'react';
import {View, Text} from 'react-native';

const styles = require('../styles/styles');

export default function LoginText(texts) {
  return (
    <View style={styles.loginText}>
      <Text style={{fontWeight: 'bold', color: 'grey'}}>
        {texts.text}{' '}
        <Text style={styles.loginText} onPress={() => console.log('asd')}>
          {texts.log}{' '}
        </Text>
      </Text>
    </View>
  );
}
