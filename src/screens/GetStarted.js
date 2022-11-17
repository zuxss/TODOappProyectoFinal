import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import Button from '../components/Button';
import WelcomeText from '../components/WelcomeText';
import SecondaryText from '../components/SecondaryText';
const styles = require('../styles/styles');
import t from '../utils/translate';
import {useNavigation} from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image style={styles.elipse} source={require('../assets/elipse.png')} />

      <Image
        style={{width: 200, height: 200, marginTop: 200}}
        source={require('../assets/onboarding.png')}
      />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <WelcomeText welcome={t('getStarted.welcomeText')} />
        <SecondaryText secondaryText={t('getStarted.secondaryText')} />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: '10%',
          width: '100%',
          alignItems: 'center',
        }}>
        <Button
          label={t('getStarted.button')}
          screenName={'Login'}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </View>
  );
};

export default GetStarted;
