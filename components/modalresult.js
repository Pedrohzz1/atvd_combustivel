import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ModalResultado({ resultado, sair }) {
  return (
    <View style={styles.modalFundo}>
      <View style={styles.modalArea}>
        <Text style={styles.texto}>Resultado:</Text>
        <Text style={styles.resultado}>{resultado}</Text>

        <TouchableOpacity style={styles.botao} onPress={sair}>
          <Text style={styles.textoBotao}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalArea: {
    backgroundColor: '#1a1a1a',
    padding: 30,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  resultado: {
    fontSize: 20,
    color: '#0ff',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#0ff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  textoBotao: {
    fontSize: 18,
    color: '#000',
  },
});
