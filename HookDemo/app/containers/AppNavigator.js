import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen'

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
})

export default createAppContainer(TabNavigator)