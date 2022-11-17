import React from 'react';
import {Image, View, StatusBar, Text} from 'react-native';
import UserInfo from '../../components/UserInfo';
import Button from '../../components/Button';
import TaskList from '../../components/TaskList';
import WelcomeText from '../../components/WelcomeText';
import t from '../../utils/translate';
import {useNavigation} from '@react-navigation/native';

const styles = require('../../styles/styles');

const Home = () => {
  const navigation = useNavigation();
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

      <UserInfo />
      <WelcomeText welcome={t('home.welcomeText')} />

      <TaskList />

      <Button
        label="Add"
        onPress={() => {
          navigation.navigate('AddTask');
        }}
      />
    </View>
  );
};

export default Home;
