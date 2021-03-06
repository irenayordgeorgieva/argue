import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import React from 'react'


function HomeScreen () {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Text>{'Home'}</Text>
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
