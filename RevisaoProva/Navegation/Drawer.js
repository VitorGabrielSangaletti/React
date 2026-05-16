import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from '../Screns/Login';
import HomePokemon from '../Screns/HomePokemon';
import HomeMotorista from '../Screns/HomeMotorista';


const Drawer = createDrawerNavigator;

export default function Drawer(){

    

    return(
        <NavigationContainer>
            <Drawer.Nagation initialRouteName='Login' >
                
                <Drawer.Screen name='Login' component={Login}/>
                <Drawer.Screen name='Home Pokemon' component={HomePokemon}/>
                <Drawer.Screen name='Home Motorista F1' component={HomeMotorista}/>


            </Drawer.Nagation>
        </NavigationContainer>
    )
}