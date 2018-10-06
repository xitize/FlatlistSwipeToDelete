import React, { Component } from 'react'
import {
    Text, View, Button, Image
} from 'react-native'
import BasicFlatList from '../data/BasicFlatList';
export default class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home'
    }
    render() {
        return <View style={{ flex: 1, padding: 0 }}>
            <BasicFlatList />
        </View>
    }
}