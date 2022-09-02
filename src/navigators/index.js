import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../view/splash';

const Stack = createNativeStackNavigator();


function SplashNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={Splash} />
        </Stack.Navigator>
    );
}


function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Splash" component={SplashNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;