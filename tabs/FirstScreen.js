import React, { Component } from 'react'
import {
    Text, View, Button, Image
} from 'react-native'
export default class FirstScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home'
    }
    render() {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is tab 1</Text>

        </View>
    }
}