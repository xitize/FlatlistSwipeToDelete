import React, { Component } from 'react'
import {

} from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen'
import EntertainmentScreen from './Entertainment';
import HealthScreen from './HealthScreen';


var MainScreenNavigator = createMaterialTopTabNavigator({
    Tab1: { screen: FirstScreen },
    Tab2: { screen: SecondScreen },
    Tab3: { screen: EntertainmentScreen },
    Tab4: { screen: HealthScreen },

})


MainScreenNavigator.navigationOptions = {
    title: 'Tab Example'
}

export default MainScreenNavigator