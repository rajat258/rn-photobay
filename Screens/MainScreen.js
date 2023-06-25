import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Stories from '../components/Stories';
import JSON_data from '../data.json';
import Header from '../components/Header';
import PostItem from '../components/PostItem';
import BottomNavigation from '../components/BottomNavigation';

// Main Screen consist of Header and Body(FlatList).
const MainScreen = () => {
  const [isLoading, setIsLoading] = useState(false); // Flag for FlatList RefreshControl.
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON_data.JSON_data); // Importing JSON Data to dataArr.
  }, []);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshing={isLoading}
        onRefresh={() => {
          setIsLoading(true);
          setTimeout(() => {
            setData(shuffleArray(data));
            setIsLoading(false);
          }, 1000);
        }}
        // Sticking ListHeaderComponent on the top of Flatlist.
        stickyHeaderIndices={[0]}
        // Header and Stories added in ListHeader to make them on top of FlatList.
        ListHeaderComponent={
          <>
            <Header />
            <Stories data={data} />
          </>
        }
        data={data}
        renderItem={({item}) => <PostItem setIsLoading {...{item}} />}
        keyExtractor={item => item.id}
      />

      <BottomNavigation />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
