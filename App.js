import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './root-stack';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}