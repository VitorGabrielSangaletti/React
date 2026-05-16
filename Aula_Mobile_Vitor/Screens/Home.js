import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import {drivers} from '../data/drivers';


export default function Home() {

  // const motorista = drivers[1]
return (
  <ScrollView>
<View style={styles.container}>
  <Text style={styles.txt}>TITULO</Text>
  {drivers.map((motorista) => (
<Card>
   <Card.Cover source={{ uri: motorista.image }} />
  <Card.Content style={styles.cards}>
    
    <Text style={styles.txt}>{motorista.name}</Text>
    <Text style={styles.txt}>{motorista.description}</Text>
    <Text style={styles.txt}>{motorista.team}</Text>
    <Text style={styles.txt}>{motorista.country}</Text>
    <Text style={styles.txt}>{'⭐'.repeat(motorista.stars)}</Text>
  </Card.Content>
</Card>


))}</View></ScrollView>
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
  
});

