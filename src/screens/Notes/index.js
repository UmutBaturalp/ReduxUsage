import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {NoteList} from '../../components';
import {useSelector} from 'react-redux';
const Notes = props => {
  const {navigation} = props;
  const notes = useSelector(state => state.notes.notes);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Notes</Text>
        <NoteList data={notes} />
      </View>
    </SafeAreaView>
  );
};

export default Notes;
