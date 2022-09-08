import React from "react";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { black, offwhite } from "../../constants/colors";


const styles = StyleSheet.create({
    wraper: {
        flex: 1,
    },
    content_in_center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list_style: {
        paddingHorizontal: 15,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    circle: {
        width: 5,
        height: 5,
        borderRadius: 5 / 2,
        backgroundColor: black,
        // marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    heading_color: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: offwhite,
    },
    flatList: {
        height: hp(38)
    },
    list_text: {
        color: black,
        fontSize: 16,
        marginLeft: 5,
    }
})

export default styles