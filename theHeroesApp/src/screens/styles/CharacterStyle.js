import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CharacterStyle = StyleSheet.create({
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
    height: hp('70%'),
    width: wp('85%'),
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderColor: '#fff'
  },
  profileImage: {
    width: wp('75%'),
    height: hp('25%')
  },
  controlImageProfile: {
    borderWidth: 3,
    borderColor: '#000',
    translateY: 10
  },
  descriptionBorder: {
    width: wp('75%'),
    height: hp('26%'),
    justifyContent: 'center',
    borderWidth: 3,
    alignItems: 'center'
  },
  nameText: {
    fontSize: hp('2.5%'),
    color: '#fff',
    textAlign: 'center'
  },
  nameControl: {
    borderWidth: 3,
    width: wp('75%'),
    height: hp('7%'),
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
    width: wp('70%'),
    height: hp('24%'),
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionText: {
    fontSize: hp('2%'),
    color: '#fff',
    margin: 5,
    textAlign: 'justify'
  }
});

export default CharacterStyle;
