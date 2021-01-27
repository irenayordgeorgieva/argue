
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Header />
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
