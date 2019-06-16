import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MainStyle = StyleSheet.create({
  shield: {
    width: wp('40%'),
    height: hp('20%'),
    alignSelf: 'center', 
    padding:5
  },
  text: {
    color: '#fff',
    marginTop: 10,
    fontSize: 20
  },
  mainView: {
    flex: 1,
    backgroundColor: '#3c658c',
    alignItems: 'center'
  },
  imageBackground: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
  },
  logo: {
    width: wp('65%'),
    height: hp('60%')
  }
});

export default MainStyle;
