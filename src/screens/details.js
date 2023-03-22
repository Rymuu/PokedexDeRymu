import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const Details = ({route}) => {
  const {pokemonName} = route.params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemonDetails();
  }, []);

  const getPokemonDetails = () => {
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`)
      .then(res => {
        setPokemon(res.data);
        console.log(res.data.apiTypes);
      })
      .catch(err => {
        console.log('🚀 ~ file: details.js:6 ~ Details ~ err', err);
      });
  };

  if (!pokemon) {
    return <ActivityIndicator size="large" color="#1cbbb4" />;
  }

  return (
    <Container>
      <Header>
        <PokemonName>{pokemon.name}</PokemonName>
        <Number>#{pokemon.id}</Number>
      </Header>
      <StyledImage
        source={{
          uri: `${pokemon.image}`,
        }}
      />
      <Info>
        <Row>
          <Label>Type</Label>
          {pokemon.apiTypes.map(type => {
            return (
              <TypeImage
                key={type.name}
                source={{
                  uri: type.image,
                }}
              />
            );
          })}
          <Value>{pokemon.type}</Value>
        </Row>
      </Info>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StyledImage = styled.Image`
  width: 200px;
  height: 200px;
`;

const TypeImage = styled.Image`
  height: 40px;
  width: 40px;
`;

const PokemonName = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

const Number = styled.Text`
  font-size: 18px;
  color: #888;
  margin-left: 10px;
`;

const Info = styled.View`
  margin-top: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  width: 100px;
`;

const Value = styled.Text`
  font-size: 16px;
`;

export default Details;
