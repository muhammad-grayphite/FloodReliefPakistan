import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppHeader from "../../components/AppHeader";
import Heading from "../../components/Heading";
import { black } from "../../constants/colors";
import styles from "./styles";


const OrgWorkingArea = ({ navigation, route }) => {

    let area = route?.params?.area.split(' ').join('')

    const fundraisers = useSelector((state) => ({ ...state.fundraisers }))
    const fundraisers_list = fundraisers.fundraisers_list?.values

    let filterd = fundraisers_list.filter((item) => {
        if (item[1].search(new RegExp(area, "i")) >= 0) {
            return item
        }
    })


    const render_org_list = (item, index) => {
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
                title={'Organizations'}
                leftIconName={'arrowleft'}
                leftIconType={'antdesign'}
                leftPress={() => navigation.goBack()}
            />
            <View style={styles.heading_color}>
                <Heading heading={'List of organizations working'} />
            </View>
            {filterd?.length > 0 ?
                <FlatList
                    data={filterd}
                    renderItem={render_org_list}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => 'a' + Math.random()}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                /> :
                <View style={styles.content_in_center}>
                    <Text style={{ color: black, fontSize: 16, fontWeight: 'normal' }}>No Result Found</Text>
                </View>
            }

        </View>
    )
}
export default OrgWorkingArea
