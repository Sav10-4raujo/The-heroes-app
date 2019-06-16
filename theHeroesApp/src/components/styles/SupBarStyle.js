import { StyleSheet } from 'react-native';

const SupBarStyle = StyleSheet.create({
  control: {
    backgroundColor: '#0575e6',
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
    width: 415,
    flexDirection: 'row'
  },
  imageMarvel: {
    width: 190,
    height: 70,
    alignSelf: 'center'
  },
  controlImageMarvel: {
    alignSelf: 'center',
    translateX: -25
  },
  homeControl: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 100,
    translateX: -70
  },
  homeImageStyle: {
    height: 50,
    width: 50
  }
});

export default SupBarStyle;
