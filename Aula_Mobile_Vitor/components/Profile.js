import {View, Text, Image} from 'react-native';

export function Person(){
    return(
        <View>
            <Text>Meu componente Pessoa</Text>
        </View>
    )
}

export default function Profile(){
    return(
        <View>
            <Text>Meu primeiro componente</Text>
        </View>
    )
}

export function Imagem(){
    return(
        <View>
            <Text>Minha imagem</Text>
            <Image source={require('../Sources/titann.jpg')}/>
        </View>
    )
}