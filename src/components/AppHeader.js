import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from "@rneui/themed";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { black, darkBlue, ferozi, red, white } from '../constants/colors'
import { headerHeigh, mediumSize, small } from '../constants/sizes';


// import { regular, semi_bold } from '../Constants/fontFamily';


const AppHeader = (props) => {
    const {
        title,
        leftIconName,
        leftIconType,
        leftPress,
        rightIconName,
        rightIconType,
        rightPress,
    } = props
    return (
        <View style={styles.wraper}>

            <View style={styles.left}>
                {leftIconName &&
                    <Icon
                        onPress={leftPress}
                        name={leftIconName}
                        type={leftIconType}
                        tvParallaxProperties={undefined}
                        iconStyle={styles.iconStyle}
                    />
                }

            </View>

            <View style={styles.body}>
                <Text style={styles.centerText}>{title}</Text>
            </View>
            <View style={styles.right}>
                {rightIconName &&
                    <View style={styles.rightView}>
                        <Icon
                            onPress={rightPress}
                            name={rightIconName}
                            type={rightIconType}
                            tvParallaxProperties={undefined}
                            iconStyle={[styles.iconStyle, { left: 10, color: white }]}
                        />
                    </View>
                }
            </View>

        </View>
    )
}
export default AppHeader

const styles = StyleSheet.create({
    wraper: {
        paddingTop: headerHeigh,
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    left: {
        width: wp(15),
    },

    iconStyle: {
        fontSize: 20,
        color: black,
        width: wp(10),
    },
    body: {
        width: wp(65)
    },
    centerText: {
        textAlign: 'center',
        color: darkBlue,
        // fontFamily: semi_bold,
        fontSize: mediumSize,
    },
    right: {
        width: wp(15),
    },
    rightView: {
        backgroundColor: ferozi,
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: white,
        shadowColor: red,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        width: wp(24),
        marginLeft: 10,

    },
    cname: {
        marginLeft: 5,
        // fontFamily: regular,
        fontSize: small,
        color: black

    },
})