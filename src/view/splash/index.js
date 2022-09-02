import React from 'react'
import { View, Text } from 'react-native'

import AppHeader from '../../components/AppHeader'
import styles from './styles'

const Splash = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppHeader
                title={'Splash'}
                leftIconName={'plus'}
                leftIconType={'antdesign'}
            />
            <View style={styles.wraper}>
                <Text>Splash</Text>
            </View>
        </View>
    )
}

export default Splash