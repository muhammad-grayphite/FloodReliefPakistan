import React, { useEffect, useReducer } from "react";
import { View, Text, FlatList, ActivityIndicator, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../components/AppFooter";

import AppHeader from "../../components/AppHeader";
import Heading from "../../components/Heading";
import { regions } from "../../constants/constantsValues";
import styles from "./styles";

function EffectedAreas({ navigation, route }) {

    const fundraisers = useSelector((state) => ({ ...state.fundraisers }))
    const loading = fundraisers.loading
    const fundraisers_list = fundraisers.fundraisers_list?.values


    const areas = route.params.areas
    let areas_list = [...areas.item]

    const filterd_orgs = fundraisers_list?.filter(item => item[regions[areas_list[0]]] === 'TRUE')

    if (areas_list?.length > 1) {
        areas_list.shift()

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

    const render_organization = (item, index) => {
        return (
            <Pressable
                onPress={() => { navigation.navigate('Detail', { detail: item }) }}
                style={styles.list_style} >
                <View style={styles.circle}></View>
                <Text style={styles.list_text}>{item?.item[0]}</Text>
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
                    data={areas_list}
                    renderItem={render_effected_areas}
                    showsVerticalScrollIndicator={true}
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
                    data={filterd_orgs}
                    renderItem={render_organization}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={item => 'a' + Math.random()}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                />
            </View>

        </View>
    )
}
export default EffectedAreas