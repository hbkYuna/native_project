import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TodoContext } from './conexts/TodoContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import WelcomeScreen from './Screens/WelcomeScreen';
import OverviewScreen from './Screens/OverviewScreen';
import DetailScreen from './Screens/DetailScreen';
import AddToDoScreen from './Screens/AddToDoScreen';
import ContactScreen from './Screens/ContactScreen'
import CryptoScreen from './Screens/CryptoScreen'


const Stack = createStackNavigator();

export default function App() {
    const [todoList, setTodoList] = useState([]);

    const handleAddTodo = (todo) => {
        setTodoList([...todoList, todo]);
    };

    return (
        <NavigationContainer>
            <TodoContext.Provider value={{ todoList, setTodoList }}>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Overview" component={OverviewScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                    <Stack.Screen name="AddTodo" component={AddToDoScreen} />
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Contact" component={ContactScreen} />
                    <Stack.Screen name="Crypto" component={CryptoScreen} />
                </Stack.Navigator>
            </TodoContext.Provider>
        </NavigationContainer>
    );

}