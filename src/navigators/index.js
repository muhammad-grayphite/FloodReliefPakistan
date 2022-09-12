import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../view/splash';
import Home from '../view/home';
import Detail from '../view/detail';
import OrgWorkingArea from '../view/org_working_areas';
import EffectedAreas from '../view/affected_areas';


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

function HomeNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="OrganizationList" component={OrgWorkingArea} />
            <Stack.Screen name="EffectedAreas" component={EffectedAreas} />
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
                <Stack.Screen name="HomeScreen" component={HomeNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;