import React, { useEffect, useReducer } from "react";
import { View, Text, FlatList, ActivityIndicator, Pressable, ScrollView, Platform } from "react-native";
import AppHeader from "../../components/AppHeader";
import SearchBar from "../../components/SearchBar";

import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import { getFundraisers } from "../../redux/reducers/fundraisers_reducer";
import { getEffectedAreas } from "../../redux/reducers/effected_areas_reducer";

import Heading from "../../components/Heading";
import { black } from "../../constants/colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Footer from "../../components/AppFooter";
import { statusBar } from '../../constants/sizes'
import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const fundraisers = useSelector((state) => ({ ...state.fundraisers }))
    const effected_areas = useSelector((state) => ({ ...state.effected_areas }))
    const loading = fundraisers.loading
    const fundraisers_list = fundraisers.fundraisers_list?.values
    let fundraisers_list_master = fundraisers.fundraisers_list?.values
    const effectedArea_list = effected_areas?.effected_areas_list?.values






    useEffect(() => {
        dispatch(getFundraisers())
        dispatch(getEffectedAreas())
    }, [])

    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            searchValue: '',
            filteredData: []
        }
    )
    const { searchValue, filteredData } = state


    const handleChangeText = (text) => {

        let filtered_data = fundraisers_list.filter((item, index) => {
            if (item[0].search(new RegExp(text, "i")) >= 0) {
                return item
            }
        })
        if (filtered_data?.length > 0) {
            updateState({ filteredData: filtered_data, searchValue: text })
        } else {
            updateState({ filteredData: [], searchValue: text })
        }
    }



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

    const empty_serach_component = (item, index) => {
        return (

            <View style={[styles.content_in_center, { marginTop: hp(10) }]} >
                <Text style={{ color: black, fontSize: 16, fontWeight: 'normal' }}>No Result Found</Text>
            </View >

        )
    }

    const render_affectedareas_list = (item, index) => {
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
            <View style={{ paddingTop: Platform.OS == 'android' ? 0 : isIphoneX() ? getStatusBarHeight() + 30 : getStatusBarHeight() + 15 }}>
                <SearchBar
                    onChangeText={handleChangeText}
                />
            </View>
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
                            // data={fundraisers_list_copy}
                            data={

                                filteredData?.length > 0 ? filteredData : searchValue?.length > 0 ? filteredData : fundraisers_list}
                            renderItem={redner_fundraisers_list}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => 'a' + Math.random()}
                            initialNumToRender={20}
                            maxToRenderPerBatch={20}
                            ListEmptyComponent={searchValue.length > 0 ? empty_serach_component : ''}
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