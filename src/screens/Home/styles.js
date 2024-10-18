import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#001F3F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '400',
  },
  textInput: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.08,
    borderRadius: windowWidth * 0.02,
    paddingHorizontal: 10,
    fontSize: windowWidth * 0.04,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
  },
  inputContainer: {
    width: windowWidth * 0.8,
    rowGap: windowHeight * 0.02,
    marginVertical: windowHeight * 0.02,
  },
  button: {
    width: windowWidth * 0.5,
    paddingVertical: windowHeight * 0.02,
    marginVertical: windowHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: windowWidth * 0.02,
    borderColor: '#fff',
  },
});
