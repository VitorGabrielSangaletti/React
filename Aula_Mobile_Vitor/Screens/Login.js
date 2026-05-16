import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';


export default function Login() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.foto}
                source={require('../Sources/shrek.png')}
            />

            <Text style={styles.texto}>Login</Text>

            <TextInput
                placeholder="Usuario"
                placeholderTextColor={'#59ff0cff'}
                style={styles.txtInput}
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor={'#59ff0cff'}
                style={styles.txtInput}
                secureTextEntry
            />

            <Button title="Entrar" color={'#ff8800ff'} 
            onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', // centraliza tudo
        backgroundColor: '#ff5e00ff',
    },

    texto: {
        fontSize: 30,
        color: '#59ff0cff',
        fontWeight: 'bold',
        marginBottom: 20,
    },

    txtInput: {
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10, // corrigindo
        width: '80%',
        marginBottom: 10,
        borderRadius: 8,
    },

    foto: {
        height: 150,
        width: 150,
        marginBottom: 20,
        borderRadius: 75, // imagem redonda
    },
});