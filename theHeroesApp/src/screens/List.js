import React, { Component } from 'react';
import {
  FlatList,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import md5 from 'md5';
import ListStyle from './styles/ListStyle';
import api from '../services/api';
import SupBar from '../components/SupBar';
import SearchBar from '../components/SearchBar';
import CharacterContainer from '../components/CharacterContainer';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], page: this.props.page || 0 };
  }

  async componentWillMount() {
    //  http request based on the requirements of Marvel's api
    let keyApi = '';
    const date = new Date(),
      timestamp = date.getTime(),
      publicKey = '88471e1e565719d8b1984f3035ead5cb',
      privateKey = '94fc2fd403674c8b6b45a2f5dec759dca92e5efa',
      hash = md5(timestamp + privateKey + publicKey);

    if (this.props.search) {
      keyApi = `?ts=${timestamp}&limit=20&offset=${this.state.page*20}&${this.props.search}&apikey=${publicKey}&hash=${hash}`;
    } else {
      keyApi = `?ts=${timestamp}&limit=20&offset=${this.state.page*20}&apikey=${publicKey}&hash=${hash}`;
    }

    const result = await api.get(`/characters${keyApi}`),
      apiData = result.data.data.results;

    // Fills empty description fields with "description not found"
    apiData.forEach((character) => {
      if (!character.description) {
        character.description = 'Description not found';
      }
    });

    this.setState({ ...this, data: apiData });
    // Errors prevention at end of the list
    if (!this.state.data[0] && this.props.searching === true) {
      Actions.list({ page: 0 });
    } else if (!this.state.data[0]) {
      Actions.list({ page: 0, search: this.props.search});
    }
  }

  render() {
    const {
      background,
      flat
    } = ListStyle;

    return (
      <View style={background}>
        <View>
          <SupBar />
        </View>
        <View style={flat}>
          <FlatList
            data={this.state.data}
            listKey={({ item }) => item.id}
            keyExtractor={(item) => {
              item.id;
            }}
            renderItem={({ item }) => <CharacterContainer character={item} />}
          />
        </View>
        <SearchBar page={this.props.page} search={this.props.search}/>
      </View>
    );
  }
}
