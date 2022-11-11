import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import Button from '../components/Button';
import WelcomeText from '../components/WelcomeText';
import SecondaryText from '../components/SecondaryText';
const styles = require('../styles/styles');

const GetStarted = () => {
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
        <WelcomeText welcome="Gets Thing done with TODo" />

        <SecondaryText secondaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  " />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: '10%',
          width: '100%',
          alignItems: 'center',
        }}>
        <Button label="Get Started" />
      </View>
    </View>
  );
};

export default GetStarted;
