import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import ProfilePicture from './ProfilePicture';
import PostImage from './PostImage';
import ImageButtonLeft from './ImageButtonLeft';
import ImageButtonRight from './ImageButtonRight';

const PostItem = ({item}) => {
  const [itemLoading, setItemLoading] = useState(true); // Flag for Post Image ActivityIndicator.

  return (
    // Item rendered for every Stories.
    <View style={styles.ItemContainer}>
      {itemLoading && (
        <ActivityIndicator
          style={styles.ActivityIndicator}
          size={40}
          animating={itemLoading}
        />
      )}

      {/* Profile Picture, UserId and Location Container */}
      <View style={styles.ProfileUsernameLocationRowContainer}>
        {/* Profile Picture Container */}
        <ProfilePicture {...item.profile_picture} />

        {/* UserId & Location Container */}
        <View style={styles.UserIdLocationContainer}>
          <View style={styles.UserIdContainer}>
            <Text style={styles.UsernameText}>{item.user_id}</Text>
          </View>
          <View style={styles.LocationContainer}>
            <Text style={styles.LocationText}>{item.location}</Text>
          </View>
        </View>
      </View>

      {/* Main Post Image container */}
      <PostImage uri={item.photo} {...{setItemLoading}} />

      {/* Like, Comment, Share and Save Button Container */}
      <View style={styles.LikeCommentShareSaveButtonContainer}>
        <View style={styles.LikeCommentShareButtonContainer}>
          {/* Like Button */}
          <ImageButtonLeft
            uri={
              'https://img.icons8.com/material-outlined/48/null/filled-like.png'
            }
          />

          {/* Comment Button */}
          <ImageButtonLeft
            uri={
              'https://img.icons8.com/fluency-systems-regular/48/null/comments--v1.png'
            }
          />

          {/* Share Button */}
          <ImageButtonLeft
            uri={'https://img.icons8.com/material-outlined/48/null/share.png'}
          />
        </View>

        {/* Save Button */}
        <ImageButtonRight
          uri={
            'https://img.icons8.com/fluency-systems-regular/48/null/save.png'
          }
        />
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  ItemContainer: {
    // marginTop: '5%',
    alignSelf: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    borderTopWidth: 0.3,
    // maxHeight: height / 1.5,
  },
  ActivityIndicator: {
    position: 'absolute',
    left: '45%',
    top: '45%',
  },
  ProfileUsernameLocationRowContainer: {
    width: '100%',
    marginVertical: '2%',
    flexDirection: 'row',
    // backgroundColor: 'black',
  },

  UserIdLocationContainer: {
    marginLeft: '2%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  UserIdContainer: {},
  LocationContainer: {},
  UsernameText: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Medium' : 'Montserrat-Bold',
  },
  LocationText: {
    fontSize: 14,
    fontFamily:
      Platform.OS === 'ios' ? 'Montserrat-Light' : 'Montserrat-Medium',
  },
  LikeCommentShareSaveButtonContainer: {
    marginBottom: '2%',
    width: '100%',
    // backgroundColor: 'black',
    flexDirection: 'row',
  },
  LikeCommentShareButtonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
