import { Avatar } from 'react-native-elements'
import PropTypes from 'prop-types'
import React from 'react'

function UserProfileBadge ({ profilePictureUri, title, containerStyle, size, onPress, }) {
  return (
    <Avatar
      containerStyle={containerStyle}
      icon={{ name: 'user', type: 'font-awesome', }}
      onPress={onPress}
      rounded
      size={size}
      source={{
        uri: profilePictureUri,
      }}
      title={title}
    />
  )
}

UserProfileBadge.propTypes = {
  containerStyle: PropTypes.objectOf(PropTypes.any),
  onPress: PropTypes.func,
  profilePictureUri: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
}

UserProfileBadge.defaultProps = {
  containerStyle: {},
  onPress: () => null,
  profilePictureUri: 'missing',
  size: 'small',
  title: null,
}

export default UserProfileBadge
