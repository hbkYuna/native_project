import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to my app!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FavouritePlaces')}>
                <Text style={styles.buttonText}>Enter the app</Text>
            </TouchableOpacity>
        </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
