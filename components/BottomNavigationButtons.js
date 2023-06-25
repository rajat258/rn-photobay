import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import getDimension from './getDimensions';
import getImageHeight from './getImageHeight';

const BottomNavigationButtons = ({uri}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: uri,
        }}
        style={styles.Image}
      />
    </TouchableOpacity>
  );
};

export default BottomNavigationButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
  },
  Image: {
    height: getImageHeight(28),
    width: getImageHeight(28),
  },
});
