import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { red } from "../constants/colors";


const Heading = (props) => {
    const { heading } = props
    return (
        <Text style={styles.text_color}>{heading}</Text>

    )
}
export default Heading

const styles = StyleSheet.create({
    wraper: {

    },
    text_color: {
        color: red,
        fontSize: 12,
        fontWeight: '700',
    }
})
