import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {removeNote} from '../../redux/noteSlice';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
const NoteItem = props => {
  const {item} = props;
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.noteWrapper}>
        <Text style={styles.text}>{item?.title}</Text>
        <Text style={styles.text}>{item?.description}</Text>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => dispatch(removeNote(item?.id))}>
          <Text style={styles.text}>Delete Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '400',
  },
  noteWrapper: {
    width: windowWidth * 0.8,
    rowGap: windowHeight * 0.02,
    marginTop: windowHeight * 0.05,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: windowWidth * 0.035,
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.02,
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: windowHeight * 0.01,
  },
});
