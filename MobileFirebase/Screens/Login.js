import { View, TextInput, Image, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { firebaseConfig } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from 'react';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const auth = getAuth();

  const CriarConta = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log('Usuario criado');
        console.log(userCredential.user);

        Alert.alert('Conta criada com sucesso');

      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

const EntrarConta = () => {
    signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigation.navigate('AddProduct');
    // ...
  })
  .catch((error) => {
    console.log(error);
    Alert.alert(error.message);
  });
}

  return (
    <View style={styles.container}>

      <Image
        style={styles.foto}
        source={require('../Source/foto.png')}
      />

      <Text style={styles.titulo}>Bem-vindo</Text>

      <TextInput
        placeholder="Digite seu email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Digite sua senha"
        placeholderTextColor="#999"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.botaoEntrar}
        onPress={() => navigation.navigate('AddProduct')}
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoCriar}
        onPress={CriarConta}
      >
        <Text style={styles.textoBotaoCriar}>Criar Conta</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },

  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#ff7b00',
  },

  titulo: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    width: '100%',
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },

  botaoEntrar: {
    width: '100%',
    backgroundColor: '#ff7b00',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  botaoCriar: {
    marginTop: 15,
  },

  textoBotaoCriar: {
    color: '#ff7b00',
    fontSize: 16,
    fontWeight: 'bold',
  },

});