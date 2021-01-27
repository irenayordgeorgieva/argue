
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import PropTypes from 'prop-types'
import React from 'react'


function HomeScreen ({ navigation, }) {
  function loginButtonOnPress () {
    navigation.replace('Drawer')
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Button onPress={loginButtonOnPress} title="Login" />
      </ScrollView>
    </SafeAreaView>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
})

export default HomeScreen
