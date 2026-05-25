import { View, Text, TextInput,Button } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function
ExemploAsyncStorage() {

    const [nome, setNome] = useState('')
    const [nomeSalvo, setNomeSalvo] = useState('')

    const SalvarNome = async () => {
  try {
    await AsyncStorage.setItem('@nomePessoa', nome);
    alert('nome salvo!') //
  } catch (e) {
    console.log(e)
  }
};

const MostrarNome = async () => {
  try {
    const value = await AsyncStorage.getItem('@nomePessoa');
    if (value !== null) {
        setNomeSalvo(value)
    }
  } catch (e) {
    console.log(e)
  }
};

useEffect(() => {
    MostrarNome();
}, [])

    return(
        <View>
            <TextInput
            placeholder="Nome"
            value= {nome}
            onChangeText={setNome}/>

            <Button title='Salvar Pessoa' onPress={SalvarNome}/>
            <Text> {nomeSalvo }</Text>
             

            <Text>Teste Tela Async</Text>
        </View>
    )
}