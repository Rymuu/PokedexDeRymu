import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import styled from 'styled-components';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

const Sinnoh = props => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon/generation/4")
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => {
        console.log(err);
        // on gere les erreur
      });
  }, []);

  return (
    <ScrollView>
    <View>
      <Text>Pokédex de Sinnoh</Text>
    </View>
    {pokemons.map((pokemon) => {
            return (
              <StyledView>
                <TouchableOpacity>
                <PokemonCard 
                name={pokemon.name} 
                image={pokemon.image}
                pokedexId={pokemon.pokedexId} 
                apiTypes = {pokemon.apiTypes}
                key={pokemon.id}/>
                </TouchableOpacity>
              </StyledView>
                );
    })}
  </ScrollView>
  );
};

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
`;

const StyledText = styled.Text`
  color: red;
`;

const Container = styled.View`
  flex: 1;
`;

export default Sinnoh;
