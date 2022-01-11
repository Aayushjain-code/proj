import React from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


const App = () => {
  

  return (
    <NavigationContainer>
             <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}
                
                  options={
                    
                    {headerShown: false,
                      tabBarIcon: ({ focused, color, size }) => {
                        return <Text style={{ fontSize: size, color: color }}>🏠</Text>
                      }
                    }
                  }
                />
                <Tab.Screen name="list" component={ListScreen}
                  options={
                    {headerShown: false,
                      tabBarIcon: ({ focused, color, size }) => {
                        return <Text style={{ fontSize: size, color: "purple" }}>⚙️</Text>
                      }
                    }
                  }
                />

        </Tab.Navigator>
  </NavigationContainer>
  )
};

const styles = StyleSheet.create({
 
});

export default App;

