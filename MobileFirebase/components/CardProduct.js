import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-paper'

export default function CardProduct({nome , valor,  imagem}) {

return (
<View style={styles.container}>
  
<Card>
   <Card.Cover source={{ uri: imagem }} />
    <Card.Content style={styles.cards}>
        <Text style={styles.txt}>{nome}</Text>
        <Text style={styles.txt}>R${valor}</Text>
        
    <Text style={styles.txt}>Essa estrada foi muito planejada!</Text>
  </Card.Content>
</Card>


</View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 30
  },

});