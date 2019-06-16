import { StyleSheet } from 'react-native';

const SearchBarStyle = StyleSheet.create({
  control: {
    backgroundColor: '#0575e6',
    borderTopWidth: 3,
    height: 85,
    width: 415,
    flexDirection: 'row'
  },
  arrow: {
    width: 55,
    height: 55,
    margin: 7
  },
  Controlarrows: {
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  searchInput: {
    width: 200,
    height: 45,
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15

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
    padding: 5,
    borderRadius: 100,
    marginLeft: 5,
    backgroundColor: '#fff'
  },
  imageSearchButton: {
    width: 30,
    height: 30
  }
});

export default SearchBarStyle;
