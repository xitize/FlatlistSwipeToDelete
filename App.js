
import React, { Component } from 'react'
import { View, ViewPagerAndroid, ScrollView, Text, StyleSheet } from 'react-native'
import BasicFlatList from './data/BasicFlatList';

export default class App extends Component {

    render() {
        return (
            <View style={{ flex: 1, }}>

                <BasicFlatList></BasicFlatList>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
})