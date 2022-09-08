import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { grey, offwhite, red } from "../constants/colors";
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
            {/* <Text style={styles.text_style}>Powered by Grayphite</Text> */}
        </View>
    )
}
export default Footer

const styles = StyleSheet.create({
    wraper: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPercentageToDP(100),
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: red
        // height: heightPercentageToDP(30)
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

