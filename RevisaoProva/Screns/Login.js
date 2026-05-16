import { Text, TextInput, Image, Button, View, StyleSheet} from "react-native";

export default function Login({navagation}){
    return(
       
       <View style={styles.container}>
       
        <Image
        source={require('../Sources/shrek.png')}
        style={styles.image}/>

        <Text style={styles.titulo}>Login</Text>

       <TextInput 
       style={styles.textinput}
       placeholder="Usuario"
       />

       <TextInput 
       style={styles.textinput}
       placeholder="Senha"
       secureTextEntry
       />

       <Button 
       style={styles.botton}
       title="Logar"
       color={'#e67c25'}
       onPress={() => navagation.navigate('HomeMotorista')}
       />

        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    image:{
        borderRadius: 100,
        width: 150,
        height: 150,

    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold',

    },
    textinput: {
        borderStartWidth: 1,
        margin: 5,
        padding: 5,
        height: 80,
        width: 100,
        borderRadius: 5,

    },
    botton:{
        borderRadius: 20,
        margin: 10,
        height: 50,
        width: 100,
        backgroundColor: '#fc7a00',
        justifyContent: 'center',
        alignItems: 'center'
    }
})