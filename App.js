import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Home from "./src/components/Home";
import LeaguesList from "./src/components/LeaguesList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NextPage } from "./src/components/LeaguesList";
import SplashScreen from "./src/components/screen/SplashScreen";
import SportsScreen from "./src/components/screen/SportsScreen";
import LeagueScreen from "./src/components/screen/LeagueScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="League" component={LeaguesList} />
        <Stack.Screen name="NextPage" component={NextPage} />
        <Stack.Screen name="SportsScreen" component={SportsScreen} />
        <Stack.Screen name="LeagueScreen" component={LeagueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
