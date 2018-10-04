import React, { Component } from 'react'
import {
    View, Image,
} from 'react-native'

export default class Robot extends Component {

    render() {
        return (
            <View>
                <Image style={{
                    width: 300,
                    height: 300
                }} source={{ uri: 'https://spectrum.ieee.org/image/Mjk4NzI0OA.jpeg' }}></Image>
            </View>
        )
    }
}