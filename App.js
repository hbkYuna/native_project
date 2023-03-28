import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WelcomeScreen from './Screens/WelcomeScreen';
import OverviewScreen from './Screens/OverviewScreen';
import DetailScreen from './Screens/DetailScreen';
import AddToDoScreen from './Screens/AddToDoScreen'

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Overview" component={OverviewScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                    <Stack.Screen name="AddTodo" component={AddToDoScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
