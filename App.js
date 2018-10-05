
import React, { Component } from 'react'
import { View, ViewPagerAndroid, ScrollView, Text, StyleSheet } from 'react-native'
import BasicFlatList from './data/BasicFlatList';
import MainScreenNavigator from './tabs/MainContent';


export default class App extends Component {

    render() {
        return (

            <MainScreenNavigator />
            // <View style={{ flex: 1 }}>
            //     <BasicFlatList></BasicFlatList>
            // </View>
        )
    }
}
