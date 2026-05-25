import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Entypo from '@expo/vector-icons/Entypo';

// Importação das suas telas
import Login from './Screens/Login';
import Home from './Screens/Home';
import Pessoas from './Screens/Pessoas';
import ComponenteImagem from './components/ComponenteImagem' 
import ExemploAsyncStorage from "./Async/ExemploAsyncStorage";
import Exemplo2AsyncStorage from './Async/Exemplo2AsyncStorage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigate() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeTab" // Mudei o nome para evitar conflito com o nome da Stack
        component={Home}
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }} 
      />
      
      <Tab.Screen 
        name="Image" 
        component={ComponenteImagem}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="image" size={size} color={color} />
          )
        }}
      /> 

     
      <Tab.Screen 
        name="Async" 
        component={Exemplo2AsyncStorage} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="database" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TabNavigate} />
      </Stack.Navigator>      
    </NavigationContainer>
  );
}

