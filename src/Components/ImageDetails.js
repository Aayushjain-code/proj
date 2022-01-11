import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImageDetails = () => {
    return (
        <View>
           <Image source={require('../../assets/beach.jpg')} />
           <Text>Image Details</Text>
        </View>
    )
}

export default ImageDetails

const styles = StyleSheet.create({})
