import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { grey, offwhite } from "../constants/colors";
import { company_logo } from "../constants/images";

const Footer = (props) => {
    return (

        <View style={styles.wraper}>
            <Image
                source={company_logo}
                resizeMode={'contain'}
                style={{ width: 25, height: 25, }}
            />
            <Text style={styles.text_style}>Powered by Grayphite</Text>
        </View>
    )
}
export default Footer

const styles = StyleSheet.create({
    wraper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: widthPercentageToDP(100),
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        // height: heightPercentageToDP(30)
    },
    text_style: {
        color: grey,
        fontSize: 12,
        marginLeft: 10,
        fontWeight: 'normal',
    }
})

