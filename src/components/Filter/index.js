import React, {useState, useEffect} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const Filter = ({activeType, setActiveType}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await axios.get('https://pokebuildapi.fr/api/v1/types');
      setTypes(response.data);
    };
    fetchTypes();
  }, []);

  return (
    <>
      <FilterContainer>
        <FilterButton onPress={() => setModalVisible(true)}>
          <FilterButtonText>Filtrer par type</FilterButtonText>
        </FilterButton>
      </FilterContainer>

      <Modal visible={modalVisible} animationType="slide">
        <ModalContent>
          <ModalTitle>Types de Pokémon</ModalTitle>
          <TypesGrid>
            {types.map(type => (
              <TouchableOpacity
                key={type.id}
                onPress={() => {
                  setActiveType(type.name);
                  setModalVisible(false);
                }}>
                <TypeButton active={type.name === activeType}>
                  <TypeImage source={{uri: type.image}} />
                </TypeButton>
              </TouchableOpacity>
            ))}
          </TypesGrid>
          <CloseButton onPress={() => setModalVisible(false)}>
            <CloseButtonText>Fermer</CloseButtonText>
          </CloseButton>
        </ModalContent>
      </Modal>
    </>
  );
};

const FilterContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const FilterButton = styled.TouchableOpacity`
  background-color: #1cbbb4;
  padding: 10px;
  border-radius: 5px;
`;

const FilterButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

const ModalContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  padding: 40px;
`;

const ModalTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 15px;
  text-align: center;
`;

const TypesGrid = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

const TypeButton = styled.View`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => (props.active ? '#1cbbb4' : '#ccc')};
`;

const TypeImage = styled.Image`
  height: 50px;
  width: 50px;
`;

const CloseButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

const CloseButtonText = styled.Text`
  font-size: 18px;
  color: #1cbbb4;
`;

export default Filter;
