import React, { useEffect, useReducer } from "react";
import { View, Text, FlatList, ActivityIndicator, Pressable } from "react-native";
import AppHeader from "../../components/AppHeader";
import SearchBar from "../../components/SearchBar";

import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import { getFundraisers } from "../../redux/reducers/fundraisers_reducer";
import { getEffectedAreas } from "../../redux/reducers/effected_areas_reducer";

import Heading from "../../components/Heading";

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const fundraisers = useSelector((state) => ({ ...state.fundraisers }))
    const effected_areas = useSelector((state) => ({ ...state.effected_areas }))
    const loading = fundraisers.loading
    const fundraisers_list = fundraisers.fundraisers_list?.values
    const effectedArea_list = effected_areas?.effected_areas_list?.values






    useEffect(() => {
        // loadData()
        dispatch(getFundraisers())
        dispatch(getEffectedAreas())
    }, [])

    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {}
    )





    const redner_fundraisers_list = (item, index) => {
        return (

            <Pressable onPress={() => navigation.navigate('Detail', { detail: item })}>
                <View style={styles.list_style} >
                    <Text style={styles.list_text}>
                        {item?.item[0]}
                    </Text>
                </View >
            </Pressable>

        )
    }

    const render_affectedareas_list = (item, index) => {
        console.log('item flatlist', item)
        return (
            <Pressable
                onPress={() => { navigation.navigate('EffectedAreas', { areas: item }) }}
                style={styles.list_style} >
                <Text style={styles.list_text}>
                    {item?.item[0]}
                </Text>
            </Pressable >
        )
    }



    return (
        <View style={styles.wraper}>
            <AppHeader
                title={'Home'}
            />
            <SearchBar />

            <View style={styles.heading_color}>
                <Heading
                    heading={'Organization/person'}
                />
            </View>
            {loading ?
                <View style={styles.content_in_center}>
                    <ActivityIndicator
                        color={'black'}
                        size={'small'}
                    />
                </View> :

                <>
                    <View style={styles.flatList}>
                        <FlatList
                            data={fundraisers_list}
                            renderItem={redner_fundraisers_list}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => 'a' + Math.random()}
                            initialNumToRender={20}
                            maxToRenderPerBatch={20}
                        />
                    </View>

                    <View style={styles.heading_color}>
                        <Heading heading={'Regions'} />
                    </View>

                    <View style={styles.flatList}>
                        <FlatList
                            data={effectedArea_list}
                            renderItem={render_affectedareas_list}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => 'a' + Math.random()}
                            initialNumToRender={20}
                            maxToRenderPerBatch={20}
                        />
                    </View>
                </>




            }



        </View>
    )
}

export default Home