import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {addNote} from '../../redux/noteSlice';
const Home = props => {
  const {navigation} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //noteSlice içindeki verilerin okunması
  const notes = useSelector(state => state.notes.notes);
  //noteSlice içindeki reducer yapılarını kullanma
  const dispatch = useDispatch();
  console.log(title);
  console.log(description);
  console.log(notes);

  const addNoteHandler = () => {
    dispatch(addNote({title, description}));
    setTitle('');
    setDescription('');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Note Application</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Enter your title</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Enter your description</Text>
          <TextInput
            style={styles.textInput}
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={addNoteHandler}>
          <Text style={styles.text}>Add Note</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Notes')}>
          <Text style={styles.text}>Go to Notes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
