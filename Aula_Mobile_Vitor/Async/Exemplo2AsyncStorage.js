import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ExemploAsyncStorage() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [pessoaSalva, setPessoaSalva] = useState(null);

  const SalvarPessoa = async () => {
    if (!nome || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    const pessoa = { nome, senha };
    try {
      const jsonValue = JSON.stringify(pessoa);
      await AsyncStorage.setItem('@pessoa', jsonValue);
      setPessoaSalva(pessoa); // Atualiza a tela na hora
      alert('Dados salvos com sucesso! ✅');
      setNome('');
      setSenha('');
    } catch (e) {
      console.log(e);
    }
  };

  const MostrarPessoa = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@pessoa');
      if (jsonValue != null) {
        setPessoaSalva(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    MostrarPessoa();
  }, []); // Roda apenas uma vez ao montar o componente

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>Gerencie suas credenciais localmente</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome..."
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a senha..."
          placeholderTextColor="#999"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={SalvarPessoa}>
          <Text style={styles.buttonText}>SALVAR DADOS</Text>
        </TouchableOpacity>
      </View>

      {pessoaSalva && (
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>DADOS ARMAZENADOS</Text>
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.label}>Usuário:</Text>
              <Text style={styles.value}>{pessoaSalva.nome}</Text>
            </View>
            <View style={[styles.row, { borderBottomWidth: 0 }]}>
              <Text style={styles.label}>Senha:</Text>
              <Text style={styles.value}>••••••••</Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark mode de respeito
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700', // Dourado
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  form: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    backgroundColor: '#2A2A2A',
    color: '#FFF',
    fontSize: 16,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  cardContainer: {
    marginTop: 40,
  },
  cardTitle: {
    color: '#888',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 5,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#FFD700',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  label: {
    color: '#888',
    fontSize: 14,
  },
  value: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});