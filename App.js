import React from 'react';
import { View } from 'react-native';
import Footer from './src/components/AppFooter';
import AppNavigator from './src/navigators';

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />

      <View style={{ position: 'absolute', bottom: 0 }}>
        <Footer />
      </View>
    </View>
  );
};



export default App;
