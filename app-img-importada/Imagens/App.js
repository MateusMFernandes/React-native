import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Amazona from './assets/floresta-amazonica.png';
import Congo from './assets/floresta-congo.png';
import Taiga from './assets/floresta-taiga.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Florestas pelo mundo</Text>

      <Image
      source={Congo}
      style={styles.imagens}
      />
      <Text style={styles.margem}>Floresta do congo(Africa)</Text>

      <Image
      source={Taiga}
      style={styles.imagens}
      />
      <Text style={styles.margem}>Floresta(Hemisfério Norte)</Text>

      <Image
      source={Amazona}
      style={styles.imagens}
      />
      <Text>Floresta amazonica(America do Sul)</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 22,
    marginBottom: 30,
  },
  imagens:{
    width: 300,
    height: 100,
  },
  margem:{
    marginBottom: 20,
  },
});
