import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'





const HomeScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Lists"
          style={{marginVertical:10}}
          onPress={() => {
            navigation.navigate('List', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
        <Button
          title="Go to Details"
          style={{marginVertical:10}}
          onPress={() => {
            navigation.navigate('Items', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
        
    )
}


export default HomeScreen

const styles = StyleSheet.create({

})


