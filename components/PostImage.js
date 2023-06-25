import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import AutoHeightImage from 'react-native-auto-height-image';
import getDimensions from './getDimensions';
import constant from '../const/constant';
import getOS from './getOS';
import getImageHeight from './getImageHeight';
const PostImage = ({uri, setItemLoading}) => {
  const {width} = useWindowDimensions();
  // Initializing Android and IOS Menu Icons.

  return (
    // Main Post Image container
    <View>
      <AutoHeightImage
        onLoadEnd={() => setItemLoading(false)}
        width={width}
        // resizeMode="contain"
        style={styles.PostImage}
        // style={{height: height, width: '100%', maxHeight:400}}
        source={{uri: uri}}
      />
      <TouchableOpacity style={styles.ThreeDotsContainer}>
        <Image
          style={styles.ThreeDotsImage}
          source={{
            uri:
              getOS === 'ios'
                ? constant.IOS_ThreeDots
                : constant.Android_ThreeDots,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  ThreeDotsContainer: {
    marginTop: getOS === 'android' ? '2%' : null,
    marginLeft: '90%',
    position: 'absolute',
  },
  ThreeDotsImage: {
    height: getImageHeight(26),
    width: getImageHeight(26),
  },
  PostImage: {
    marginBottom: '2%',
  },
});
