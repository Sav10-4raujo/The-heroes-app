import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SupBarStyle = StyleSheet.create({
  control: {
    backgroundColor: '#0575e6',
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('10%'),
    width: wp('100%'),
    flexDirection: 'row',
    alignSelf: 'center'
  },
  imageMarvel: {
    width: wp('40%'),
    height: hp('8%'),
    alignSelf: 'center'
  },
  controlImageMarvel: {
    alignSelf: 'center',
    translateX:-15
    
  },
  homeControl: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 100,
    translateX:-50
  },
  homeImageStyle: {
    height: hp('6%'),
    width: wp('12%')
  }
});

export default SupBarStyle;
