import React from 'react';
import {Image, View, Text} from 'react-native';

const styles = require('../styles/styles');

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Image
          style={styles.userImg}
          source={require('../assets/user-icon.png')}
        />
        <Text style={styles.buttonLabel}>Bienvenido Usuario</Text>
      </View>
    </View>
  );
};

export default UserInfo;
