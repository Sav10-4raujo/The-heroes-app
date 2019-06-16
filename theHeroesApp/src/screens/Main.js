import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MainStyle from './styles/MainStyle';

const Main = () => {
  const imageMain = require('../imgs/main.jpg'),
    imageButton = require('../imgs/button.png'),
    imageLogo = require('../imgs/Logo.png'),
    {
      mainView,
      imageBackground,
      shield,
      text,
      logo,
      button
    } = MainStyle;
  return (
    <View style={mainView}>
      <ImageBackground style={imageBackground} source={imageMain}>
        <Image source={imageLogo} style={logo} />
        <TouchableOpacity
          style={button}
          onPress={() => {
            Actions.list();
          }}
        >
          <Image source={imageButton} style={shield} />
        </TouchableOpacity>
        <Text style={text}> Press the shield to start</Text>
      </ImageBackground>
    </View>
  );
};

export default Main;
