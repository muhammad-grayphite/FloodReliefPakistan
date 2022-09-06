import React from "react";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { black, offwhite } from "../../constants/colors";


const styles = StyleSheet.create({
    wraper: {
        flex: 0.94,
    },
    content_in_center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list_style: {
        paddingHorizontal: 15,
        // paddingBottom: 10,

    },
    heading_color: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: offwhite,
    },
    flatList: {
        height: hp(35)
    },
    list_text: {
        color: black,
        fontSize: 16,
        paddingBottom: 10,
    }
})

export default styles