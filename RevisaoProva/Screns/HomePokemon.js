import { Text, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

import {pokemons} from "../Data/pokemons";

export default function HomePokemon(){
    return(
        <ScrollView><View style={styles.container}>
            <Text style={styles.titulo}>Pokemons</Text>

            {pokemons.map (pokemonLista => (
                <Card>
                    <Card.Cover source={{uri:(pokemonLista.image)}}/>

                    <Card.Content style={styles.card}>

                        <Text style={styles.text}>{pokemonLista.name}</Text>
                        <Text style={styles.text}>{pokemonLista.description}</Text>
                        <Text style={styles.text}>{pokemonLista.type}</Text>
                        <Text style={styles.text}>{'⭐'.repeat(pokemonLista.stars)}</Text>
                        
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