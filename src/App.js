/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LaunchScreen from './screens/LaunchScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import { Icon } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Launch" component={LaunchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={({ navigation }) => ({
          title: 'Argue',
          headerLeft: () => (
            <Icon
              iconStyle={{ paddingLeft: 15 }}
              name='bars'
              type='font-awesome'
              color='#333'
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
