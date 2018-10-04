import React, { Component } from 'react'
import {
    View,
} from 'react-native'

export default class FixedDimension extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <View style={{ width: 100, height: 100, backgroundColor: 'blue', flex: 30 }}></View>
                <View style={{ width: 100, height: 100, backgroundColor: 'yellow', flex: 30 }}></View>
                <View style={{ width: 100, height: 100, backgroundColor: 'green', flex: 30 }}></View>

            </View>
        )
    }
}