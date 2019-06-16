import React, { Component } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SearchBarStyle from './styles/SearchBarStyle';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page || 0,
      search:this.props.search || 0
    };
  }

  passFront() {
    if (!this.props.profile) {
      const sum = this.state.page + 1;
      this.state.page = sum;
      Actions.list({ page:this.state.page, search:this.state.search });
    }
  }

  passBack() {
    if (!this.props.profile) {
      if (this.state.page>0) {
        const sum = this.state.page - 1;
        this.state.page = sum;
        Actions.list({ page:this.state.page, search:this.state.search });
      }
    }
  }

  findCharacters() {
    if (this.state.search !== 0) {
      Actions.list({ page: 0, search: `nameStartsWith=${this.state.search}`, searching: true });
    }
  }

  render() {
    const {
        control,
        arrow,
        Controlarrows,
        searchInput,
        controlInputSearch,
        searchButton,
        imageSearchButton
      } = SearchBarStyle,
      rightArrow = require('../imgs/arrowRight.png'),
      leftArrow = require('../imgs/arrowLeft.png'),
      imageSearch = require('../imgs/search.png');

    return (
      <View style={control}>
        <View style={Controlarrows}>
          <TouchableOpacity onPress={() => {
            this.passBack();
          }}
          >
            <Image source={leftArrow} style={arrow} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.passFront();
          }}
          >
            <Image source={rightArrow} style={arrow} />
          </TouchableOpacity>
        </View>
        <View style={controlInputSearch}>
          <TextInput
            style={searchInput}
            placeholder="Search for characters"
            onChangeText={(text) => {
              this.setState({ ...this, search: text });
            }}
          />
          <TouchableOpacity
            onPress={() => {
              this.findCharacters();
            }}
            style={searchButton}
          >
            <Image source={imageSearch} style={imageSearchButton} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
