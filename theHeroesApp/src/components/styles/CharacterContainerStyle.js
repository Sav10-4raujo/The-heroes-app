import { StyleSheet } from 'react-native';

const CharacterContainerStyle = StyleSheet.create({
  control: {
    backgroundColor: '#0062bc',
    height: 300,
    width: 340,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff'
  },
  profileImage: {
    width: 270,
    height: 180
  },
  nameText: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 5,
    textAlign: 'center'
  },
  nameImage: {
    borderWidth: 3,
    borderColor: '#80baed',
    alignItems: 'center'
  },
  blackBorder: {
    borderWidth: 2,
    alignItems: 'center'
  },
  controlText: {
    width: 270,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0062bc',
    borderWidth: 2
  }
});

export default CharacterContainerStyle;
