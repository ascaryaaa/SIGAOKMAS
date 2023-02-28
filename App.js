import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View, Card, TouchableOpacity } from 'react-native';
import Home from './Screens/Home';
import Data_Harga from './Screens/Data_Harga';
import Berita from './Screens/Berita';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Berita') {
              iconName = Berita
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Home') {
              iconName = Home ? 
              'ios-list' 
              : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <AntDesign name="home" size={24}/>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Data_Harga" component={Data_Harga} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Berita" component={Berita} />

      </Tab.Navigator>
    </NavigationContainer>
    );
}
