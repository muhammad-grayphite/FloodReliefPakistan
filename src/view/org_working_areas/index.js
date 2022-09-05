import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getFundraisers } from "../../redux/reducers/fundraisers_reducer";


import styles from "./styles";

const OrgWorkingArea = ({ navigation, route }) => {
    let area = route?.params?.area.replace(/^\uFEFF/, '')
    console.log('area', area.length)


    const dispatch = useDispatch()
    const fundraisers = useSelector((state) => ({ ...state.fundraisers }))
    const loading = fundraisers.loading
    const fundraisers_list = fundraisers.fundraisers_list?.values

    let filterd = fundraisers_list.filter((item) => {
        console.log()

        // if (item[1].includes('Taunsa')) {
        //     console.log(typeof item[1])
        //     return item
        // }
        if (item[1].includes(area.split(' ').join(''))) {
            console.log(area == 'Taunsa')
            console.log(typeof item[1])

            return item
        }
    })

    console.log('filterd', filterd)



    return (
        <View style={styles.wraper}>
            <Text>
                {area}
            </Text>

        </View>
    )
}
export default OrgWorkingArea
