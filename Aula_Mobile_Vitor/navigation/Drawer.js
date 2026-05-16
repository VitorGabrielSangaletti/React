import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer";

  import Login from './Screens/Login';
  import Home from './Screens/Home';

export default function Drawer(){

  //função java scrit fica sempre antes do return
  const Drawer = createDrawerNavigator();

  
  return( //return vai ser tudo que vai ser mostrado
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
      </Drawer.Navigator>
      
    </NavigationContainer>
  )
}