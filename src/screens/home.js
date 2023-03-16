import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image} from "react-native";
import React from 'react';
import styled from 'styled-components';

const Home = props => {
  console.log('🚀 ~ file: home.js:6 ~ Home ~ props:', props);

  const handleNavigation = page => {
    props.navigation.navigate(page);
  };

  return (
    <Container>
      <TitleContainer>
        <StyledImage source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1177/1177379.png' }}/>
        <TextOutline>Pokédex de Rymu</TextOutline>
      </TitleContainer> 
      <StyledButton onPress={() => handleNavigation('Kanto')}>
        <StyledButtonText>Kanto</StyledButtonText>
      </StyledButton>
      <StyledButton onPress={() => handleNavigation('Johto')}>
        <StyledButtonText>Johto</StyledButtonText>
      </StyledButton>
      <StyledButton onPress={() => handleNavigation('Sinnoh')}>
        <StyledButtonText>Sinnoh</StyledButtonText>
      </StyledButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledImage = styled.Image`
  width: 33px;
  height: 33px;
`;

const TextOutline = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  color: #000000;
  margin-left: 15px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: #1cbbb4;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  margin-bottom: 15px;
`;

const StyledButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  text-align: center;
`;

export default Home;
