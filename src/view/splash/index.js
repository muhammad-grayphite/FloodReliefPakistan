import React, { useEffect } from 'react'
import { View, Text, Image, StatusBar, Platform } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { splash_logo } from '../../constants/images'
import styles from './styles'
import Footer from '../../components/AppFooter';
import { red } from '../../constants/colors';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch({
                ...StackActions.replace('HomeScreen'),
            });
        }, 3000)
    }, [])



    return (
        <View style={{ flex: 1 }}>

            <View style={styles.wraper}>
                <Text style={styles.text_style}>Flood</Text>
                <Text style={styles.text_style}>Relief</Text>
                <Text style={styles.text_style}>Pakistan</Text>
                {/* <Image
                    source={splash_logo}
                    resizeMode={'contain'}
                    style={{ width: '70%', height: '70%' }}
                /> */}
            </View>
            <Footer />

        </View>
    )
}

export default Splash