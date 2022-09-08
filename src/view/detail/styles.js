import React from "react";
import { StyleSheet } from "react-native";
import { black, offwhite, red } from "../../constants/colors";
const styles = StyleSheet.create({
    wraper: {
        flex: 1,
    },
    heading_color: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: offwhite,
    },
    list_style: {
        marginTop: 10,
    },
    list_text: {
        color: black,
        fontSize: 16,
        paddingBottom: 10,
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    circle: {
        width: 7,
        height: 7,
        borderRadius: 7 / 2,
        backgroundColor: black,
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    copyBtn: {
        alignSelf: 'flex-end',
        backgroundColor: red,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight: 20,
        bottom: 10,
    },
    copy_text: {
        color: 'white',
        fontSize: 15,
        fontWeight: "normal",
    }


})
export default styles