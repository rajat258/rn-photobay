import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
  View,
} from 'react-native';
import React from 'react';
import getDimension from './getDimensions';

const ProfilePicture = ({uri}) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? [styles.ProfilePictureContainer, {opacity: 0.5}]
          : styles.ProfilePictureContainer
      }>
      <Image style={styles.ProfilePictureImage} source={{uri: uri}} />
    </Pressable>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  ProfilePictureContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '2%',
    // backgroundColor: 'black',
  },
  ProfilePictureImage: {
    height: getDimension() / 15,
    width: getDimension() / 15,
    borderRadius: 50,
    borderColor: 'blue',
    borderWidth: 1,
  },
});
