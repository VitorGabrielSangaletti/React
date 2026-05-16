import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';

  import Login from './Screens/Login';
  import Home from './Screens/Home';


export default function BottomTab(){

  //função java scrit fica sempre antes do return
  const Tab = createBottomTabNavigator();

  
  return( //return vai ser tudo que vai ser mostrado
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: 'orange',
        tabBarActiveTintColor: 'purple',
        tabBarInactiveBackgroundColor: 'gray',
        tabBarInactiveTintColor: 'blue',
      }}>
        <Tab.Screen name="Home" component={Login}
        options={{
          tabBarIcon: () => (
            <Entypo name="login" size = {24} color="black"/>
          ),

          headerStyle:{
            backgroundColor: '#89c964ff',
          },
          headerTintColor: "#6200ffff",
          headerTitleAlign: 'center',
          headerShown: false //desabilita a Header
        }}

        
        />

        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () => (
            <Entypo name="Home" size={24} color="black"/>
          )
        }}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}