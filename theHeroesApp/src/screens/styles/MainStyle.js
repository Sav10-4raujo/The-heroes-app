import { StyleSheet } from 'react-native';

const MainStyle = StyleSheet.create({
  shield: {
    width: 150,
    height: 150,
    marginTop: 0,
    alignSelf: 'flex-end'
  },
  logo: {
    marginTop: 0
  },
  text: {
    color: '#fff',
    marginTop: 10,
    fontSize: 20
  },
  button: {
    padding: 0,
    marginTop: 0
  },
  mainView: {
    flex: 1,
    backgroundColor: '#3c658c',
    alignItems: 'center'
  },
  imageBackground: {
    width: 500,
    height: 775,
    alignItems: 'center',
    flex: 1
  }
});

export default MainStyle;
