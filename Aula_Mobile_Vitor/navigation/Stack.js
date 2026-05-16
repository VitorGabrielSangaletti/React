import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from './Screens/Login';
import { DataPessoa } from "./data/DataPessoa";
import Pessoas from "./Screens/Pessoas";

export default function Stack(){

  //função java scrit fica sempre antes do return
  const Stack = createStackNavigator();
  return( //return vai ser tudo que vai ser mostrado
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login Users" component={Login}/>
        <Stack.Screen name = "Pessoas" component={Pessoas} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}