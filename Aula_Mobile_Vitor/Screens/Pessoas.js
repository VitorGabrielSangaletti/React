import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { useState } from 'react';
import { Button, Card } from 'react-native-paper';
import {DataPessoa} from '../data/DataPessoa';

export default function Pessoas() {

  // const motorista = drivers[1]
return (
  <ScrollView>
<View style={styles.container}>
  <Text style={styles.txt}>TITULO</Text>
  {DataPessoa.map((motorista) => (
<Card>
   <Card.Cover source={{ uri: motorista.image }} />
  <Card.Content style={styles.cards}>
    {/* <image source={require('./Sources/titann.jpg')} /> */}
    <Text style={styles.txt}>{motorista.name}</Text>
    <Text style={styles.txt}>{motorista.age}</Text>
    <Text style={styles.txt}>{motorista.city}</Text>
    <Text style={styles.txt}>{motorista.job}</Text>
  
  </Card.Content>
</Card>


))}</View>
</ScrollView>
)}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 30
  },
  cards: {
    alignItems: 'center'
  },
  img: {
    width: 300,
    height: 300
  }
});