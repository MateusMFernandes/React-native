import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import paisagem from './assets/paisagem.jpg'
import img_perfil from './assets/foto_perfil.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={paisagem} style={styles.paisagem}/>
      <Image source={img_perfil} style={styles.perfil}/>
      <Text style={styles.titulo}>Mateus Fernandes</Text>
      <Text style={styles.legenda}>Estudando desenvolvimento de sofware, habilidades em Html, Css, Javascript, React e Node.js </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  paisagem:{
    height: 400,
    marginBottom: 20,
  },
  perfil:{
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  titulo:{
    fontSize: 18,
    fontWeight:'bold',
  },
  legenda:{
    marginHorizontal: 15,
    textAlign:'center',
  }
});
