import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import getDimension from './getDimensions';
import getOS from './getOS';

const FlatList_Stories = ({data}) => {
  const [itemLoading, setItemLoading] = useState(true);
  const Item = ({item}) => {
    return (
      // Item rendered for every Story.
      <View style={styles.StoryContainer}>
        {itemLoading && (
          <ActivityIndicator
            style={styles.ActivityIndicator}
            size={40}
            animating={itemLoading}
          />
        )}
        <Pressable
          style={({pressed}) =>
            pressed
              ? [styles.ImageContainer, {opacity: 0.5}]
              : styles.ImageContainer
          }>
          <Image
            onLoadEnd={() => setItemLoading(false)}
            style={styles.Image}
            source={{uri: item.profile_picture}}
          />
        </Pressable>
        <View style={styles.UsernameContainer}>
          <Text style={styles.Text} numberOfLines={1} ellipsizeMode="tail">
            {item.user_id}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      style={styles.flatList}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={data}
      renderItem={({item}) => <Item {...{item}} />}
    />
  );
};

export default FlatList_Stories;

const styles = StyleSheet.create({
  StoryContainer: {
    height: 'auto',
    width: getDimension() / 10,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  ActivityIndicator: {
    position: 'absolute',
    left: '25%',
    top: '20%',
  },
  ImageContainer: {
    flex: 1.5,
  },
  Image: {
    height: getDimension() / 12,
    width: getDimension() / 12,
    borderRadius: 50,
  },
  UsernameContainer: {
    marginTop: '5%',
    flex: 1,
  },
  Text: {
    color: getOS === 'ios' ? 'black' : '#303136',
    fontFamily: getOS === 'ios' ? 'Montserrat-Medium' : 'Montserrat-Bold',
  },
  flatList: {
    marginBottom: '2%',
  },
});
