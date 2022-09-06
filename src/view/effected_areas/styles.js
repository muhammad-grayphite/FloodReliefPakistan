import React from "react";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { black, offwhite } from "../../constants/colors";

const styles = StyleSheet.create({
    wraper: {
        flex: 0.94,

    },
    list_style: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,

    },
    list_text: {
        color: black,
        fontSize: 16,
        marginLeft: 10,
        flex: 1,
    },

    circle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: black,
        marginLeft: 20,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    flatList: {
        // height: hp(40)
        flex: 0.5
    },
    heading_color: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: offwhite,
    },
})

export default styles