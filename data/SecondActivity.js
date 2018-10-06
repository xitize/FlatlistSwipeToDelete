import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

export default class SecondActivity extends Component {
    static navigationOptions =
        {
            title: 'SecondActivity',
        };

    render() {
        let pic = { //Here create the reference for bgimage.
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE38BaBc_Bhlzw5DelUCKY9Q_nZTZ5Yq9wbxKFrC92g7Q3dC4qeQ'
        };

        return (
            <View style={{ flex: 1 }}>
                <Text>Hello World</Text>
            </View>
        );
    }
}


