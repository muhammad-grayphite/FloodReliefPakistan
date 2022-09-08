import React from 'react';
import { Platform, View, StatusBar } from 'react-native';
import Footer from './src/components/AppFooter';
import { red } from './src/constants/colors';
import AppNavigator from './src/navigators';

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      {Platform.OS == 'android' ?
        <StatusBar
          animated={true}
          backgroundColor={red}
          barStyle={'dark-content'}
        /> : null}
      <AppNavigator />

      <View style={{ position: 'absolute', bottom: 0 }}>
      </View>
    </View>
  );
};



export default App;
