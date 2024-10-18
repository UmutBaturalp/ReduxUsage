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
  back: {
    position: 'absolute',
    top: windowWidth * 0.05,
    left: windowWidth * 0.05,
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
