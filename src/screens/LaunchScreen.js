import * as React from "react"
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import Conflict from '../components/Conflict'

function LaunchScreen({ navigation }) {
  setTimeout(() => navigation.replace('Login'), 2000)

  return (
    <SafeAreaView style={styles.view}>
      <Conflict width={350} height={350} style={styles.logo} />
      <Text style={styles.text}>Argue</Text>
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

export default LaunchScreen
