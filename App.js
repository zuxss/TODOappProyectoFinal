import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation/MainNavigation';
import FlashMessage from 'react-native-flash-message';
import {AuthContextProvider} from './src/context/authContext';

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <MainStackNavigator />
        <FlashMessage position="top" />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
