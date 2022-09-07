import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { splash_logo } from '../../constants/images'
import styles from './styles'

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
                <Image
                    source={splash_logo}
                    resizeMode={'contain'}
                    style={{ width: '70%', height: '70%' }}
                />
            </View>
        </View>
    )
}

export default Splash