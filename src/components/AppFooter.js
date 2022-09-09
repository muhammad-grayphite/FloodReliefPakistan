import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { widthPercentageToDP } from "react-native-responsive-screen";
import { grey, red } from "../constants/colors";
import { company_logo } from "../constants/images";

const Footer = (props) => {
    return (

        <View style={styles.wraper}>
            <Text style={styles.small_text}>from</Text>
            <Image
                source={company_logo}
                resizeMode={'contain'}
                style={{ width: '100%', height: 25, }}
            />
        </View>
    )
}
export default Footer

const styles = StyleSheet.create({
    wraper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPercentageToDP(100),
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: red
    },
    text_style: {
        color: grey,
        fontSize: 12,
        marginLeft: 10,
        fontWeight: 'normal',
    },
    small_text: {
        color: 'white',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        marginBottom: 10,
        opacity: 0.85
    }
})

