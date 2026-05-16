import {View, Image, StyleSheet} from 'react-native';


export default function Imagens(){
    return(
 <View style={styles.view_image}>
    <Image style = {styles.imagem} source = {require('../Sources/titann.jpg')}></Image>
    <Image style = {styles.imagem} source = {require('../Sources/mutano.gif')}></Image></View>
);
}
const styles = StyleSheet.create({
    view_image :{
    flexDirection: 'row',
    alignContent: 'space-around',
    gap: 10,

  },
  imagem:{
    height: 150,
    width: 150
  },
})