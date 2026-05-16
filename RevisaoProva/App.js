import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../Screns/Login';
import HomePokemon from '../Screns/HomePokemon';
import HomeMotorista from '../Screns/HomeMotorista';

const Stacks = createStackNavigator;

export default function App(){
    return(
        <NavigationContainer>
          <Stacks.Navigator>

            <Stacks.Screen name='Login' component={Login}/>
            <Stacks.Screen name='Home Pokemon' component={HomePokemon}/>
            <Stacks.Screen name='Home Motorista F1' component={HomeMotorista}/>

          </Stacks.Navigator>
        </NavigationContainer>
    )
}