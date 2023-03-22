import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const PokemonCard = ({name, image, pokedexId, apiTypes, onPress}) => {
  const formatNumber = number => {
    return number.toString().padStart(4, '0');
  };

  // Fonction pour retourner la couleur de fond en fonction du type
  const getTypeBackgroundColor = type => {
    switch (type) {
      case 'Normal':
        return '#A8A878';
      case 'Feu':
        return '#F08030';
      case 'Eau':
        return '#6890F0';
      case 'Électrik':
        return '#F8D030';
      case 'Plante':
        return '#78C850';
      case 'Glace':
        return '#98D8D8';
      case 'Combat':
        return '#C03028';
      case 'Poison':
        return '#A040A0';
      case 'Sol':
        return '#E0C068';
      case 'Vol':
        return '#A890F0';
      case 'Psy':
        return '#F85888';
      case 'Insecte':
        return '#A8B820';
      case 'Roche':
        return '#B8A038';
      case 'Spectre':
        return '#705898';
      case 'Dragon':
        return '#7038F8';
      case 'Ténèbres':
        return '#705848';
      case 'Acier':
        return '#B8B8D0';
      case 'Fée':
        return '#EE99AC';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <StyledView>
        <StyledImage source={{uri: image}} />
        <Content>
          <StyledText>No. {formatNumber(pokedexId)}</StyledText>
          <StyledTitle>{name}</StyledTitle>
          <TypeView>
            {apiTypes.map(type => {
              return (
                <TypeContainer
                  key={type.name}
                  backgroundColor={getTypeBackgroundColor(type.name)}>
                  <StyledType>{type.name}</StyledType>
                </TypeContainer>
              );
            })}
          </TypeView>
        </Content>
      </StyledView>
    </TouchableOpacity>
  );
};

const StyledView = styled.View`
  padding: 5px;
  margin: 10px 0px;
  background-color: white;
  border-radius: 5px;
`;

const TypeView = styled.View`
  flex-direction: row;
  gap: 5px;
`;
const Content = styled.View`
  padding: 5px 15px;
  gap: 5px;
`;
const StyledImage = styled.Image`
  background-color: #e6e6e6;
  width: 250px;
  height: 250px;
  border-radius: 5px;
`;
const StyledText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: grey;
`;
const StyledType = styled.Text`
  font-size: 15px;
  color: white;
`;

const TypeContainer = styled.View`
  align-self: flex-start;
  padding: 0px 20px;
  border-radius: 3px;
  background-color: ${props => props.backgroundColor};
`;

const StyledTitle = styled.Text`
  font-weight: 500;
  font-size: 25px;
  margin-top: 5px;
  color: black;
`;

export default PokemonCard;
