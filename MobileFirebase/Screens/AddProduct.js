import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Database } from "firebase/database";
import { addDoc, collection } from "firebase/firestore";

export default function AddProduct() {

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');

  const CadastrarProduto = async () => {
    try {
        await addDoc(collection(Database, 'produtos'), {
            nome,
            valor: parseFloat(valor),
            imagem
        }
    
    )
    alert('Produto cadastrado com sucesso!');
} catch (error) {
    console.log('erro ao cadastrar', error);
}   

  };


  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Adicionar Produto
      </Text>

      {
        imagem !== '' && (
          <Image
            source={{ uri: imagem }}
            style={styles.imagem}
          />
        )
      }

      <TextInput
        placeholder="Nome do produto"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Valor"
        placeholderTextColor="#999"
        value={valor}
        onChangeText={setValor}
        style={styles.input}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="URL da imagem"
        placeholderTextColor="#999"
        value={imagem}
        onChangeText={setImagem}
        style={styles.input}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>
          Adicionar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },

  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },

  botao: {
    backgroundColor: '#ff7b00',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  imagem: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },

});