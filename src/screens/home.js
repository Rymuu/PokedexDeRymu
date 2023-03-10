import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';

import styled from 'styled-components';

const Home = props => {
  console.log('🚀 ~ file: home.js:6 ~ Home ~ props:', props);

  const handleNavigation = page => {
    props.navigation.navigate(page);
  };
  return (
    <Container>
      <StyledText>Pokédex</StyledText>
    </Container>
  );
};

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

export default Home;
