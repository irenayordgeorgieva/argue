import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Header from '../components/Header'
import React from 'react'


function HomeScreen () {
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
})

export default HomeScreen
