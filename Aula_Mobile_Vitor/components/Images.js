import { View, Image, StyleSheet } from 'react-native';

export default function Images() {
    return (
        <View style={styles.view_image}>
            <Image style={styles.imagem} source={require('../Sources/fernandosla.png')} />
            <Image style={styles.imagem} source={require('../Sources/shrek.png')} />
        </View>
    );
}

// Praticamente cria um "Css" 
const styles = StyleSheet.create({
    imagem: {
        width: 150,
        height: 200,
        borderRadius: 10, // Adicionei um arredondamento de leve pra ficar mais bonito
    },
    view_image: {
        flexDirection: 'row', // Coloca os itens na horizontal (lado a lado)
        flexWrap: 'wrap',     // Faz os itens quebrarem para a próxima linha se não couberem
        justifyContent: 'center', // Centraliza os itens na linha
        alignContent: 'space-around', // Distribui o espaço igual entre as linhas de itens
        gap: 20,              // Espaçamento de 20px entre cada item
        padding: 10,          // Espacinho interno pra não colar na borda da tela
    }
});