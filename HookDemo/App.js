/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import { AppNavigator } from './app/containers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator/>
    </SafeAreaView>
  )
}

export default App