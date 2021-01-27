
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Button } from 'react-native-elements'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Button title="Login" onPress={() => navigation.replace("Drawer")} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default HomeScreen
