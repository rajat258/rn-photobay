import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import BottomNavigationButtons from './BottomNavigationButtons';

const Footer = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.Footercontainer}>
        <BottomNavigationButtons
          uri={'https://img.icons8.com/material-sharp/96/null/home.png'}
        />
        <BottomNavigationButtons
          uri={'https://img.icons8.com/ios-filled/96/null/search--v1.png'}
        />
        <BottomNavigationButtons
          uri={'https://img.icons8.com/ios-filled/96/null/instagram-reel.png'}
        />
        <BottomNavigationButtons
          uri={
            'https://img.icons8.com/material-outlined/48/null/filled-like.png'
          }
        />
        <BottomNavigationButtons
          uri={'https://img.icons8.com/ios-glyphs/96/null/user--v1.png'}
        />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    // position: 'absolute',
    bottom: '0%',
  },
  Footercontainer: {
    width: '100%',
    height: 'auto',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
