import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import styled from 'styled-components';
import Home from '../screens/home';
import Sinnoh from '../screens/sinnoh';
import Johto from '../screens/johto';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <GlobalSafeArea>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Johto" component={Johto} />
          <Stack.Screen name="Sinnoh" component={Sinnoh} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalSafeArea>
  );
};

const GlobalSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: red;
`;

export default Routes;