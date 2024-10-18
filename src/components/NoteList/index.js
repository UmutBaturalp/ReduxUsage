import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Dimensions,
} from 'react-native';
import React from 'react';
import NoteItem from '../NoteItem.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
import {useSelector} from 'react-redux';

const NoteList = props => {
  const {data} = props;

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <NoteItem item={item} />}
      />
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  wrapper: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.6,
    backgroundColor: '#001F3F',
    alignItems: 'center',
  },
});
