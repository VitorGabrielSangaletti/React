import { StyleSheet, Text, View,} from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-paper';

export default function useStage() {
  const [mensagem, setMensagem] = useState('Olá');
  const [valor, setValor] = useState(0);

  function trocarMsg() {
    if (mensagem === 'Olá') {
      setMensagem('Oi, Trocamos de mensagem!');
    } else {
      setMensagem('Olá');
    }
  }

  function adicionar() {
    setValor(valor + 1);
  }

  function decrementar() {
    if (valor > 0) {
      setValor(valor - 1);
    }
  }

  function apagar() {
    setValor(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{mensagem}</Text>

      <Button
        buttonColor='rgba(0, 225, 255, 1)'
        onPress={trocarMsg}>
        Olá
      </Button>

      <Text style={styles.txt}>{valor}</Text>

      <View style={styles.row}>
        <Button 
        buttonColor='#39db24ff'
        textColor='rgba(255, 255, 255, 1)'
        onPress={adicionar}>
        Adicionar Valor
        </Button>

        <Button
        buttonColor='#ff0000ff'
        textColor='rgba(255, 255, 255, 1)'
        onPress={decrementar}>
        Decrementar
        </Button>

        <Button
        buttonColor='rgba(232, 248, 0, 1)'
        textColor='rgba(0, 0, 0, 1)'
        onPress={apagar}>
        Apagar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 30,
    marginVertical: 10
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 20
  }
});