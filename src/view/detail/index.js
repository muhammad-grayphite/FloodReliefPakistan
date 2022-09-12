import React, { useEffect, useReducer } from "react";
import { View, Text, FlatList, Pressable, ScrollView } from "react-native";
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-simple-toast';

import AppHeader from "../../components/AppHeader";
import SearchBar from "../../components/SearchBar";


import styles from "./styles";
import Heading from "../../components/Heading";

const Detail = ({ navigation, route }) => {

    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            copiedText: '',

        }
    )

    const { copiedText } = state


    const copyToClipboard = (text) => {
        Clipboard.setString(text);
        Toast.show('copy to clipboard', Toast.LONG)
    };

    const item = route?.params?.detail
    let areas = item?.item[2].split('/')
    let sub_areas = item?.item[1].split(',')

    return (
        <View style={styles.wraper}>
            <AppHeader
                title={'Detail'}
                leftIconName={'arrowleft'}
                leftIconType={'antdesign'}
                leftPress={() => navigation.goBack()}
            />


            <ScrollView style={styles.list_style}>
                <View style={styles.heading_color}>
                    <Heading heading={'Name'} />
                </View>
                <Text style={styles.list_text}>{item?.item[0]}</Text>
                <View style={styles.heading_color}>
                    <Heading heading={'Contact Person Detail'} />
                </View>


                <View>
                    <Text style={styles.list_text}>{item?.item[9]?.length > 0 ? item?.item[9] : 'Not mentioned'}</Text>
                    <Pressable
                        onPress={() => copyToClipboard(
                            item?.item[9]?.length > 0 ?
                                item?.item[9] : ''
                        )}
                        style={[styles.copyBtn, { marginBottom: 0, marginTop: 10 }]}>
                        <Text style={styles.copy_text}>copy</Text>
                    </Pressable>
                </View>


                <View style={styles.heading_color}>
                    <Heading heading={'Province/Region'} />
                </View>


                {areas.map((area, index) => {
                    return (
                        <Pressable style={styles.row}
                            onPress={() => { }}
                        >
                            <View style={styles.circle}></View>
                            <Text style={{ ...styles.list_text, paddingHorizontal: 10, paddingTop: 5, alignSelf: 'center' }}>{area}</Text>

                        </Pressable>
                    )

                })

                }

                <View style={styles.heading_color}>
                    <Heading heading={'Areas'} />
                </View>

                {sub_areas.map((area, index) => {
                    return (
                        <Pressable style={styles.row}
                            onPress={() => navigation.navigate('OrganizationList', { area: area })}
                        >
                            <View style={styles.circle}></View>
                            <Text style={{ ...styles.list_text, paddingHorizontal: 10, paddingTop: 5, alignSelf: 'center' }}>{area}</Text>

                        </Pressable>
                    )

                })

                }


                <View style={styles.heading_color}>
                    <Heading heading={'Items Needed'} />
                </View>
                <Text style={styles.list_text}>{item?.item[8]?.length > 0 ? item?.item[8] : 'Not mentioned'}</Text>
                <View style={styles.heading_color}>
                    <Heading
                        heading={'Bank Account Info'}
                    />
                </View>
                <Pressable
                    onPress={() => copyToClipboard(
                        item?.item[10]?.length > 0 ?
                            item?.item[10] : ''
                    )}
                >
                    <Text style={styles.list_text}>{item?.item[10]?.length > 0 ? item?.item[10] : 'Not mentioned'}</Text>
                </Pressable>

                <Pressable
                    onPress={() => copyToClipboard(
                        item?.item[10]?.length > 0 ?
                            item?.item[10] : ''
                    )}
                    style={styles.copyBtn}>
                    <Text style={styles.copy_text}>copy</Text>
                </Pressable>


            </ScrollView>






        </View>
    )
}

export default Detail