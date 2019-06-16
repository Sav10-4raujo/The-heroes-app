import { StyleSheet } from 'react-native';

const CharacterStyle = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  background: {
    backgroundColor: '#80baed',
    flex: 1
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer: {
    backgroundColor: '#0062bc',
    height: 550,
    width: 360,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderColor: '#fff'
  },
  profileImage: {
    width: 300,
    height: 210
  },
  controlImageProfile: {
    borderWidth: 3,
    borderColor: '#000',
    translateY: 10
  },
  descriptionBorder: {
    width: 320,
    height: 210,
    justifyContent: 'center',
    borderWidth: 3,
    alignItems: 'center'
  },
  nameText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  nameControl: {
    borderWidth: 3,
    width: 300,
    height: 60,
    borderColor: '#000',
    justifyContent: 'center'
  },
  blueBorder: {
    borderWidth: 3,
    borderColor: '#80baed'
  },
  whiteBorder: {
    borderWidth: 3,
    borderColor: '#fff'
  },
  insideBorder: {
    width: 300,
    height: 190,
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionText: {
    fontSize: 15,
    color: '#fff',
    margin: 5,
    textAlign: 'justify'
  }
});

export default CharacterStyle;
