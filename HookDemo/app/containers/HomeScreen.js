import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../components'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

const onClick = () => {
    console.warn('test')
}

export default HomeScreen = () => {
    return (
        <View style={ styles.container }>
            <Button onPress={()=>{ onClick() }}/>
            <Text>Hello</Text>
        </View>
    )
}