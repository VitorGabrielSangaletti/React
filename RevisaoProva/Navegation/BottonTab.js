import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import Login from "./Screens/Login";
import HomePokemon from "./Screns/HomePokemon";
import HomeMotorista from "./Screns/HomeMotorista";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: "#007BFF",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",

        headerStyle: {
          backgroundColor: '#007BFF'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerShown: false
      }}>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: () => <Ionicons name="log-in" size={20} />
          }}
        />

        <Tab.Screen
          name="Home Pokemon"
          component={HomePokemon}
          options={{
            tabBarIcon: () => <Ionicons name="home" size={20} />
          }}
        />

        <Tab.Screen
          name="Home Motorista"
          component={HomeMotorista}
          options={{
            tabBarIcon: () => <Ionicons name="people" size={20} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}