import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SportsList from './SportsList';
import LeaguesList from './LeaguesList';

function SportsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SportsList />
    </View>
  );
}

function LeaguesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LeaguesList />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <>
      <StatusBar />
      <Tab.Navigator
        style={styles.safePadding}
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' }
        }}
      >
        <Tab.Screen name='Sports' component={SportsScreen} />
        <Tab.Screen name='Leagues' component={LeaguesScreen} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  safePadding: {
    paddingTop: 35
  }
});
