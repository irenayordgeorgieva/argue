import { createStackNavigator } from '@react-navigation/stack'
import LaunchScreen from '../screens/LaunchScreen'
import LoginScreen from '../screens/LoginScreen'
import React from 'react'
import TabNavigator from './TabNavigator'
import UserProfileBadge from '../components/UserProfileBadge'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator()

function RootStackNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen component={LaunchScreen} name="Launch" options={{ headerShown: false, }} />
      <Stack.Screen component={LoginScreen} name="Login" options={{ headerShown: false, }} />
      <Stack.Screen
        component={TabNavigator}
        name="Drawer"
        options={({ navigation, }) => ({
          headerLeft: () => <UserProfileBadge onPress={() => navigation.navigate('Profile')} containerStyle={{ marginLeft: 10, }} />,
          title: 'Argue',
        })}
      />
      <Stack.Screen component={ProfileScreen} name="Profile" />
    </Stack.Navigator>
  )
}

export default RootStackNavigator
