import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    const Friends=[
        {"name":"John","age":30},
        {"name":"Peter","age":25},
        {"name":"Amy","age":35},
        {"name":"Hannah","age":45},
        {"name":"Michael","age":85},
        {"name":"Sandy","age":15},
        {"name":"Betty","age":105},
        {"name":"Richard","age":55},
        {"name":"Susan","age":65},
        {"name":"Vicky","age":75},
    ];
    return (
        <FlatList 
            data={Friends}
            keyExtractor={(item)=>item.name}
            renderItem={({item})=>{
                return(
                    <View style={styles.listItem}>
                        <Text>Name: {item.name}</Text>
                        <Text>Age: {item.age}</Text>
                    </View>
                )
            }}
        />
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    listItem:{
        backgroundColor:'#ccc',
        marginVertical:10,
        padding:10,
    },
})


