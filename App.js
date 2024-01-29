// app.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './router/AppNavigator';
//import { loadFonts } from './styles/fonts';
//import { View, ActivityIndicator } from 'react-native'; // Importa ActivityIndicator para el indicador de carga

const App = () => {
  // Una vez las fuentes están cargadas, muestra la navegación
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
