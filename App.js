
import React, { Component } from 'react'
import { View, ViewPagerAndroid, ScrollView, Text, StyleSheet } from 'react-native'
import BasicFlatList from './data/BasicFlatList';
import MainScreenNavigator from './tabs/MainTabNavigator';
import { ToolbarAndroid } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation';//install package
import SecondActivity from './data/SecondActivity';




export default class App extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>

                <NotificationBar />
                <MainScreenNavigator />

            </View>


        )
    }
}


const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#2E8B57',
        height: 56
    },
});



const NotificationBar = () => {
    return (<View style={{
        height: 24,
        backgroundColor: '#263238',
    }} />)
}



export const MyApp = createStackNavigator({
    First: { screen: BasicFlatList },//for main screen we have used first. Here its only type of variable.
    Second: { screen: SecondActivity }//second screen reference    
})
