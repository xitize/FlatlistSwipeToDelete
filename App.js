
import React, { Component } from 'react'
import { View, ViewPagerAndroid, ScrollView, Text, StyleSheet, StatusBar } from 'react-native'
import MainScreenNavigator from './tabs/MainTabNavigator';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';//install package

export default class App extends Component {

    render() {
        return (
            <AppNavigation />
        )
    }
}

const NotificationBar = () => {
    return (
        <View style={{
            height: StatusBar.height,
            backgroundColor: '#263238',
        }} />)
}

const AppNavigation = () => (
    <SimpleAppNavigator />
);

const SimpleAppNavigator = createStackNavigator({
    Home: { screen: MainScreenNavigator },
}, { initialRouteName: 'Home' })

