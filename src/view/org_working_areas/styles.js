import React from "react";
import { StyleSheet } from "react-native";
import { black, offwhite } from "../../constants/colors";
const styles = StyleSheet.create({
    wraper: {
        flex: 1
    },
    list_style: {
        // paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,

    },
    list_text: {
        color: black,
        fontSize: 16,
        marginLeft: 10,

        // paddingBottom: 10,
    },

    circle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: black,
        marginLeft: 20,
    },
    heading_color: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: offwhite,
    },
})
export default styles