
import React, { Component } from 'react'
import { View, ViewPagerAndroid, ScrollView, Text, StyleSheet } from 'react-native'
import BasicFlatList from './data/BasicFlatList';

export default class App extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <BasicFlatList></BasicFlatList>
            </View>
        )
    }
}
