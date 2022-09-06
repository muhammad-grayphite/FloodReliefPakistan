import React, { useEffect, useReducer } from "react";
import { View, Text, FlatList, ActivityIndicator, Pressable, ScrollView } from "react-native";
import AppHeader from "../../components/AppHeader";
import SearchBar from "../../components/SearchBar";





import styles from "./styles";

import Heading from "../../components/Heading";

const Detail = ({ navigation, route }) => {

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
                <Text style={styles.list_text}>{item?.item[9]?.length > 0 ? item?.item[9] : 'Not mentioned'}</Text>
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
                <Text style={styles.list_text}>{item?.item[10]?.length > 0 ? item?.item[10] : 'Not mentioned'}</Text>

            </ScrollView>






        </View>
    )
}

export default Detail