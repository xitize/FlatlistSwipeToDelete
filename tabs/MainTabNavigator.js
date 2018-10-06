import React, { Component } from 'react'
import {

} from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'
import EntertainmentScreen from './Entertainment';
import HealthScreen from './HealthScreen';
import HomeScreen from './HomeScreen';
import BusinessScreen from './BusinessScreen';
import PoliticsScreen from './PoliticsScreen';
import SportsScreen from './SportsScreen';
import TechnologyScreen from './Technology';
import GeneralScreen from './GeneralScreen';
import ScienceScreen from './ScienceScreen';
import MusicScreen from './MusicScreen';
import TravelScreen from './TravelScreen';


var MainScreenNavigator = createMaterialTopTabNavigator({
    Tab1: { screen: HomeScreen },
    Tab2: { screen: BusinessScreen },
    Tab3: { screen: EntertainmentScreen },
    Tab4: { screen: HealthScreen },
    Tab5: { screen: PoliticsScreen },
    Tab6: { screen: SportsScreen },
    Tab7: { screen: TechnologyScreen },
    Tab8: { screen: GeneralScreen },
    Tab9: { screen: ScienceScreen },
    Tab10: { screen: MusicScreen },
    Tab11: { screen: TravelScreen },


}, {
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: { scrollEnabled: true, }

    })


MainScreenNavigator.navigationOptions = {
    title: 'Tab Example'
}

export default MainScreenNavigator