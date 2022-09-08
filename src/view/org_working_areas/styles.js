import React from "react";
import { StyleSheet } from "react-native";
import { black, offwhite } from "../../constants/colors";
const styles = StyleSheet.create({
    wraper: {
        flex: 1
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
    },

    circle: {
        width: 7,
        height: 7,
        borderRadius: 7 / 2,
        backgroundColor: black,
        marginLeft: 20,
    },
    heading_color: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: offwhite,
    },
    content_in_center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default styles