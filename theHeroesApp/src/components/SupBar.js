import React from 'react';
import {
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SupBarStyle from './styles/SupBarStyle';

const SupBar = () => {
  const marvelImage = require('../imgs/logoMarvel.png'),
    homeImage = require('../imgs/inicio.png'),
    {
      controlImageMarvel,
      control,
      imageMarvel,
      homeControl,
      homeImageStyle
    } = SupBarStyle;

  return (
    <View style={control}>
      <View style={homeControl}>
        <TouchableOpacity onPress={() => {
          Actions.list({ page: 0 });
        }}
        >
          <View>
            <Image source={homeImage} style={homeImageStyle} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={controlImageMarvel}>
        <Image source={marvelImage} style={imageMarvel} />
      </View>
    </View>
  );
};

export default SupBar;
