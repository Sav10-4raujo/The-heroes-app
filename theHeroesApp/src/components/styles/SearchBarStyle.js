import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SearchBarStyle = StyleSheet.create({
  control: {
    backgroundColor: '#0575e6',
    borderTopWidth: 3,
    height: hp('10%'),
    width: wp('100%'),
    flexDirection: 'row',
    alignSelf: 'center'
  },
  arrow: {
    width: wp('14%'),
    height: hp('7%'),
    margin: 3
  },
  Controlarrows: {
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  searchInput: {
    width: wp('50%'),
    height: hp('5.5%'),
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: hp('2%')

  },
  controlInputSearch: {
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 7,
    flexDirection: 'row'
  },
  searchButton: {
    alignSelf: 'center',
    borderWidth: 2,
    padding: 7,
    borderRadius: 100,
    marginLeft: 5,
    backgroundColor: '#fff'
  },
  imageSearchButton: {
    width: wp('8%'),
    height: hp('4%')
  }
});

export default SearchBarStyle;
