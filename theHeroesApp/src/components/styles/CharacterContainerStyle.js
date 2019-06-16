import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CharacterContainerStyle = StyleSheet.create({
  control: {
    backgroundColor: '#0062bc',
    height: hp('37%'),
    width: wp('80%'),
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff'
  },
  profileImage: {
    width: wp('66%'),
    height: hp('25%')
  },
  nameText: {
    fontSize: hp('2.5%'),
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
    width: wp('66%'),
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0062bc',
    borderWidth: 2
  }
});

export default CharacterContainerStyle;
