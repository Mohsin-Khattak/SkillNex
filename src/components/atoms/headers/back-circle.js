import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { colors } from '../../../config/colors'
import { navigationRef } from '../../../navigation/navigation-ref'
export const BackCircle = () => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigationRef.goBack()}>
            <Icon name={'chevron-left'} style={styles.backIcon} size={30} color={colors.black}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.cF2F2F2
    },
    backIcon: {
        transform: [{translateY: -3}]
    }
})