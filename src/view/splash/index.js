import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { splash_logo } from '../../constants/images'
import styles from './styles'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen')
        }, 5000)
    }, [])



    return (
        <View style={{ flex: 1 }}>
            <View style={styles.wraper}>
                <Image
                    source={splash_logo}
                    resizeMode={'contain'}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
        </View>
    )
}

export default Splash