import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

const chevronLeft = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
`;

const Header = ({ title, onBack }) => {
  return (
    <HeaderContainer>
      <BackButton onPress={onBack}>
        <SvgXml xml={chevronLeft} width={20} height={20} />
      </BackButton>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

const BackButton = styled.TouchableOpacity`
  padding: 8px;
`;

const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
 
