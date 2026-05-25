import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { Database } from 'firebase/database';
import { collection, getDoc, QuerySnapshot } from 'firebase/firestore';

export default function Home(navigation) {

  const [produtos, setprodutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() { 
      try {
        const querySnapshot = await getDocs(collection(Database, 'produtos'))
        const lista = [];
        querySnapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            ...doc.data()
          })
          
        });
        setprodutos(lista);

      }catch (error) {
        console.log('erro ao buscar no banco', error);
      }
      
    }
  carregarProdutos();
  }, []);
 return (

<View style={styles.container}>
  <Text style={styles.txt}>Home</Text>
  <Button title='Add Produto' onPress={() => (navigation.navigate('AddProduct'))} />
  
  </View>
)}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 30
  }
});

