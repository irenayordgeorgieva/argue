import * as React from "react"
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import Conflict from './Conflict'

function Header(props) {
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Header
