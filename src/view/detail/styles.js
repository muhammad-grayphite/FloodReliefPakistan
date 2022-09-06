import React from "react";
import { StyleSheet } from "react-native";
import { black, offwhite } from "../../constants/colors";
const styles = StyleSheet.create({
    wraper: {
        flex: 0.94,
    },
    heading_color: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: offwhite,
    },
    list_style: {
        // paddingHorizontal: 15,
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
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: black,
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',

    }

})
export default styles