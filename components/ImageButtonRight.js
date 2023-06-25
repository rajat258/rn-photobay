import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import getDimension from './getDimensions';

const ImageButtonRight = ({uri}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.Image}
        source={{
          uri: uri,
        }}
      />
    </TouchableOpacity>
  );
};

export default ImageButtonRight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: '3%',
    // backgroundColor: 'black',
  },
  Image: {
    height:
      getDimension() < 650
        ? 24
        : getDimension() < 700
        ? 26
        : getDimension() < 750
        ? 28
        : getDimension() < 800
        ? 30
        : 34,
    width:
      getDimension() < 650
        ? 24
        : getDimension() < 700
        ? 26
        : getDimension() < 750
        ? 28
        : getDimension() < 800
        ? 30
        : 34,
  },
});
