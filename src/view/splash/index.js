import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import AppHeader from '../../components/AppHeader'
import styles from './styles'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen')
        }, 2000)
    }, [])



    return (
        <View style={{ flex: 1 }}>
            <View style={styles.wraper}>
                <Text>Splash</Text>
            </View>
        </View>
    )
}

export default Splash