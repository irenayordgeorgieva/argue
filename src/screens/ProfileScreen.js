import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import React from 'react'
import UserProfileBadge from '../components/UserProfileBadge'


function ProfileScreen () {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.rootView}>
          <UserProfileBadge size="xlarge" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootView: {
    alignItems: 'center',
    padding: 10
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
})

export default ProfileScreen
