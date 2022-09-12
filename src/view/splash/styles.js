import React from "react";
import { StyleSheet } from 'react-native'
import { red } from "../../constants/colors";


const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: red
    },
    text_style: {
        fontSize: 31,
        fontWeight: 'normal',
        fontStyle: 'italic',
        color: 'white',
    }
})

export default styles