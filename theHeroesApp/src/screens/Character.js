import React from 'react';
import { View, Text, Image } from 'react-native';
import SupBar from '../components/SupBar';
import SearchBar from '../components/SearchBar';
import CharacterStyle from './styles/CharacterStyle';

const Character = (props) => {
  const {
      background,
      profile, profileContainer,
      profileImage,
      controlImageProfile,
      descriptionBorder,
      nameText,
      nameControl,
      blueBorder,
      whiteBorder,
      insideBorder,
      descriptionText
    } = CharacterStyle,
    {
      thumbnail,
      name,
      description
    } = props.character;

  return (
    <View style={background}>
      <View>
        <SupBar />
      </View>
      <View style={profile}>
        <View style={profileContainer}>
          <View style={controlImageProfile}>
            <View style={whiteBorder}>
              <Image source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }} style={profileImage} />
            </View>
          </View>
          <View style={blueBorder}>
            <View style={nameControl}>
              <Text style={nameText}>
                {name}
              </Text>
            </View>
          </View>
          <View style={blueBorder}>
            <View style={descriptionBorder}>
              <View style={insideBorder}>
                <Text style={descriptionText}>{description}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <SearchBar profile={{ isProfile: true }} page={props.page} search={props.search} />
    </View>
  );
};

export default Character;
