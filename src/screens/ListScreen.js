import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetails from '../Components/ImageDetails'

const ListScreen = () => {
    return (
        <View style={styles.list} >
            <ImageDetails 
                title="Forest"
                imageSource={require('../../assets/forest.jpg')}
                score="9"
            />
            <ImageDetails
                title="Beach"
                imageSource={require('../../assets/beach.jpg')}
                score="7"
            />
            <ImageDetails
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                score="10"
            />  
            
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    list: {
        margin: 10
    },
})
