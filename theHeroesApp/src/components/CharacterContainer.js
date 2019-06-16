import React from 'react';
import {
  Text, View, TouchableOpacity, Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CharacterContainerStyle from './styles/CharacterContainerStyle';

const CharacterContainer = (props) => {
  const {
      control,
      profileImage,
      nameImage,
      nameText,
      blackBorder,
      controlText
    } = CharacterContainerStyle,
    {
      name,
      thumbnail,
      description
    } = props.character,
    character = {
      name,
      thumbnail,
      description
    };

  return (
    <View style={control}>
      <TouchableOpacity onPress={() => {
        Actions.character({ character });
      }}
      >
        <View style={nameImage}>
          <View style={blackBorder}>
            <Image source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }} style={profileImage} />
            <View style={controlText}>
              <Text style={nameText}>{name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterContainer;
