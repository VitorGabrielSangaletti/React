import { Text, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

import {drivers} from "../Data/drivers";

export default function HomeMotorista(){
    return(
        <ScrollView><View style={styles.container}>
            <Text style={styles.titulo}>Motorista de F1</Text>

            {drivers.map (motoristas => (
                <Card>
                    <Card.Cover source={{uri:(motoristas.image)}}/>

                    <Card.Content style={styles.card}>

                        <Text style={styles.text}>{motoristas.name}</Text>
                        <Text style={styles.text}>{motoristas.description}</Text>
                        <Text style={styles.text}>{motoristas.team}</Text>
                        <Text style={styles.text}>{motoristas.country}</Text>
                        <Text style={styles.text}>{'⭐'.repeat(motoristas.stars)}</Text>
                        
                    </Card.Content>
                </Card>

            ))}
        
        </View></ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    card:{
        alignItems: 'center'
    },
    text:{
        justifyContent: 'center'
    }
})