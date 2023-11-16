import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import capa from "./assets/capa.png"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Guerra do Amanha</Text>
      <Text style={styles.descricao}>Genero: Ação e Ficção</Text>
      <Image
        source={capa}
        style={styles.img}
      />
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
  titulo: {
    fontSize:22,
  },
  descricao:{
    marginBottom: 20
  },
  img:{
    width: 300,
    height: 300
  }
});
