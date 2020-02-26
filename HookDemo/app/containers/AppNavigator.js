import React from 'react'
// import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import { HomeScreen, ListTab, ItemScreen } from './'

// const ListStack = createStackNavigator({
//     ListTab: {screen: ListTab}
// })

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// const TabNavigator = createBottomTabNavigator({
//     Home: HomeScreen,
//     List: ListTab,
// })

const MyStack = () => {
    return (
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ListTab"
                    component={ListTab}
                    options={{ title: 'ListTab' }}
                />
                <Stack.Screen name="ItemScreen" component={ItemScreen} />
            </Stack.Navigator>
        // </NavigationContainer>
    )
}

const MyTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={MyStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs