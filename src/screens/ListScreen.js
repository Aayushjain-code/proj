import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetails from '../Components/ImageDetails'

const ListScreen = () => {
    return (
        <View style={styles.list} >
            <ImageDetails/>
            <ImageDetails/>
            <ImageDetails/>
            <ImageDetails/>
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    list: {
        margin: 10
    },
})
