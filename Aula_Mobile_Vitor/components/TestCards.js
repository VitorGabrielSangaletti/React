import { StyleSheet, Text, View, Image} from 'react-native';
import { useState } from 'react';
import { Button, Card } from 'react-native-paper';

export default function TestCards() {
return (
<View style={styles.container}>
  <Text style={styles.txt}>Titulo</Text>
<Card>
   <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Content style={styles.cards}>
    {/* <image source={require('./Sources/titann.jpg')} /> */}
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