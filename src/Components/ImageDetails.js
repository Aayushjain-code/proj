import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImageDetails = ({title,imageSource,score }) => {
    return (
        <View>
           <Image source={imageSource} />
           <Text>Score:{score}</Text>
              <Text>{title}</Text>
        </View>
    )
}

export default ImageDetails

const styles = StyleSheet.create({})
