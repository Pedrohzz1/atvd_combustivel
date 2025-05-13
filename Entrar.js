import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Entrar extends Component {
  render() {
    return (
      <View style={styles.modalView}>
        <Text style={styles.texto}>Seja Bem-Vindo! Obrigado por nos informar!</Text>
        <Button title="Fechar" onPress={this.props.aoFechar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#292929cc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20
  }
});