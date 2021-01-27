import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Conflict from '../components/Conflict'
import PropTypes from 'prop-types'

function LaunchScreen ({ navigation, }) {
  setTimeout(
    () => navigation.replace('Login'),
    2000
  )

  return (
    <SafeAreaView style={styles.view}>
      <Conflict height={350} style={styles.logo} width={350} />
      <Text style={styles.text}>{'Argue'}</Text>
    </SafeAreaView>
  )
}

LaunchScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
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

export default LaunchScreen
