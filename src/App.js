/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { DrawerActions, NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import { Icon } from 'react-native-elements'
import LaunchScreen from './screens/LaunchScreen'
import LoginScreen from './screens/LoginScreen'
import React from 'react'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={HomeScreen} name="Home" />
    </Drawer.Navigator>
  )
}

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LaunchScreen} name="Launch" options={{ headerShown: false, }} />
        <Stack.Screen component={LoginScreen} name="Login" options={{ headerShown: false, }} />
        <Stack.Screen
          component={DrawerNavigator}
          name="Drawer"
          options={({ navigation, }) => ({
            headerLeft: () => (
              <Icon
                color="#333"
                iconStyle={{ paddingLeft: 15, }}
                name="bars"
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                type="font-awesome"
              />),
            title: 'Argue',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
