import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import React from 'react'


function SearchScreen () {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Text>{'Search'}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
})

export default SearchScreen
