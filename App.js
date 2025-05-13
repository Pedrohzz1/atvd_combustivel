import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default function App() {
  const [tela, setTela] = useState(1);
  const [nome, setNome] = useState('');
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');
  const [consumo, setConsumo] = useState(null);
  const [custoGasolina, setCustoGasolina] = useState(0);
  const [custoAlcool, setCustoAlcool] = useState(0);

  const precoGasolina = 5.99; 
  const precoAlcool = 4.29; 

  const calcularConsumo = () => {
    const kmFloat = parseFloat(km);
    const litrosFloat = parseFloat(litros);
    if (!isNaN(kmFloat) && !isNaN(litrosFloat) && litrosFloat > 0) {
      const resultado = kmFloat / litrosFloat;
      setConsumo(resultado.toFixed(2));
      setTela(3);
    } else {
      setConsumo('Erro: valores inválidos');
      setTela(3);
    }
  };

  const calcularCusto = () => {
    const litrosFloat = parseFloat(litros);
    if (!isNaN(litrosFloat)) {
      setCustoGasolina(litrosFloat * precoGasolina);
      setCustoAlcool(litrosFloat * precoAlcool);
      setTela(4);
    }
  };

  const recomendarCombustivel = () => {
    if (!isNaN(consumo)) {
      return consumo < 8
        ? 'Recomendamos utilizar álcool.'
        : 'Recomendamos utilizar gasolina.';
    }
    return '';
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1950&q=80',
      }}
      style={styles.background}
    >
      {tela === 1 && (
        <View style={styles.container}>
          <Text style={styles.titulo}>Bem-vindo(a) ao Economic PH!</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#bbb"
            value={nome}
            onChangeText={setNome}
          />
          <TouchableOpacity style={styles.botao} onPress={() => setTela(2)}>
            <Text style={styles.botaoTexto}>Entrar</Text>
          </TouchableOpacity>
        </View>
      )}

      {tela === 2 && (
        <View style={styles.container}>
          <Text style={styles.titulo}>Olá, {nome}!</Text>
          <Text style={styles.subtitulo}>Calcule o consumo de combustível</Text>

          <TextInput
            style={styles.input}
            placeholder="Quilômetros percorridos"
            placeholderTextColor="#bbb"
            value={km}
            onChangeText={setKm}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Litros abastecidos"
            placeholderTextColor="#bbb"
            value={litros}
            onChangeText={setLitros}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.botao} onPress={calcularConsumo}>
            <Text style={styles.botaoTexto}>Calcular</Text>
          </TouchableOpacity>
        </View>
      )}

      {tela === 3 && (
        <View style={styles.container}>
          <Text style={styles.titulo}>Resultado</Text>
          <Text style={styles.resultado}>
            {consumo === 'Erro: valores inválidos'
              ? consumo
              : `${nome}, seu consumo foi de ${consumo} km/l.\n${recomendarCombustivel()}`}
          </Text>
          <TouchableOpacity style={styles.botao} onPress={calcularCusto}>
            <Text style={styles.botaoTexto}>Ver Eficiência Econômica</Text>
          </TouchableOpacity>
        </View>
      )}

      {tela === 4 && (
        <View style={styles.container}>
          <Text style={styles.titulo}>Análise Econômica</Text>

          <View style={styles.precoContainer}>
            <View style={styles.caixaGasolina}>
              <Text style={styles.textoPreco}>
                Gasolina: R$ {custoGasolina.toFixed(2)}
              </Text>
            </View>
            <View style={styles.caixaAlcool}>
              <Text style={styles.textoPreco}>
                Álcool: R$ {custoAlcool.toFixed(2)}
              </Text>
            </View>
          </View>

          <Text style={styles.recomendacao}>
            {custoAlcool < custoGasolina
              ? 'O Álcool foi mais econômico para esta viagem.'
              : 'A Gasolina foi mais econômica para esta viagem.'}
          </Text>

          <TouchableOpacity style={styles.botao} onPress={() => setTela(1)}>
            <Text style={styles.botaoTexto}>Voltar ao Início</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ccc',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitulo: {
    fontSize: 20,
    color: '#aaa',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#2a2a2acc',
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#eee',
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#444',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 15,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 20,
    color: '#ddd',
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  precoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  caixaGasolina: {
    padding: 10,
    backgroundColor: '#f44336',
    borderRadius: 8,
    width: '48%',
  },
  caixaAlcool: {
    padding: 10,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    width: '48%',
  },
  textoPreco: {
    fontSize: 18,
    color: '#fff',
  },
  recomendacao: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
});
