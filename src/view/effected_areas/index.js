import React, { useEffect, useReducer } from "react";
import { View, Text, FlatList, ActivityIndicator, Pressable } from "react-native";
import AppHeader from "../../components/AppHeader";
import Heading from "../../components/Heading";
import styles from "./styles";

function EffectedAreas({ navigation, route }) {
    const areas = route.params.areas
    let array_length = areas?.length

    let areasArray = [...areas.item]

    if (areasArray?.length > 1) {
        areasArray.shift()

    }

    useEffect(() => {

    }, [])

    const render_effected_areas = (item, index) => {
        return (
            <Pressable
                onPress={() => { navigation.navigate('OrganizationList', { area: item?.item }) }}
                style={styles.list_style} >
                <View style={styles.circle}></View>
                <Text style={styles.list_text}>{item?.item}</Text>
            </Pressable >
        )
    }

    return (
        <View style={styles.wraper}>
            <AppHeader
                title={'Affected areas'}
                leftIconName={'arrowleft'}
                leftIconType={'antdesign'}
                leftPress={() => navigation.goBack()}
            />

            <View style={styles.flatList}>
                <View style={styles.heading_color}>
                    <Heading heading={'Areas'} />
                </View>
                <FlatList
                    data={areasArray}
                    renderItem={render_effected_areas}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => 'a' + Math.random()}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                />
            </View>

            <View style={styles.flatList}>
                <View style={styles.heading_color}>
                    <Heading heading={'Organization'} />
                </View>
                <FlatList
                    data={areasArray}
                    renderItem={render_effected_areas}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => 'a' + Math.random()}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                />
            </View>
        </View>
    )
}
export default EffectedAreas