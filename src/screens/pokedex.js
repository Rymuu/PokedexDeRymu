import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import styled from 'styled-components';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';

const Pokedex = props => {
  const region = props.route.params;
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Tableau associatif pour faire correspondre les régions avec les numéros de génération
  const regionsToGenerations = {
    kanto: 1,
    johto: 2,
    hoenn: 3,
    sinnoh: 4,
    unys: 5,
    kalos: 6,
    alola: 7,
    galar: 8,
  };

  useEffect(() => {
    console.log("je suis dans le useffect");
    axios
      .get(
        `https://pokebuildapi.fr/api/v1/pokemon/generation/${regionsToGenerations[region]}`,
      )
      .then(res => {
        console.log(res.data);
        setPokemons(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        // on gere les erreurs
      });
  }, []);

  const handlePress = pokemonName => {
    props.navigation.navigate('Details', {pokemonName});
  };

  const handleSearch = text => {
    setSearchTerm(text);
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredPokemonsByType = activeType
    ? filteredPokemons.filter(pokemon =>
        pokemon.apiTypes.some(type => type.name === activeType),
      )
    : filteredPokemons;

  return (
    <ScrollView>
      <SearchBar onSearch={handleSearch} />
      <Filter activeType={activeType} setActiveType={setActiveType} />
      {loading ? (
        <SpinnerContainer>
          <ActivityIndicator size="large" color="#1cbbb4" />
        </SpinnerContainer>
      ) : filteredPokemonsByType.length === 0 ? (
        <StyledView>
          <StyledText>Pas de résultats pour cette recherche</StyledText>
        </StyledView>
      ) : (
        filteredPokemonsByType.map(pokemon => {
          return (
            <StyledView key={pokemon.id}>
              <PokemonCard
                name={pokemon.name}
                image={pokemon.image}
                pokedexId={pokemon.pokedexId}
                apiTypes={pokemon.apiTypes}
                onPress={() => handlePress(pokemon.name)}
              />
            </StyledView>
          );
        })
      )}
    </ScrollView>
  );
};

const SpinnerContainer = styled.View`
  justify-content: center;
`;

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
  color: grey;
`;

const Container = styled.View`
  flex: 1;
`;

export default Pokedex;
