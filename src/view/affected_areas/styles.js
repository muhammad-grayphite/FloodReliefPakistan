import React from "react";
import { StyleSheet } from "react-native";
import { black, offwhite } from "../../constants/colors";

const styles = StyleSheet.create({
    wraper: {
        flex: 1,

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
        width: 7,
        height: 7,
        borderRadius: 7 / 2,
        backgroundColor: black,
        marginLeft: 20,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    flatList: {
        flex: 0.5
    },
    heading_color: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: offwhite,
    },
})

export default styles