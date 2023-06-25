import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import getDimension from './getDimensions';
const ImageButtonLeft = ({uri}) => {
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

export default ImageButtonLeft;

const styles = StyleSheet.create({
  container: {
    marginLeft: '5%',
    alignItems: 'flex-start',
  },
  Image: {
    height:
      getDimension() < 650
        ? 26
        : getDimension() < 700
        ? 28
        : getDimension() < 750
        ? 30
        : getDimension() < 800
        ? 32
        : 34,
    width:
      getDimension() < 650
        ? 26
        : getDimension() < 700
        ? 28
        : getDimension() < 750
        ? 30
        : getDimension() < 800
        ? 32
        : 34,
  },
});
