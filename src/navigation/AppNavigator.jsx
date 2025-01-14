import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

import BankScreen from "../screens/BankScreen";
import AppScreen from "../screens/AppScreen";
import EventsScreen from "../screens/EventsScreen";
import PerfilScreen from "../screens/PerfilScreen";
import EventDetails from "../screens/EventDetails";
import PixScreen from "../screens/PixScreen";
import TransferirScreen from "../screens/TransferirScreen";
import PagarScreen from "../screens/PagarScreen";
import ConfiguraçãoScreen from "../screens/ConfiguraçãoScreen";
import ChatScreens from "../screens/ChatScreens"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "home",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EventsScreen"
          component={EventsScreen}
          options={{
            title: "Inicial",
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Inicial",
          }}
        />
        <Stack.Screen
          name="BankScreen"
          component={BankScreen}
          options={{
            title: "Banco",
          }}
        />
        <Stack.Screen
          name="AppScreen"
          component={AppScreen}
          options={{
            title: "App",
          }}
        />

        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{
            title: "Detalhes dos Eventos",
          }}
        />
        <Stack.Screen
          name="PerfilScreen"
          component={PerfilScreen}
          options={{
            title: "Perfil",
          }}
        />
        <Stack.Screen
          name="PixScreen"
          component={PixScreen}
          options={{
            title: "Pix",
          }}
        />
        <Stack.Screen
          name="PagarScreen"
          component={PagarScreen}
          options={{
            title: "Pagar",
          }}
        />
        <Stack.Screen
          name="TransferirScreen"
          component={TransferirScreen}
          options={{
            title: "Transferir",
          }}
        />
        <Stack.Screen
          name="ConfiguraçãoScreen"
          component={ConfiguraçãoScreen}
          options={{
            title: "Configuração",
          }}
        />
        <Stack.Screen
          name="ChatScreens"
          component={ChatScreens}
          options={{
            title: "Chat",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

export function TabsNavigation() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
    </Tabs.Navigator>
  );
}
