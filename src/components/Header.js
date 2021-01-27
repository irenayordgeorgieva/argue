import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

function Header () {
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.text}>{'Home'}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Header
