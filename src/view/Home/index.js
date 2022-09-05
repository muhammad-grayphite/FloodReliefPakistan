import React, { useEffect, useReducer } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import AppHeader from "../../components/AppHeader";
import { fundraisers_sheet_link, options } from "../../networkCall/endPoints";
import { fetchData } from "../../networkCall";
import { useSelector, useDispatch } from "react-redux";


import styles from "./styles";
import { getFundraisers } from "../../redux/reducers/fundraisers_reducer";

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const fundraisers = useSelector((state) => ({ ...state.fundraisers }))
    const loading = fundraisers.loading
    const fundraisers_list = fundraisers.fundraisers_list?.values
    // console.log('fundraisers', fundraisers_list)

    useEffect(() => {
        // loadData()
        dispatch(getFundraisers())
    }, [])

    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
        }
    )



    async function loadData() {
        updateState({ loading: true })
        const fundraisers = await fetchData(fundraisers_sheet_link, options)
        fundraisers?.values?.shift()
        updateState({ fundraisers_list: fundraisers?.values, loading: false })
    }

    const redner_fundraisers_list = (item, index) => {
        // console.log('item is', item)
    }



    return (
        <View style={styles.wraper}>
            <AppHeader
                title={'Home'}
            />


            {loading ?
                <View style={styles.content_in_center}>
                    <ActivityIndicator
                        color={'black'}
                        size={'small'}
                    />
                </View> :
                <FlatList
                    data={fundraisers_list}
                    renderItem={redner_fundraisers_list}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => 'a' + Math.random()}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}

                />
            }



        </View>
    )
}

export default Home