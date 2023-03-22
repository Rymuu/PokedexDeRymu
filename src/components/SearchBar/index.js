import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TextInput, Image} from 'react-native';

const SearchBar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeText = text => {
    setSearchTerm(text);
    onSearch(text);
  };

  return (
    <Container>
      <SearchIcon
        source={{
          uri: 'https://assets.stickpng.com/thumbs/585e4ae1cb11b227491c3393.png',
        }}
      />
      <StyledTextInput
        value={searchTerm}
        onChangeText={handleChangeText}
        placeholder="Rechercher un Pokémon"
        placeholderTextColor="#aaa"
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: #f2f2f2;
  padding: 5px 10px;
  border-radius: 30px;
  margin: 10px;
  elevation: 3;
  flex-direction: row;
  align-items: center;
`;

const SearchIcon = styled.Image`
  width: 25px;
  height: 25px;
  margin: 10px;
  margin-right: 20px;
`;

const StyledTextInput = styled.TextInput`
  font-size: 16px;
  color: #555;
  font-weight: 600;
`;

export default SearchBar;
