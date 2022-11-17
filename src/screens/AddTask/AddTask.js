import React from 'react';
import {Image, View, StatusBar, TextInput} from 'react-native';
import Button from '../../components/Button';
import Form from '../../components/Form';
import WelcomeText from '../../components/WelcomeText';

const styles = require('../../styles/styles');

const AddTask = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image
        style={styles.elipse}
        source={require('../../assets/elipse.png')}
      />
      <View style={{width: '100%', alignItems: 'center', marginTop: '80%'}}>
        <WelcomeText welcome="Add Task" />
        <TextInput style={styles.input}></TextInput>
        <Button label="Add" />
      </View>
    </View>
  );
};

export default AddTask;
