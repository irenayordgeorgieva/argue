/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import RootStackNavigator from './navigators/RootStackNavigator'

function App () {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  )
}

export default App
