import ChatsScreen from '../screens/ChatsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { Icon } from 'react-native-elements'
import React from 'react'
import SearchScreen from '../screens/SearchScreen'

const Tab = createBottomTabNavigator()

function TabNavigator () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          tabBarIcon: () => <Icon name="home" type="font-awesome" />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        component={SearchScreen}
        name="Search"
        options={{
          tabBarIcon: () => <Icon name="search" type="font-awesome" />,
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        component={ChatsScreen}
        name="Chats"
        options={{
          tabBarIcon: () => <Icon name="comment" type="font-awesome" />,
          tabBarLabel: 'Chats',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
