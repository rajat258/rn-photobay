import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import ImageButtonRight from '../components/ImageButtonRight';
import getImageHeight from './getImageHeight';

const Header = () => {
  return (
    // Photo Bay Header Container.
    <View style={styles.container}>
      <View style={styles.HeaderTextContainer}>
        <Text style={styles.HeaderText}>Photo Bay</Text>
      </View>

      {/* Message Button Container */}
      <ImageButtonRight
        uri={
          'https://img.icons8.com/external-anggara-glyph-anggara-putra/96/null/external-direct-message-social-media-interface-anggara-glyph-anggara-putra.png'
        }
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  HeaderTextContainer: {
    flex: 1,
    // backgroundColor: 'black',
    alignItems: 'flex-start',
    marginLeft: '3%',
  },
  HeaderText: {
    color: Platform.OS === 'ios' ? 'black' : '#303136',
    fontFamily: 'Montserrat-Bold',
    fontSize: getImageHeight(24),
  },
});
